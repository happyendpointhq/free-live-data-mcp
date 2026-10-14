import { loadCatalog } from "../src/catalog.mjs";
import { execute } from "../src/executor.mjs";
const [apiId, operationId, input = "{}"] = process.argv.slice(2);
if (!apiId || !operationId) {
  console.error(
    "Usage: node examples/query.mjs <api-id> <operation-id> <parameters-json>",
  );
  process.exitCode = 1;
} else {
  try {
    const result = await execute(loadCatalog(), {
      apiId,
      operationId,
      parameters: JSON.parse(input),
    });
    console.log(JSON.stringify(result, null, 2));
    if (result.isError) process.exitCode = 1;
  } catch {
    console.error(
      "Parameters must be valid JSON. Inspect the operation schema first.",
    );
    process.exitCode = 1;
  }
}
