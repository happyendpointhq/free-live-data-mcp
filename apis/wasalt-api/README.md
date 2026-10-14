# Wasalt Saudi Arabia API: Free API and MCP access

Wasalt Saudi property data. Sale and rent listings, REGA licences, holiday rentals, off-plan projects, and Infath auctions with live bids.

![Wasalt Saudi Arabia API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/30cfee5d-739d-4d8f-bc53-dd473ca467b2.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/wasalt-saudi-data)
- [API overview and coverage](https://happyendpoint.com/library/wasalt-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `wasalt-saudi-data.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Sale and Long-Term Rent Search
- 17 Search Filters Including REGA Licence Status
- Search by Wasalt URL
- Full Listing Records with REGA Licence Data
- Map Pin Payloads and Photo Galleries
- Short-Term Holiday Rental Search
- Nightly Rate Calendars and House Rules
- Off-Plan Developer Projects
- Per-Unit-Type Price, Size, and Availability
- Judicial (Infath) and Private Property Auctions
- Live Bid State, Deposits, and Increment Ladders
- Auction Activity Feeds
- District Pins and Neighbourhood Median Price per m2
- Arabic and English Location Names

## Source documentation notes

| Feature            | Details                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage    | Saudi Arabia - Riyadh, Jeddah, Makkah, Madinah and the nationwide city register                                                  |
| Property Types     | Apartments, villas & townhouses, floors, residential land, buildings, towers, rest houses, offices, showrooms, warehouses        |
| Search Filters     | 17 filters - city, zone, district, neighbourhood, price, built-up area, bedrooms, bathrooms, parking, property age, REGA licence |
| REGA Licence Data  | Licence number, issue and expiry dates, verification reference and regulator link                                                |
| Off-plan Projects  | Developer projects with price bands, per-unit-type mix, sizes and availability                                                   |
| Property Auctions  | Judicial (Infath) and private brokerage events, full lot lists, live bid state, deposits and increment ladders                   |
| Live Bidding State | Starting price, current high bid, bid-increment ladder, deposit, registration window, commission and VAT                         |
| URL Front Doors    | Paste a wasalt listing, search or auction URL and get the record back - no id extraction                                         |
| Geo Coverage       | Per-district latitude/longitude pins and neighbourhood median sale price per m²                                                  |
| Bilingual Values   | Arabic display names paired with English equivalents and stable slugs                                                            |
| API Type           | Fast REST API via RapidAPI                                                                                                       |

### Key Features

- Search Saudi sale and long-term-rent listings with 17 filters
- Filter by city, zone, district and multi-neighbourhood selections
- Filter by price band, built-up area, bedrooms, bathrooms, parking and property age
- Filter to REGA-licensed stock only - or isolate the unlicensed remainder
- Run a search straight from a wasalt search-page URL, with the parsed filters echoed back
- Get the full record for one listing: long-form description, extra-facts block, REGA licence and view count
- Resolve a wasalt property URL to its listing id and canonical identity
- Fetch the map-pin payload and the complete photo gallery for a listing
- Search the short-term holiday-rental inventory by nightly price, area and bedrooms
- Read a rental's forward nightly-rate calendar, house rules, arrival guide and cancellation policy

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `wasalt-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                    | Request                             | Purpose                       |
| ------------------------------- | ----------------------------------- | ----------------------------- |
| `get_status`                    | `GET /status`                       | /status                       |
| `_search-properties`            | `GET /search-properties`            | /search-properties            |
| `_search-properties-by-url`     | `GET /search-properties-by-url`     | /search-properties-by-url     |
| `_property-details`             | `GET /property-details`             | /property-details             |
| `_property-details-by-url`      | `GET /property-details-by-url`      | /property-details-by-url      |
| `_property-map-card`            | `GET /property-map-card`            | /property-map-card            |
| `_search-rentals`               | `GET /search-rentals`               | /search-rentals               |
| `_rental-details`               | `GET /rental-details`               | /rental-details               |
| `_nationalities`                | `GET /nationalities`                | /nationalities                |
| `_projects`                     | `GET /projects`                     | /projects                     |
| `_project-details`              | `GET /project-details`              | /project-details              |
| `_project-units`                | `GET /project-units`                | /project-units                |
| `_auction-search`               | `GET /auction-search`               | /auction-search               |
| `_auction-lots`                 | `GET /auction-lots`                 | /auction-lots                 |
| `_auction-group-details-by-url` | `GET /auction-group-details-by-url` | /auction-group-details-by-url |
| `_auction-details`              | `GET /auction-details`              | /auction-details              |
| `_auction-activity`             | `GET /auction-activity`             | /auction-activity             |
| `_auction-locations`            | `GET /auction-locations`            | /auction-locations            |
| `_auction-statuses`             | `GET /auction-statuses`             | /auction-statuses             |
| `_auction-taxonomy`             | `GET /auction-taxonomy`             | /auction-taxonomy             |
| `_markets`                      | `GET /markets`                      | /markets                      |
| `_cities`                       | `GET /cities`                       | /cities                       |
| `_city-list`                    | `GET /city-list`                    | /city-list                    |
| `_districts`                    | `GET /districts`                    | /districts                    |
| `_neighbourhoods`               | `GET /neighbourhoods`               | /neighbourhoods               |
| `_taxonomy`                     | `GET /taxonomy`                     | /taxonomy                     |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
