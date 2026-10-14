# UAE Real Estate API: Free API and MCP access

Bayut and PropertyFinder in one UAE real estate API - 450K+ Dubai and Abu Dhabi listings, agent profiles, agencies, and transaction records as JSON.

![UAE Real Estate API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/6a48745a-2fee-4460-8cb4-b77fbb086bf2.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/uae-real-estate-api)
- [API overview and coverage](https://happyendpoint.com/library/uae-realestate-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `uae-real-estate-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Bayut and PropertyFinder Data
- Property Search
- Agent Search
- Agency Search
- Transaction History
- Single API Key
- Location Autocomplete
- 450,000+ Listings

## Source documentation notes

### Endpoints

### Property Endpoints

| Endpoint                 | Description                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `GET /autocomplete`      | Location search with auto-complete. Returns location IDs with coordinates.                                      |
| `GET /search-properties` | Search properties for rent or sale. 15+ filters including bedrooms, price, area, furnishing, completion status. |
| `GET /property-details`  | Full property details - photos, description, amenities, agent info, floor plans, off-plan details.              |

### Agent Endpoints

| Endpoint                | Description                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `GET /search-agents`    | Find real estate agents by name (Bayut) or location (both platforms). Filter by purpose (sale/rent) and category. |
| `GET /agent-details`    | Detailed agent profile with contact info, service areas, listings stats, badges. (Bayut)                          |
| `GET /agent-properties` | All properties listed by a specific agent. Supports pagination and sorting.                                       |

### Agency / Broker Endpoints

| Endpoint                 | Description                                                                             |
| ------------------------ | --------------------------------------------------------------------------------------- |
| `GET /search-agencies`   | Search real estate agencies (Bayut) or brokerages (PropertyFinder) by name or location. |
| `GET /agency-details`    | Full agency/broker profile with agent count, listing stats, contact info. (Bayut)       |
| `GET /agency-properties` | All properties listed by a specific agency or brokerage.                                |

### Transaction Endpoints

| Endpoint                | Description                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `GET /get-transactions` | Historical property transaction data (sales & rentals). Filter by property type, bedrooms, time period, sort order. |

### Property Search Filters

| Filter                    | Description                                                                      | Example            |
| ------------------------- | -------------------------------------------------------------------------------- | ------------------ |
| `property_type`           | Apartment, villa, townhouse, penthouse, office, shop, warehouse, hotel-apartment | `apartment,villa`  |
| `bedrooms`                | Number of bedrooms (0 = studio)                                                  | `0,1,2,3`          |
| `bathrooms`               | Number of bathrooms                                                              | `1,2`              |
| `price_min` / `price_max` | Price range in AED                                                               | `50000` / `200000` |
| `area_min` / `area_max`   | Area in sqft                                                                     | `500` / `2000`     |
| `furnishing`              | Furnished or unfurnished                                                         | `furnished`        |
| `rent_frequency`          | Yearly, monthly, weekly, daily                                                   | `yearly`           |
| `sort`                    | Popular, newest, price low/high                                                  | `price_low`        |

### Transaction Filters

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `uae-realestate-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID               | Request                  | Purpose                                             |
| -------------------------- | ------------------------ | --------------------------------------------------- |
| `get_health`               | `GET /health`            | /health                                             |
| `uae-re-autocomplete`      | `GET /autocomplete`      | Search for locations on Bayut or PropertyFinder     |
| `uae-re-search-properties` | `GET /search-properties` | Search properties for rent or sale                  |
| `uae-re-property-details`  | `GET /property-details`  | Get detailed property information                   |
| `uae-re-search-agents`     | `GET /search-agents`     | Search real estate agents                           |
| `uae-re-agent-details`     | `GET /agent-details`     | Get agent profile details                           |
| `uae-re-agent-properties`  | `GET /agent-properties`  | Get properties listed by an agent                   |
| `uae-re-search-agencies`   | `GET /search-agencies`   | Search agencies (Bayut) or brokers (PropertyFinder) |
| `uae-re-agency-details`    | `GET /agency-details`    | Get agency/broker profile details                   |
| `uae-re-agency-properties` | `GET /agency-properties` | Get properties listed by an agency/broker           |
| `uae-re-get-transactions`  | `GET /get-transactions`  | Get historical property transactions                |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
