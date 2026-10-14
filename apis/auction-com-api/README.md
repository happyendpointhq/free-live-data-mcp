# Auction.com API: Free API and MCP access

US distressed property data from Auction.com. Search foreclosure, bank-owned, and auction listings, get property details, schedules, and live bid status.

![Auction.com API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/ead14ed6-6841-44f9-8b54-e6215b457626.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/auction-com-real-estate-api)
- [API overview and coverage](https://happyendpoint.com/library/auction-com-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `auction-com-real-estate-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Advanced Property Search
- ZIP Code Search
- Search by URL
- Upcoming Auctions
- Listing Details
- Auction Schedules and Venues
- Live Auction and Bid Status
- Location Autocomplete
- Recommended Listings
- Filter Taxonomies and Enums

## Source documentation notes

| Statistic       | Value                                                               |
| --------------- | ------------------------------------------------------------------- |
| Coverage        | United States                                                       |
| Listings        | Foreclosure, Auction & Bank-Owned (REO) Properties                  |
| Endpoints       | 12                                                                  |
| Response Format | JSON                                                                |
| Authentication  | API Key                                                             |
| Main Features   | Property Search, Listing Details, Auction Status, Upcoming Auctions |

### Features

- Search Auction.com listings using advanced filters
- Search properties by 5-digit ZIP code
- Execute searches from an Auction.com search URL
- Retrieve upcoming auctions sorted by date
- Get complete listing details for any property
- Retrieve listing details directly from a property URL
- Access auction schedules, venues, trustee information, and sale details
- Check live auction and bidding status
- Autocomplete cities, counties, and ZIP codes
- Retrieve recommended listings
- Get available marketing tags
- Retrieve all supported filter values and enums

### Search Endpoints

Search Auction.com listings using multiple methods.

### Advanced Search

Search listings using a wide range of filters, including:

- State
- City
- County
- ZIP Code
- Property Type
- Auction Status
- Sale Type
- Bedrooms
- Bathrooms
- Price Range
- Square Footage
- Lot Size
- Marketing Tags
- And many more supported filters

### Search by ZIP Code

Quickly retrieve listings within a specific 5-digit ZIP code.

### Search by Auction.com URL

Already have an Auction.com search URL?
Simply pass it to the API to retrieve the same search results as structured JSON.

### Discovery Endpoints

The API also includes helper endpoints that simplify building search interfaces.

### Locations Autocomplete

Find supported cities, counties, and ZIP codes as users type.

### Response Format

All endpoints return structured JSON with predictable field names and consistent response formats, making integration simple in any programming language or framework.

### Common Use Cases

- Foreclosure search websites
- Auction property search engines
- REO property browsers
- Real estate data platforms
- Investment dashboards
- Property monitoring tools
- Lead generation platforms
- Internal business applications
- Market analysis tools
- CRM enrichment
- Data aggregation pipelines

### Endpoints

### Search

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `auction-com-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `_advance-search`         | `GET /advance-search`         | /advance-search         |
| `_search-by-zipcode`      | `GET /search-by-zipcode`      | /search-by-zipcode      |
| `_search-by-url`          | `GET /search-by-url`          | /search-by-url          |
| `_upcoming-auctions`      | `GET /upcoming-auctions`      | /upcoming-auctions      |
| `_listing-details`        | `GET /listing-details`        | /listing-details        |
| `_listing-details-by-url` | `GET /listing-details-by-url` | /listing-details-by-url |
| `_auction-details`        | `GET /auction-details`        | /auction-details        |
| `_auction-status`         | `GET /auction-status`         | /auction-status         |
| `_locations-autocomplete` | `GET /locations-autocomplete` | /locations-autocomplete |
| `_recommended-listings`   | `GET /recommended-listings`   | /recommended-listings   |
| `_marketing-tags`         | `GET /marketing-tags`         | /marketing-tags         |
| `_enums`                  | `GET /enums`                  | /enums                  |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
