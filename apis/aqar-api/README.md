# Aqar Saudi Arabia API: Free API and MCP access

Saudi Arabia real estate data from Aqar. Property search, AI natural-language search, district pricing, geographic reference data, and developer projects.

![Aqar Saudi Arabia API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/13b7e0fa-7caf-4310-a6e9-9c0e7e62025a.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/aqar)
- [API overview and coverage](https://happyendpoint.com/library/aqar-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `aqar.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- AI Natural-Language Search
- District Price Stats
- Residential Indicators
- Geographic Reference Data
- Developer and Project Data
- Reverse Geocoding
- Location Autocomplete

## Source documentation notes

### Search Properties

Search Saudi real-estate listings using rich filters including location, property type, category, price range, area, and more.
Available endpoints:

- `/search`
- `/ai-search`
- `/related-listings`
- `/autocomplete`
- `/place-bounds`

### Data Coverage

The API provides access to valuable real-estate information such as:

- Property prices and listing metadata
- Sale and rental listings
- Apartments, villas, lands, commercial properties, and more
- City, district, and regional information
- Geographic coordinates and location intelligence
- Property specifications and amenities
- Listing descriptions and images
- Developer profiles
- Residential projects
- Market trends and statistics

### AI-Powered Search

The `/ai-search` endpoint allows users to search using natural language.
Examples:

- "3 bedroom villa in Riyadh under 2 million SAR"
- "Luxury apartments for rent near King Abdullah Financial District"
- "Commercial land in Jeddah suitable for development"
  The API automatically converts natural-language requests into structured search filters and returns matching listings.

### Common Use Cases

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `aqar-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `_search`                 | `GET /search`                 | /search                 |
| `_ai-search`              | `GET /ai-search`              | /ai-search              |
| `_related-listings`       | `GET /related-listings`       | /related-listings       |
| `_autocomplete`           | `GET /autocomplete`           | /autocomplete           |
| `_place-bounds`           | `GET /place-bounds`           | /place-bounds           |
| `_listing-details`        | `GET /listing-details`        | /listing-details        |
| `_listing-details-by-url` | `GET /listing-details-by-url` | /listing-details-by-url |
| `_listing-views`          | `GET /listing-views`          | /listing-views          |
| `_categories`             | `GET /categories`             | /categories             |
| `_cities`                 | `GET /cities`                 | /cities                 |
| `_districts`              | `GET /districts`              | /districts              |
| `_directions`             | `GET /directions`             | /directions             |
| `_admin-regions`          | `GET /admin-regions`          | /admin-regions          |
| `_reverse-geocode`        | `GET /reverse-geocode`        | /reverse-geocode        |
| `_district-price-stats`   | `GET /district-price-stats`   | /district-price-stats   |
| `_residential-indicators` | `GET /residential-indicators` | /residential-indicators |
| `_district-rating`        | `GET /district-rating`        | /district-rating        |
| `_moj-categories`         | `GET /moj-categories`         | /moj-categories         |
| `_project-details`        | `GET /project-details`        | /project-details        |
| `_developer-details`      | `GET /developer-details`      | /developer-details      |
| `_developer-projects`     | `GET /developer-projects`     | /developer-projects     |
| `_projects-by-city`       | `GET /projects-by-city`       | /projects-by-city       |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
