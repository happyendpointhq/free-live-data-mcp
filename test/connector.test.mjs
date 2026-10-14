import { test } from "node:test";
import assert from "node:assert/strict";
import { Catalog } from "../src/catalog.mjs";
import { execute } from "../src/executor.mjs";

const operation = {
  id: "find",
  method: "GET",
  path: "/locations/{location}/properties",
  summary: "Search rental property prices",
  parameters: [
    {
      name: "location",
      in: "path",
      required: true,
      schema: { type: "string" },
    },
    {
      name: "page",
      in: "query",
      schema: { type: "integer", minimum: 1, default: 1 },
    },
    { name: "furnished", in: "query", schema: { type: "boolean" } },
    {
      name: "kind",
      in: "query",
      schema: { type: "string", enum: ["rent", "buy"] },
    },
  ],
  inputSchema: {
    type: "object",
    properties: {
      location: { type: "string" },
      page: { type: "integer", minimum: 1, default: 1 },
      furnished: { type: "boolean" },
      kind: { type: "string", enum: ["rent", "buy"] },
    },
    required: ["location"],
    additionalProperties: false,
  },
};
const api = {
  id: "example",
  name: "Example UAE property API",
  description: "Live Dubai rentals",
  category: "real-estate",
  tags: ["rentals", "dubai"],
  host: "example.p.rapidapi.com",
  rapidApiUrl: "https://rapidapi.com/happyendpoint/api/example",
  schemaStatus: "verified-documentation",
  operationCount: 1,
};
const catalog = new Catalog([api], new Map([["example", [operation]]]));
const key = "private-test-key";
const response = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json",
      "x-ratelimit-requests-remaining": "997",
    },
  });

test("finds a source and its operation from a user task", () => {
  assert.equal(catalog.searchApis("Dubai rental")[0].id, "example");
  assert.equal(
    catalog.searchEndpoints("example", "rental prices")[0].id,
    "find",
  );
  assert.equal(catalog.searchApis("", "travel").length, 0);
  assert.deepEqual(catalog.describe("example", "find").inputSchema.required, [
    "location",
  ]);
  assert.throws(() => catalog.describe("missing", "find"), /Unknown API/);
});

test("validates required inputs, enum values, ranges and unknown arguments before calling", async () => {
  let calls = 0;
  const fetcher = async () => {
    calls++;
    return response({});
  };
  for (const params of [
    {},
    { location: "dubai", kind: "other" },
    { location: "dubai", page: 0 },
    { location: "dubai", unexpected: 1 },
  ]) {
    const result = await execute(
      catalog,
      { apiId: "example", operationId: "find", parameters: params },
      { key, fetcher },
    );
    assert(result.isError);
    assert.match(result.message, /Invalid parameters/);
  }
  assert.equal(calls, 0);
});

test("required inputs stay explicit even when source metadata supplies an example default", async () => {
  const op = structuredClone(operation);
  op.inputSchema.properties.location.default = "example-location";
  const c = new Catalog([api], new Map([["example", [op]]]));
  let calls = 0;
  const result = await execute(
    c,
    { apiId: "example", operationId: "find", parameters: {} },
    {
      key,
      fetcher: async () => {
        calls++;
        return response({});
      },
    },
  );
  assert(result.isError);
  assert.equal(calls, 0);
});

test("encodes values, preserves false, supplies documented defaults and uses only the catalog host", async () => {
  let request;
  const result = await execute(
    catalog,
    {
      apiId: "example",
      operationId: "find",
      parameters: { location: "Dubai Marina", furnished: false },
    },
    {
      key,
      fetcher: async (url, init) => {
        request = { url, init };
        return response({ results: [{ price: 1000 }] });
      },
    },
  );
  const url = new URL(request.url);
  assert.equal(url.hostname, "example.p.rapidapi.com");
  assert.equal(url.pathname, "/locations/Dubai%20Marina/properties");
  assert.equal(url.searchParams.get("furnished"), "false");
  assert.equal(url.searchParams.get("page"), "1");
  assert.equal(request.init.headers["x-rapidapi-key"], key);
  assert.equal(request.init.redirect, "error");
  assert.equal(result.remainingRequests, "997");
  assert.equal(result.data.results[0].price, 1000);
});

test("missing keys and unconfirmed schemas produce actionable errors without network calls", async () => {
  let calls = 0;
  const fetcher = async () => {
    calls++;
    return response({});
  };
  assert.match(
    (
      await execute(
        catalog,
        {
          apiId: "example",
          operationId: "find",
          parameters: { location: "x" },
        },
        { fetcher },
      )
    ).message,
    /RAPIDAPI_KEY/,
  );
  const pending = new Catalog(
    [{ ...api, schemaStatus: "awaiting-provider-confirmation" }],
    new Map([["example", [operation]]]),
  );
  assert(
    (
      await execute(
        pending,
        {
          apiId: "example",
          operationId: "find",
          parameters: { location: "x" },
        },
        { key, fetcher },
      )
    ).isError,
  );
  assert.equal(calls, 0);
});

test("rejects unsafe hosts and path traversal before sending credentials", async () => {
  let calls = 0;
  const fetcher = async () => {
    calls++;
    return response({});
  };
  const bad = new Catalog(
    [{ ...api, host: "outside.invalid" }],
    new Map([["example", [operation]]]),
  );
  assert(
    (
      await execute(
        bad,
        {
          apiId: "example",
          operationId: "find",
          parameters: { location: "x" },
        },
        { key, fetcher },
      )
    ).isError,
  );
  for (const location of ["..", ".", "../x", "x/../y", "x?key=y", "x#fragment"])
    assert(
      (
        await execute(
          catalog,
          { apiId: "example", operationId: "find", parameters: { location } },
          { key, fetcher },
        )
      ).isError,
    );
  assert.equal(calls, 0);
});

test("upstream errors, redirects and exceptions never expose raw bodies or credentials", async () => {
  for (const status of [301, 401, 403, 429, 500]) {
    const result = await execute(
      catalog,
      { apiId: "example", operationId: "find", parameters: { location: "x" } },
      { key, fetcher: async () => response({ secret: key }, status) },
    );
    assert(result.isError);
    assert(!JSON.stringify(result).includes(key));
  }
  const result = await execute(
    catalog,
    { apiId: "example", operationId: "find", parameters: { location: "x" } },
    {
      key,
      fetcher: async () => {
        throw Error(key);
      },
    },
  );
  assert(result.isError);
  assert(!JSON.stringify(result).includes(key));
});

test("redacts configured keys and private infrastructure even in successful responses", async () => {
  const internalUrl =
    "https://" + "private-test." + ["workers", "dev"].join(".") + "/path";
  const result = await execute(
    catalog,
    { apiId: "example", operationId: "find", parameters: { location: "x" } },
    {
      key,
      fetcher: async () =>
        response({ value: key, nested: { value: internalUrl } }),
    },
  );
  assert(!JSON.stringify(result).includes(key));
  assert(!JSON.stringify(result).includes("workers.dev"));
});

test("sanitizes decoded JSON values, object keys and untrusted quota headers", async () => {
  const internalUrl =
    "https://" + "private-test." + ["workers", "dev"].join(".") + "/path";
  const escapedKey = [...key]
    .map((c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"))
    .join("");
  const raw = JSON.stringify({ [key]: key, url: internalUrl })
    .replaceAll(key, escapedKey)
    .replaceAll("/", "\\/");
  const result = await execute(
    catalog,
    { apiId: "example", operationId: "find", parameters: { location: "x" } },
    {
      key,
      fetcher: async () =>
        new Response(raw, {
          headers: {
            "content-type": "application/json",
            "x-ratelimit-requests-remaining": key,
          },
        }),
    },
  );
  assert(!JSON.stringify(result).includes(key));
  assert(!JSON.stringify(result).includes(internalUrl));
  assert.equal(result.remainingRequests, null);
});

test("caps result arrays and rejects oversized upstream bodies", async () => {
  const request = {
    apiId: "example",
    operationId: "find",
    parameters: { location: "x" },
    maxItems: 2,
  };
  const result = await execute(catalog, request, {
    key,
    fetcher: async () => response({ results: [1, 2, 3, 4] }),
  });
  assert.equal(result.data.results.length, 2);
  assert(result.truncated);
  const large = await execute(catalog, request, {
    key,
    maxBytes: 10,
    fetcher: async () => response({ text: "x".repeat(50) }),
  });
  assert(large.isError);
  assert.match(large.message, /too large/);
});
