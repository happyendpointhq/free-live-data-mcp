import { loadCatalog } from "../src/catalog.mjs";
const catalog = loadCatalog();
const query = process.argv.slice(2).join(" ");
console.log(JSON.stringify({ apis: catalog.searchApis(query) }, null, 2));
