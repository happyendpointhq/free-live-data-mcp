import Ajv from "ajv";

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: true,
  strict: false,
  validateFormats: false,
});
const validators = new WeakMap();
const failure = (message) => ({ isError: true, message });

export function redact(text, key) {
  let result = String(text);
  if (key) result = result.split(key).join("[redacted credential]");
  return result
    .replace(
      /https?:\/\/[^\s"'<>\\]*\.workers\.dev[^\s"'<>\\]*/gi,
      "[redacted infrastructure]",
    )
    .replace(
      /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?[^\s"'<>\\]*/gi,
      "[redacted infrastructure]",
    )
    .replace(
      /(?:x-rapidapi-proxy-secret|HappyEndpointRapidAPIKey)[^\n,}]*/gi,
      "[redacted internal authentication]",
    );
}

function sanitize(value, key) {
  if (typeof value === "string") return redact(value, key);
  if (Array.isArray(value)) return value.map((item) => sanitize(item, key));
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([name, item]) => [
        redact(name, key),
        sanitize(item, key),
      ]),
    );
  return value;
}

function preview(value, limit, state, depth = 0) {
  if (depth > 12) {
    state.truncated = true;
    return "[nested data omitted]";
  }
  if (typeof value === "string" && value.length > 8000) {
    state.truncated = true;
    return value.slice(0, 8000) + " [truncated]";
  }
  if (Array.isArray(value)) {
    if (value.length > limit) state.truncated = true;
    return value
      .slice(0, limit)
      .map((item) => preview(item, limit, state, depth + 1));
  }
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([name, item]) => [
        name,
        preview(item, limit, state, depth + 1),
      ]),
    );
  return value;
}

async function readBounded(response, maxBytes) {
  if (Number(response.headers.get("content-length")) > maxBytes) {
    await response.body?.cancel().catch(() => {});
    throw new Error("too-large");
  }
  if (!response.body) return "";
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new Error("too-large");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function execute(
  catalog,
  request,
  {
    key = process.env.RAPIDAPI_KEY,
    fetcher = fetch,
    maxBytes = 2_000_000,
    timeoutMs = 25_000,
  } = {},
) {
  try {
    const api = catalog.api(request.apiId);
    if (api.schemaStatus !== "verified-documentation")
      return failure(
        "This API is awaiting provider schema confirmation. Use another source or check its listing.",
      );
    const op = catalog.describe(request.apiId, request.operationId);
    if (!key || key === "replace_with_your_rapidapi_key")
      return failure(
        "Configure RAPIDAPI_KEY in your MCP client environment and join the selected API free plan.",
      );
    if (
      !/^[a-z0-9-]+\.p\.rapidapi\.com$/.test(api.host) ||
      op.method !== "GET" ||
      !/^\/(?!\/)/.test(op.path)
    )
      return failure("Unsupported API destination or method.");
    const parameters = structuredClone(request.parameters ?? {});
    for (const name of op.inputSchema.required ?? []) {
      const value = parameters[name];
      if (
        !Object.hasOwn(parameters, name) ||
        value === undefined ||
        value === null ||
        (typeof value === "string" && !value.trim())
      )
        return failure(
          "Invalid parameters: supply the required " +
            name +
            " explicitly. Use source lookup results for entity identifiers.",
        );
    }
    let validate = validators.get(op);
    if (!validate) {
      validate = ajv.compile(op.inputSchema);
      validators.set(op, validate);
    }
    if (!validate(parameters))
      return failure(
        "Invalid parameters: " +
          redact(ajv.errorsText(validate.errors, { separator: "; " }), key),
      );
    let route = op.path;
    for (const param of op.parameters.filter((p) => p.in === "path")) {
      const value = String(parameters[param.name]);
      if (value === "." || value === ".." || /[\/?#\\]/.test(value))
        return failure(
          "Invalid path parameter. Use the source entity identifier, not a URL or path.",
        );
      route = route.replaceAll(
        "{" + param.name + "}",
        encodeURIComponent(value),
      );
    }
    const url = new URL("https://" + api.host + route);
    if (url.hostname !== api.host || /\{[^}]*\}/.test(route))
      return failure("Invalid API route.");
    for (const param of op.parameters.filter((p) => p.in === "query")) {
      const value = parameters[param.name];
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        if (param.explode === false)
          url.searchParams.set(param.name, value.join(","));
        else
          value.forEach((item) =>
            url.searchParams.append(param.name, String(item)),
          );
      } else url.searchParams.set(param.name, String(value));
    }
    const response = await fetcher(url.toString(), {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": api.host,
        accept: "application/json",
      },
      redirect: "error",
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) {
      await response.body?.cancel().catch(() => {});
      const explanations = {
        401: "Check RAPIDAPI_KEY.",
        403: "Join this API free plan or check whether this operation requires another plan.",
        429: "The request allowance or rate limit was reached. Check the listing before retrying.",
      };
      return failure(
        `Upstream HTTP ${response.status}. ${explanations[response.status] ?? "The source did not return usable data. Try later."}`,
      );
    }
    const text = await readBounded(response, maxBytes);
    let data;
    try {
      data = sanitize(JSON.parse(text), key);
    } catch {
      return failure(
        "The source returned a non-JSON response. Check the API documentation.",
      );
    }
    const state = { truncated: false };
    data = preview(
      data,
      Math.min(100, Math.max(1, request.maxItems ?? 20)),
      state,
    );
    if (JSON.stringify(data).length > 50_000) {
      state.truncated = true;
      data = {
        preview: JSON.stringify(data).slice(0, 45_000),
        note: "Text preview only; narrow the query or paginate the upstream API.",
      };
    }
    const quota = redact(
      response.headers.get("x-ratelimit-requests-remaining") ?? "",
      key,
    );
    return {
      apiId: api.id,
      operationId: op.id,
      source: api.rapidApiUrl,
      fetchedAt: new Date().toISOString(),
      remainingRequests: /^\d{1,12}$/.test(quota) ? quota : null,
      truncated: state.truncated,
      data,
    };
  } catch (error) {
    if (error.message === "too-large")
      return failure(
        "The source response is too large. Narrow your query or use source pagination.",
      );
    return failure(
      "Request could not be completed. Check the selected API and operation, network access and parameters. Redirects are not followed.",
    );
  }
}
