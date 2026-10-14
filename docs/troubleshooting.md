# Troubleshooting

## The MCP server does not start

Check that Node.js 22 or newer is available to the client, dependencies were installed with `npm ci`, and the server path is absolute. A GUI application may use a different environment from your terminal. Configure the full Node executable path if needed.

The server communicates over stdio. Running `npm start` in a terminal without an MCP client can wait silently for protocol messages. Use `node examples/discover.mjs "your task"` for a quick catalog check.

## Discovery works but live calls fail

Discovery uses bundled metadata. Live calls need `RAPIDAPI_KEY` in the launched process environment and a subscription to the selected API. The connector does not automatically load `.env`; configure the client environment, its supported env-file option, or your shell.

| Result                         | What to check                                                    |
| ------------------------------ | ---------------------------------------------------------------- |
| Missing `RAPIDAPI_KEY`         | Set the key in the client/server environment                     |
| HTTP 401                       | Check that the application key is valid                          |
| HTTP 403                       | Check the API subscription and the operation's plan access       |
| HTTP 429                       | Check remaining allowance and rate limits before retrying        |
| Invalid parameters             | Inspect `describe_endpoint` for required fields, types and enums |
| Response too large             | Narrow the query or use source pagination                        |
| Non-JSON response              | Check upstream availability and the operation documentation      |
| Request could not be completed | Check connectivity and parameters; redirects are rejected        |

## The API exists but the search does not find it

Search uses local keyword matching over names, descriptions, tags and operation metadata. Try a source name, country or a shorter task description. Search is not an embedding service or another AI model.

## Records are missing from the response preview

`maxItems` limits arrays in the returned preview. It does not change the upstream API's page size. Responses include `truncated: true` when data is shortened. Narrow the query, request specific details or use the API's documented pagination parameters.

## The documentation differs from the source

Metadata is a checked snapshot. Source endpoints can change. Open an issue with the API ID, operation ID, request field names and a redacted error. Include no keys, private client configurations or customer data. Contributions should use verified public request documentation.

The executor accepts JSON responses. For example, PropertyFinder's `search-agents-by-name` operation describes raw HTML. It can be discovered here, but if the upstream response is HTML, use an API client that supports that response format.
