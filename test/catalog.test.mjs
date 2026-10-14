import { test } from "node:test";
import assert from "node:assert/strict";
import Ajv from "ajv";
import { loadCatalog } from "../src/catalog.mjs";

test("every published catalog entry has runnable, internally consistent request schemas", () => {
  const catalog = loadCatalog();
  assert.equal(catalog.apis.length, 48);
  assert.equal(new Set(catalog.apis.map((a) => a.id)).size, 48);
  const ajv = new Ajv({ strict: false, validateFormats: false });
  for (const api of catalog.apis) {
    assert.match(api.host, /^[a-z0-9-]+\.p\.rapidapi\.com$/);
    assert.equal(api.schemaStatus, "verified-documentation");
    const operations = catalog.operations.get(api.id);
    assert.equal(operations.length, api.operationCount);
    assert(operations.length > 0);
    assert.equal(new Set(operations.map((o) => o.id)).size, operations.length);
    for (const op of operations) {
      assert.equal(op.method, "GET");
      assert(op.path.startsWith("/"));
      assert.doesNotThrow(
        () => ajv.compile(op.inputSchema),
        `${api.id}/${op.id}`,
      );
      for (const param of op.parameters)
        assert.deepEqual(
          op.inputSchema.properties[param.name].type,
          param.schema.type,
        );
    }
  }
  const pf = catalog.api("propertyfinder-api");
  assert.equal(pf.host, "uae-real-estate-property.p.rapidapi.com");
  assert.equal(pf.schemaSource, "RapidAPI live MCP tool metadata");
  assert.equal(pf.operationCount, 21);
});
