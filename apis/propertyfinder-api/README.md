# PropertyFinder UAE Data: Free API and MCP access

PropertyFinder API for live UAE real estate data - 500K+ listings with price trends, agent data, and new projects, as structured JSON via RapidAPI.

![PropertyFinder UAE Data source logo](https://rapidapi-prod-apis.s3.amazonaws.com/05b8ee7f-e368-448c-bd7c-92d355544b8d.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/uae-real-estate-property)
- [API overview and coverage](https://happyendpoint.com/library/propertyfinder-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `uae-real-estate-property.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- Agent Directory
- Broker Database
- Market Intelligence
- Transaction History
- Price Trends
- New Projects
- Commercial Listings
- Developer Directory
- Redis Caching

## Source documentation notes

PropertyFinder API for live UAE real estate data - 500K+ listings with price trends, agent data, and new projects, as structured JSON via RapidAPI.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `propertyfinder-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                        | Purpose                                                                                                                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get-transactions-v2`     | `GET /get-transactions-v2`     | Get Dubai sale and rental transactions. Filter by location, period, property type, bedrooms, price, area, rental contract status, or seller type. Each page contains up to 10 transactions, with a maximum of 500 accessible matches per query. Check pagination.is_truncated when total_matching exceeds the accessible results. |
| `health`                  | `GET /health`                  | health                                                                                                                                                                                                                                                                                                                            |
| `get-adrec-transactions`  | `GET /get-adrec-transactions`  | Get historical property transaction data for Abu Dhabi from ADREC. Allows filtering by district and property type.                                                                                                                                                                                                                |
| `price-trend-of-location` | `GET /price-trend-of-location` | Get property price trends for a specific location and property type.                                                                                                                                                                                                                                                              |
| `search-agents-detailed`  | `GET /search-agents-detailed`  | Search for real estate agents in UAE (Higher Plan). Returns full detailed raw response.                                                                                                                                                                                                                                           |
| `search-brokers-detailed` | `GET /search-brokers-detailed` | Search for real estate brokerages and agencies in UAE. Returns full detailed raw response.                                                                                                                                                                                                                                        |
| `real-estate-developer`   | `GET /real-estate-developer`   | Get a list of real estate developers in UAE by emirate. Returns developer profiles and their projects.                                                                                                                                                                                                                            |
| `property-insight`        | `GET /property-insight`        | Get community insights and market analysis for a specific location.                                                                                                                                                                                                                                                               |
| `search-commercial-rent`  | `GET /search-commercial-rent`  | Search commercial properties available for rent in UAE. Filter by location, property type, price range, and area. Returns parsed, structured data.                                                                                                                                                                                |
| `broker-properties`       | `GET /broker-properties`       | Get all properties listed by a specific real estate brokerage or agency. Filter by property category (for sale, for rent, commercial). Returns parsed structured data.                                                                                                                                                            |
| `search-rent`             | `GET /search-rent`             | Search residential properties available for rent in UAE. Filter by location, property type, bedrooms, bathrooms, price range, amenities, and more. Returns parsed, structured data.                                                                                                                                               |
| `search-new-projects`     | `GET /search-new-projects`     | Search for new development projects and off-plan properties in UAE. Filter by location, property type, bedrooms, price range, and delivery date. Returns parsed, structured data.                                                                                                                                                 |
| `get-transactions`        | `GET /get-transactions`        | Get historical property transaction data (sales and rentals) for a location. Useful for market analysis and price trends.                                                                                                                                                                                                         |
| `agent-properties`        | `GET /agent-properties`        | Get all properties listed by a specific real estate agent. Filter by property category (for sale, for rent, commercial). Returns parsed, structured data.                                                                                                                                                                         |
| `property-details`        | `GET /property-details`        | Get detailed information about a specific property by ID.                                                                                                                                                                                                                                                                         |
| `search-buy`              | `GET /search-buy`              | Search residential properties available for purchase in UAE. Filter by location, property type, bedrooms, bathrooms, price range, completion status, amenities, and more. Returns parsed, structured data.                                                                                                                        |
| `search-agents`           | `GET /search-agents`           | Search for real estate agents in UAE. Returns structured, simpler response data.                                                                                                                                                                                                                                                  |
| `search-agents-by-name`   | `GET /search-agents-by-name`   | Search for real estate agents by their name in UAE. Returns raw HTML for now.                                                                                                                                                                                                                                                     |
| `search-brokers`          | `GET /search-brokers`          | Search for real estate brokerages and agencies in UAE. Returns structured, simpler response data.                                                                                                                                                                                                                                 |
| `autocomplete-location`   | `GET /autocomplete-location`   | Get location suggestions and IDs for property searches. Returns location IDs that can be used as input for property search endpoints.                                                                                                                                                                                             |
| `search-commercial-buy`   | `GET /search-commercial-buy`   | Search commercial properties available for purchase in UAE. Filter by location, property type, price range, and area. Returns parsed, structured data.                                                                                                                                                                            |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
