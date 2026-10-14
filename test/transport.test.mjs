import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

test("a real MCP client discovers sources and schemas over stdio without a credential", async () => {
  const client = new Client({ name: "connector-test", version: "0.1.0" });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [fileURLToPath(new URL("../src/server.mjs", import.meta.url))],
    env: { PATH: process.env.PATH },
  });
  try {
    await client.connect(transport);
    const { tools } = await client.listTools();
    assert.deepEqual(
      tools.map((t) => t.name),
      ["search_apis", "search_endpoints", "describe_endpoint", "call_endpoint"],
    );
    const source = await client.callTool({
      name: "search_apis",
      arguments: { query: "IKEA" },
    });
    assert(source.structuredContent.apis.some((a) => a.id === "ikea-pro"));
    const ops = await client.callTool({
      name: "search_endpoints",
      arguments: { apiId: "ikea-pro", query: "product" },
    });
    assert(ops.structuredContent.operations.length > 0);
    const op = ops.structuredContent.operations[0];
    const details = await client.callTool({
      name: "describe_endpoint",
      arguments: { apiId: "ikea-pro", operationId: op.id },
    });
    assert.equal(details.structuredContent.inputSchema.type, "object");
    const denied = await client.callTool({
      name: "call_endpoint",
      arguments: { apiId: "ikea-pro", operationId: op.id },
    });
    assert(denied.isError);
    assert.match(denied.structuredContent.message, /RAPIDAPI_KEY/);
    const invalid = await client.callTool({
      name: "search_apis",
      arguments: { limit: -1 },
    });
    assert(invalid.isError);
  } finally {
    await client.close();
  }
});
