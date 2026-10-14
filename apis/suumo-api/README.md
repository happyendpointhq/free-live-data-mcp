# SUUMO Japan Real Estate API: Free API and MCP access

Japan real estate data from SUUMO. Search rentals and sales, station and commute-based discovery, plus address, railway, and agency reference data.

![SUUMO Japan Real Estate API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/d26799e0-eddf-472f-84c8-b34cef478813.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/suumo-japan-real-estate)
- [API overview and coverage](https://happyendpoint.com/library/suumo-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `suumo-japan-real-estate.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Rental and Sale Search
- Unified Search
- Station and Commute Search
- Property Details
- New Condo Data
- Nearby Facilities (GeoJSON)
- Address and Postal Lookup
- Agency Profiles

## Source documentation notes

Real-time API for accessing **SUUMO Japan real estate listings**, rental properties, buy/sell listings, property details, agencies, railway stations, city data, commute search, nearby facilities, and structured Japanese real estate information.
| Feature | Details |
| -------------------- | --------------------------------------------------- |
| Market Coverage | Japan Real Estate |
| Property Types | Rentals, condos, houses, land, new condos |
| Search Support | Sale, rental, unified, count-based search |
| Transit Data | Railway lines, stations, commute search |
| Location Data | Prefectures, cities, wards, addresses, postal codes |
| Neighborhood Data | Nearby facilities and POI GeoJSON |
| Company Data | Real estate agency / shop profiles |
| API Type | Fast REST API via RapidAPI |
Unlock structured **Japan real estate data** with a fast, scalable, and developer-friendly SUUMO API. This API helps developers access property search results, rental listings, buy/sell listings, property details, station data, city data, commute-based discovery, nearby facilities, and agency information from one simple REST interface.
Whether you are building a real estate search platform, property comparison tool, relocation app, rental analytics dashboard, investment research tool, or Japan housing data product, this API provides clean and practical endpoints for working with SUUMO-style real estate data.

### Example Use Cases

- Search apartments for rent in Tokyo, Osaka, Kyoto, Fukuoka, and other Japanese regions
- Build property search apps for Japan real estate listings
- Compare rental prices across wards, cities, stations, and areas
- Analyze buy/sell listings including condos, houses, and land
- Resolve property data directly from SUUMO URLs
- Build relocation tools using commute time and station-based search
- Create neighborhood maps using nearby facilities and POI data
- Research real estate agencies and shop profiles

### API Features

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `suumo-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID            | Request                     | Purpose               |
| ----------------------- | --------------------------- | --------------------- |
| `get_status`            | `GET /status`               | /status               |
| `_search-sale`          | `GET /search-sale`          | /search-sale          |
| `_search-rentals`       | `GET /search-rentals`       | /search-rentals       |
| `_search-count`         | `GET /search-count`         | /search-count         |
| `_unified-search`       | `GET /unified-search`       | /unified-search       |
| `_unified-search-count` | `GET /unified-search-count` | /unified-search-count |
| `_property-details`     | `GET /property-details`     | /property-details     |
| `_rental-details`       | `GET /rental-details`       | /rental-details       |
| `_new-condo-details`    | `GET /new-condo-details`    | /new-condo-details    |
| `_property-by-url`      | `GET /property-by-url`      | /property-by-url      |
| `_parse-url`            | `GET /parse-url`            | /parse-url            |
| `_listing-overview`     | `GET /listing-overview`     | /listing-overview     |
| `_popularity`           | `GET /popularity`           | /popularity           |
| `_similar-rentals`      | `GET /similar-rentals`      | /similar-rentals      |
| `_similar-properties`   | `GET /similar-properties`   | /similar-properties   |
| `_cities`               | `GET /cities`               | /cities               |
| `_railway-stations`     | `GET /railway-stations`     | /railway-stations     |
| `_address-master`       | `GET /address-master`       | /address-master       |
| `_postal-code`          | `GET /postal-code`          | /postal-code          |
| `_commute-search`       | `GET /commute-search`       | /commute-search       |
| `_nearby-facilities`    | `GET /nearby-facilities`    | /nearby-facilities    |
| `_agency`               | `GET /agency`               | /agency               |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
