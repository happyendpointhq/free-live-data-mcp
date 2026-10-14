# Hepsiemlak Turkey API: Free API and MCP access

Turkey real estate data from Hepsiemlak. Search property listings by city and district, get details, filters, similar listings, and market price index.

![Hepsiemlak Turkey API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/70f31699-07b8-4f98-a887-0cac399abc08.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/hepsiemlak-turkish-property-api)
- [API overview and coverage](https://happyendpoint.com/library/hepsiemlak-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `hepsiemlak-turkish-property-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- Search by URL
- Listing Details
- Similar Properties
- City, County, and District Data
- Location Autocomplete
- Search Filters
- Market Price Index

## Source documentation notes

| Key Info        | Details                                                     |
| --------------- | ----------------------------------------------------------- |
| Coverage        | Türkiye Real Estate Market                                  |
| Data Type       | Property Listings, Details, Locations, Filters, Price Index |
| Response Format | Clean JSON                                                  |

The **Hepsiemlak Data API** provides structured access to Türkiye real estate data from Hepsiemlak, one of the leading property platforms in Turkey. Use this API to search property listings, retrieve full listing details, explore location data, discover valid search filters, find similar properties, and access market price index insights.
This API is built for developers, real estate platforms, property analysts, lead generation tools, investment dashboards, and data teams that need reliable Turkish property data without building or maintaining their own scraping infrastructure.

### Key Features

- Search Türkiye property listings with rich filters
- Get full property details by listing ID
- Search listings directly from Hepsiemlak URLs
- Retrieve property details from listing URLs
- Count listings matching specific filters
- Find similar properties for a given listing
- Access Turkish city, county, and district data
- Use location autocomplete for search slugs
- Discover valid filter values by category
- Analyze market price index and time-series data

### Available Endpoints

### Search

Use the search endpoints to find real estate listings across Türkiye with flexible query options.

- `/search-property` - Search Türkiye property listings with rich filters
- `/search-count` - Count listings matching selected filters
- `/search-by-url` - Run a search directly from a Hepsiemlak search URL

### Use Cases

- Real estate search apps
- Property listing aggregators
- Türkiye housing market dashboards
- Rental and sale price analysis
- Lead generation systems
- Real estate investment research
- Location-based property intelligence

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `hepsiemlak-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID               | Request                        | Purpose                  |
| -------------------------- | ------------------------------ | ------------------------ |
| `get_status`               | `GET /status`                  | /status                  |
| `_search-property`         | `GET /search-property`         | /search-property         |
| `_search-by-url`           | `GET /search-by-url`           | /search-by-url           |
| `_property-details`        | `GET /property-details`        | /property-details        |
| `_similar-properties`      | `GET /similar-properties`      | /similar-properties      |
| `_property-details-by-url` | `GET /property-details-by-url` | /property-details-by-url |
| `_locations-autocomplete`  | `GET /locations-autocomplete`  | /locations-autocomplete  |
| `_cities`                  | `GET /cities`                  | /cities                  |
| `_counties`                | `GET /counties`                | /counties                |
| `_districts`               | `GET /districts`               | /districts               |
| `_search-filters`          | `GET /search-filters`          | /search-filters          |
| `_price-index`             | `GET /price-index`             | /price-index             |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
