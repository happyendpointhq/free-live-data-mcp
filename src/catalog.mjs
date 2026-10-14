import fs from "node:fs";

const tokens = (value) =>
  String(value ?? "")
    .toLowerCase()
    .match(/[a-z0-9]+/g) ?? [];
const score = (text, query) => {
  const haystack = tokens(text).join(" ");
  return tokens(query).reduce(
    (total, word) => total + (haystack.includes(word) ? 1 : 0),
    0,
  );
};

export class Catalog {
  constructor(apis, operations) {
    this.apis = apis;
    this.operations = operations;
  }
  api(id) {
    const api = this.apis.find((api) => api.id === id);
    if (!api)
      throw new Error(
        "Unknown API. Use search_apis to find a supported API ID.",
      );
    return api;
  }
  searchApis(query = "", category, limit = 10) {
    return this.apis
      .filter((api) => !category || api.category === category)
      .map((api) => ({
        api,
        rank: score(
          [
            api.id,
            api.name,
            api.description,
            ...(api.tags ?? []),
            ...(api.features ?? []),
          ].join(" "),
          query,
        ),
      }))
      .filter((item) => !query.trim() || item.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, Math.min(48, Math.max(1, limit)))
      .map(({ api }) => ({
        id: api.id,
        name: api.name,
        category: api.category,
        description: api.description,
        operationCount: api.operationCount,
        rapidApiUrl: api.rapidApiUrl,
        freeTier: api.freeTier,
        schemaStatus: api.schemaStatus,
      }));
  }
  searchEndpoints(apiId, query = "", limit = 10) {
    const apis = apiId ? [this.api(apiId)] : this.apis;
    return apis
      .flatMap((api) =>
        (this.operations.get(api.id) ?? []).map((op) => ({
          apiId: api.id,
          op,
          rank: score(
            [
              op.id,
              op.path,
              op.summary,
              op.description,
              ...(op.tags ?? []),
              ...op.parameters.map((p) => p.name + " " + p.description),
            ].join(" "),
            query,
          ),
        })),
      )
      .filter((item) => !query.trim() || item.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, Math.min(30, Math.max(1, limit)))
      .map(({ apiId, op }) => ({
        apiId,
        id: op.id,
        method: op.method,
        path: op.path,
        summary: op.summary,
        requiredParameters: op.inputSchema.required ?? [],
        healthCheck: op.healthCheck,
      }));
  }
  describe(apiId, operationId) {
    this.api(apiId);
    const op = (this.operations.get(apiId) ?? []).find(
      (op) => op.id === operationId,
    );
    if (!op)
      throw new Error(
        "Unknown operation. Use search_endpoints to find an operation ID.",
      );
    return op;
  }
}

export function loadCatalog(root = new URL("../", import.meta.url)) {
  const { apis } = JSON.parse(
    fs.readFileSync(new URL("catalog.json", root), "utf8"),
  );
  const operations = new Map(
    apis.map((api) => [
      api.id,
      JSON.parse(
        fs.readFileSync(
          new URL(`apis/${api.id}/operations.json`, root),
          "utf8",
        ),
      ),
    ]),
  );
  return new Catalog(apis, operations);
}
