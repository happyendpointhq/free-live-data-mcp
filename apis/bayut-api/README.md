# Bayut UAE Data: Free API and MCP access

Bayut API for UAE property data - 500K+ Dubai and Abu Dhabi listings, agent and agency profiles, off-plan projects, and transaction history.

![Bayut UAE Data source logo](https://rapidapi-prod-apis.s3.amazonaws.com/414d2f9d-a7b4-4219-8979-10e608963f99.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/uae-real-estate3)
- [API overview and coverage](https://happyendpoint.com/library/bayut-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `uae-real-estate3.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- Off-Plan Projects
- Agent Directory
- Agency Search
- Amenities Filter
- Location Autocomplete
- No Proxies Required
- JSON Responses

## Source documentation notes

### What You Get

- Property listings
- Agents & agencies
- Locations & amenities
- New projects

### Use Cases

- Real estate apps
- Analytics tools
- Investment dashboards
- Lead generation

### Flexible Search Filters

Search properties using filters such as:

- location
- price range
- bedrooms
- bathrooms
- property type
- amenities
- completion status
- and more

### Available Endpoints

### Location Endpoints

### Property Search Endpoints

### `/search-property`

This endpoint allows you to filter listings using multiple criteria including:

- location
- property type
- bedrooms
- bathrooms
- price range
- area size
- amenities
- completion status
- purpose (sale or rent)
  Use this endpoint to build:
- **property listing websites**
- **real estate mobile apps**
- **property comparison tools**
- **investment dashboards**
  Example data returned:
- property title
- price
- bedrooms
- bathrooms
- property type
- area size
- location
- listing images
- amenities
- listing agent

### `/search-new-projects`

Search **off-plan properties and new development projects in Dubai**.
Off-plan properties are properties **under construction or recently launched developments**.
This endpoint is ideal for applications focused on:

- **Dubai off-plan property investment**
- **new real estate development tracking**
- **project comparison tools**
- **investment research platforms**
  Example returned data:
- project name
- developer
- location
- starting price
- completion status
- available floor plans

### Agent Endpoints

### `/agent-search-by-name`

Search **real estate agents in Dubai and the UAE by name**.
Returns matching agents including:

- agent name
- agency
- badges
- languages
- property listing count
  This endpoint is useful for building:
- **agent directories**
- **agent search tools**
- **real estate CRM integrations**

### `/agent-properties`

Retrieve **all property listings from a specific real estate agent**.
This allows you to build:

- agent profile pages
- agent listing dashboards
- agent performance analytics
  You will need the **agent owner ID** from the agent data to retrieve listings.

### Agency Endpoints

### `/agency-search`

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `bayut-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID               | Request                         | Purpose                                  |
| -------------------------- | ------------------------------- | ---------------------------------------- |
| `get_health`               | `GET /health`                   | /health                                  |
| `autocomplete`             | `GET /autocomplete`             | Search for locations in Dubai/UAE        |
| `search-property`          | `GET /search-property`          | Search properties for sale or rent       |
| `search-new-projects`      | `GET /search-new-projects`      | Search new off-plan development projects |
| `property-details`         | `GET /property-details`         | Get detailed property information        |
| `agent-search`             | `GET /agent-search`             | Search real estate agents by filters     |
| `agent-search-by-name`     | `GET /agent-search-by-name`     | Search agents by name                    |
| `agent-details`            | `GET /agent-details`            | Get agent details                        |
| `agent-properties`         | `GET /agent-properties`         | Get properties listed by an agent        |
| `agency-search`            | `GET /agency-search`            | Search agencies by location              |
| `agency-search-by-name`    | `GET /agency-search-by-name`    | Search agencies by name                  |
| `agency-details`           | `GET /agency-details`           | Get agency details                       |
| `agency-agents`            | `GET /agency-agents`            | Get agents in an agency                  |
| `agency-properties`        | `GET /agency-properties`        | Get properties listed by an agency       |
| `developer-search-by-name` | `GET /developer-search-by-name` | Search developers by name                |
| `transactions`             | `GET /transactions`             | Get property transaction history         |
| `amenities-search`         | `GET /amenities-search`         | Search available amenities               |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
