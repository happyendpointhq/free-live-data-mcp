# Yad2 Israel API: Free API and MCP access

Israel marketplace data from Yad2. Search real estate, vehicles, and second-hand listings, get details and maps, plus government-registered sale prices.

![Yad2 Israel API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/b9cf10ec-1ffc-4a2f-b2ab-7fa7f48cfed8.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/yad21)
- [API overview and coverage](https://happyendpoint.com/library/yad2-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `yad21.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Real Estate Search
- Map View and Clusters
- Listing Details
- Government-Registered Sale Prices
- Nearby Deals (Comps)
- New Construction Projects
- Agency and Dealer Ads
- Vehicle Search
- Vehicle Catalog and Models
- Marketplace Listings
- Location Autocomplete
- Regions, Cities, and Neighborhoods

## Source documentation notes

| Feature         | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| Coverage        | Israel                                                     |
| Real Estate     | Sales, Rentals, Commercial, New Construction               |
| Vehicles        | Cars, Motorcycles, Commercial Vehicles & More              |
| Marketplace     | Second-hand Products                                       |
| Market Data     | Government-Registered Property Transactions                |
| Discovery APIs  | Regions, Cities, Neighborhoods, Categories                 |
| Response Format | JSON                                                       |
| Search Features | Advanced Filters, Maps, Autocomplete, Details              |
| Ideal For       | PropTech, Automotive, AI, Market Research, Lead Generation |

Access structured data from Israel's largest classifieds marketplace through a fast, developer-friendly REST API.
Instead of scraping HTML pages, retrieve clean JSON data for property listings, vehicles, second-hand products, location metadata, historical real-estate transactions, and more.

### Features

### Available Endpoints

### Common Use Cases

- Property search websites
- Apartment rental platforms
- Real-estate CRM systems
- Property valuation tools
- Investment analysis
- Housing market analytics
- Vehicle marketplaces
- Used-car comparison websites
- Dealer inventory monitoring
- Marketplace analytics
- Price monitoring
- Lead generation
- AI agents
- LLM applications
- Data enrichment
- Business intelligence dashboards
- Market research
- Enterprise integrations

### Data Coverage

The API provides structured access across multiple Yad2 verticals, including:

- Residential properties
- Rental properties
- Commercial real estate
- New construction projects (Yad1)
- Cars
- Motorcycles
- Commercial vehicles
- Dealer inventory
- Second-hand marketplace
- Regions
- Cities
- Neighborhoods
- Categories
- Location metadata
- Historical government property transactions
- Comparable nearby sales

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `yad2-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                 | Request                          | Purpose                    |
| ---------------------------- | -------------------------------- | -------------------------- |
| `get_status`                 | `GET /status`                    | /status                    |
| `_realestate-search`         | `GET /realestate-search`         | /realestate-search         |
| `_realestate-map`            | `GET /realestate-map`            | /realestate-map            |
| `_realestate-map-clusters`   | `GET /realestate-map-clusters`   | /realestate-map-clusters   |
| `_realestate-details`        | `GET /realestate-details`        | /realestate-details        |
| `_realestate-details-by-url` | `GET /realestate-details-by-url` | /realestate-details-by-url |
| `_realestate-search-options` | `GET /realestate-search-options` | /realestate-search-options |
| `_realestate-agency-promos`  | `GET /realestate-agency-promos`  | /realestate-agency-promos  |
| `_realestate-yad1-projects`  | `GET /realestate-yad1-projects`  | /realestate-yad1-projects  |
| `_realestate-yad1-nearby`    | `GET /realestate-yad1-nearby`    | /realestate-yad1-nearby    |
| `_vehicles-search`           | `GET /vehicles-search`           | /vehicles-search           |
| `_vehicles-details`          | `GET /vehicles-details`          | /vehicles-details          |
| `_vehicles-details-by-url`   | `GET /vehicles-details-by-url`   | /vehicles-details-by-url   |
| `_vehicles-catalog`          | `GET /vehicles-catalog`          | /vehicles-catalog          |
| `_vehicles-models`           | `GET /vehicles-models`           | /vehicles-models           |
| `_vehicles-agency-ads`       | `GET /vehicles-agency-ads`       | /vehicles-agency-ads       |
| `_marketplace-listings`      | `GET /marketplace-listings`      | /marketplace-listings      |
| `_marketplace-details`       | `GET /marketplace-details`       | /marketplace-details       |
| `_locations-autocomplete`    | `GET /locations-autocomplete`    | /locations-autocomplete    |
| `_regions`                   | `GET /regions`                   | /regions                   |
| `_cities`                    | `GET /cities`                    | /cities                    |
| `_neighborhoods`             | `GET /neighborhoods`             | /neighborhoods             |
| `_categories`                | `GET /categories`                | /categories                |
| `_latest-deals`              | `GET /latest-deals`              | /latest-deals              |
| `_realestate-nearby-deals`   | `GET /realestate-nearby-deals`   | /realestate-nearby-deals   |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
