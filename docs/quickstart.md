# Connect an AI agent to free live-data APIs

## Choose your sources

Browse the [API catalog](../README.md#supported-apis) and open the source's RapidAPI listing. Sign in, join its free plan and copy an application key from the RapidAPI dashboard. Enroll in every API you want to call. A key identifies your application; subscriptions determine which APIs it can access.

Up to 1,000 calls are available on the free plans without a credit card. Check each listing for the exact allowance, reset period, endpoint restrictions and rate limits.

## Install from GitHub

Install Node.js 22 or newer, then:

```sh
git clone https://github.com/happyendpointhq/free-live-data-mcp.git
cd free-live-data-mcp
npm ci
```

The connector runs locally using stdio. Your MCP client launches it and supplies its environment. Keep a clone if you want to read or modify the source.

## Claude Desktop or another stdio client

Use this configuration in the client's MCP settings:

```json
{
  "mcpServers": {
    "free-live-data": {
      "command": "node",
      "args": ["/absolute/path/free-live-data-mcp/src/server.mjs"],
      "env": { "RAPIDAPI_KEY": "YOUR_RAPIDAPI_KEY" }
    }
  }
}
```

Use the absolute path to your clone. If a desktop application cannot find Node, set `command` to your Node executable's absolute path. Reload the client after saving. [Official MCP server setup guide](https://modelcontextprotocol.io/docs/develop/build-server)

## Cursor

Add a server to Cursor's `mcp.json`:

```json
{
  "mcpServers": {
    "free-live-data": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/free-live-data-mcp/src/server.mjs"],
      "env": { "RAPIDAPI_KEY": "${env:RAPIDAPI_KEY}" }
    }
  }
}
```

Set `RAPIDAPI_KEY` in the environment available to Cursor. Its configuration interpolation keeps the credential out of shared project files. You can also use a private local `envFile` with Cursor's stdio transport. See [Cursor's MCP documentation](https://cursor.com/docs/mcp).

## Run a pinned version without a clone

After the `v0.1.0` GitHub tag is available, a compatible client can launch the GitHub package directly:

```json
{
  "mcpServers": {
    "free-live-data": {
      "command": "npx",
      "args": [
        "--yes",
        "--package=git+https://github.com/happyendpointhq/free-live-data-mcp.git#v0.1.0",
        "free-live-data-mcp"
      ],
      "env": { "RAPIDAPI_KEY": "YOUR_RAPIDAPI_KEY" }
    }
  }
}
```

This uses the GitHub source package. There is no separate npm-registry package or hosted HTTP endpoint in this release. Clients need permission to launch a local command; clients that only accept remote MCP URLs require a different deployment.

## Try discovery first

This example runs without a key:

```sh
node examples/discover.mjs "Dubai rentals"
```

In your AI client, ask:

> Use the free-live-data tools to find an API for Dubai rentals. Inspect its location lookup and rental search inputs before making a request. Ask me if any choices are unclear.

`search_apis`, `search_endpoints` and `describe_endpoint` use local catalog metadata. `call_endpoint` makes one request to the selected API using your key.

## Command-line request example

With `RAPIDAPI_KEY` configured in your shell:

```sh
node examples/query.mjs bayut-api autocomplete '{"query":"Dubai Marina"}'
```

This calls the documented Bayut location lookup. Live availability depends on your subscription and the source. Do not put credentials in command arguments or share configurations containing a real key.
