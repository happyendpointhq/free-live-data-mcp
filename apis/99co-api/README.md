# 99.co Singapore API: Free API and MCP access

Live Singapore property data from 99.co. Search condos, HDB, rentals, and sale listings, plus new launches, transactions, price trends, and agents.

![99.co Singapore API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/6fea1ac0-7cd9-4b5b-8243-dc1a24c63960.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/99-co-sg-api)
- [API overview and coverage](https://happyendpoint.com/library/99co-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `99-co-sg-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- New Launch Projects
- Transaction History
- Price Trends
- Nearby Amenities
- Agent Directory
- URL Resolver
- Location Autocomplete

## Source documentation notes

Real-time API for accessing **99.co Singapore real estate listings**, sale and rental properties, condo listings, new launch projects, project details, agent profiles, transaction history, price trends, nearby amenities, and structured Singapore property market data.
| Feature | Details |
| ----------------------- | ------------------------------------------------------ |
| Market Coverage | Singapore Real Estate |
| Property Types | Condos, HDB, landed homes, apartments, rentals, sales |
| Search Support | Property search, filtered search, listing counts |
| Project Data | New launches, upcoming projects, project details |
| Transaction Data | Sale/rent history, price trends, summary statistics |
| Agent Data | Agent search, public agent profiles, agency details |
| Nearby Amenities | MRT, schools, supermarkets, parks, commute times |
| API Type | Fast REST API via RapidAPI |

### Key Features

- Get full listing details by listing ID
- Resolve property details directly from a 99.co listing URL
- Retrieve similar and comparable listings
- Browse new launch and upcoming condo projects
- Access full project details, facilities, floor plans, and active units
- Get project details directly from a 99.co project URL
- Discover nearby MRT stations, schools, supermarkets, parks, and amenities
- Analyze sold and rental transaction history
- Retrieve price trends and market summary statistics
- Search Singapore real estate agents
- Access public agent profiles, contact info, agencies, and listing breakdowns
- Use autocomplete to find location IDs and project IDs for search filters

### Available Data

The API provides access to:

- 99.co property listings
- Sale listings
- Rental listings
- Condo listings
- HDB listings
- Landed property listings
- Property listing details
- Listing details by URL
- Similar property listings
- New launch projects
- Upcoming developments
- Project details
- Project details by URL
- Project facilities
- Floor plans

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `99co-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `_search-property`        | `GET /search-property`        | /search-property        |
| `_search-count`           | `GET /search-count`           | /search-count           |
| `_listing-details`        | `GET /listing-details`        | /listing-details        |
| `_listing-details-by-url` | `GET /listing-details-by-url` | /listing-details-by-url |
| `_similar-listings`       | `GET /similar-listings`       | /similar-listings       |
| `_new-projects`           | `GET /new-projects`           | /new-projects           |
| `_project-details`        | `GET /project-details`        | /project-details        |
| `_project-details-by-url` | `GET /project-details-by-url` | /project-details-by-url |
| `_project-nearby`         | `GET /project-nearby`         | /project-nearby         |
| `_transactions`           | `GET /transactions`           | /transactions           |
| `_transaction-trends`     | `GET /transaction-trends`     | /transaction-trends     |
| `_agents`                 | `GET /agents`                 | /agents                 |
| `_agent-details`          | `GET /agent-details`          | /agent-details          |
| `_autocomplete`           | `GET /autocomplete`           | /autocomplete           |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
