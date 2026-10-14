# 28Hse Hong Kong Property API: Free API and MCP access

Hong Kong property data from 28Hse. Search listings for sale and rent, estates, and new developments, plus transactions, agencies, school nets, and mortgages.

![28Hse Hong Kong Property API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/cf557616-f009-47f1-9a78-db4d47eb5bf2.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/28hse-property-api)
- [API overview and coverage](https://happyendpoint.com/library/28hse-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `28hse-property-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search for Sale and Rent
- Residential Estate Search
- New Development Search
- Listing Details by ID or URL
- Sale and Lease Transaction Records
- Location Autocomplete
- Property Filter Discovery
- Agency Directory
- School Net Directory
- Serviced Apartment Directory
- Bank Mortgage Plans
- Property Market News

## Source documentation notes

| Feature             | Details                                                         |
| ------------------- | --------------------------------------------------------------- |
| Market Coverage     | Hong Kong Real Estate                                           |
| Property Types      | Residential, car parks, industrial, shops, land, village houses |
| Search Support      | Property, estate & new-development search with rich filters     |
| New Developments    | First-hand projects by developer, price band & occupancy        |
| Transaction Data    | Recent sale & lease records, estate-level history               |
| Estate Data         | Price per ft², building age, transaction volume, rental yield   |
| School Nets         | Kindergarten, primary & secondary school directory              |
| Serviced Apartments | Serviced apartments & hotels with room types and rates          |
| Mortgage Plans      | Bank mortgage rates, cash rebates & penalty periods             |
| Agency Data         | Agent company directory with per-district listing counts        |
| API Type            | Fast REST API via RapidAPI                                      |

### Key Features

- Filter by district, estate, price in HKD, floor area, bedrooms, and building age
- Filter by property category: residential, car park, industrial, shop, land, or overseas
- Get full listing details by ad id
- Resolve listing details directly from a 28Hse listing URL
- Browse residential estates with price per ft², building age and rental-yield stats
- Search new-development and pre-sale projects by developer, price band and occupancy year
- Retrieve recent sale and lease transaction records, citywide or per estate
- Autocomplete estates and districts to discover the ids used by search filters
- Fetch the live property-type, sort and price-range filter options
- Browse the agency directory with per-district listing counts
- Look up kindergarten, primary and secondary schools by school net
- Search serviced apartments and hotels by size, region and monthly or daily rate

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `28hse-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                | Request                         | Purpose                   |
| --------------------------- | ------------------------------- | ------------------------- |
| `get_status`                | `GET /status`                   | /status                   |
| `_property-search`          | `GET /property-search`          | /property-search          |
| `_estate-search`            | `GET /estate-search`            | /estate-search            |
| `_new-property-search`      | `GET /new-property-search`      | /new-property-search      |
| `_property-details`         | `GET /property-details`         | /property-details         |
| `_property-details-by-url`  | `GET /property-details-by-url`  | /property-details-by-url  |
| `_transactions`             | `GET /transactions`             | /transactions             |
| `_location-autocomplete`    | `GET /location-autocomplete`    | /location-autocomplete    |
| `_property-filters`         | `GET /property-filters`         | /property-filters         |
| `_agent-search`             | `GET /agent-search`             | /agent-search             |
| `_school-net-search`        | `GET /school-net-search`        | /school-net-search        |
| `_service-apartment-search` | `GET /service-apartment-search` | /service-apartment-search |
| `_mortgage-plans`           | `GET /mortgage-plans`           | /mortgage-plans           |
| `_news-search`              | `GET /news-search`              | /news-search              |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
