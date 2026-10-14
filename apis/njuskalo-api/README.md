# Njuškalo Croatia API: Free API and MCP access

Marketplace data from Njuškalo, Croatia's largest classifieds site. Search cars, real estate, and listings, plus sellers, categories, and pricing.

![Njuškalo Croatia API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/07e5aa99-d3f6-4f4a-9151-8691b183b220.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/njuskalo)
- [API overview and coverage](https://happyendpoint.com/library/njuskalo-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `njuskalo.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Marketplace Search
- Category Browsing
- Listing Details
- Similar Listings
- Seller Profiles and Reviews
- Trending Categories
- Geocoding
- URL Parser

## Source documentation notes

### Search & Browse Marketplace Listings

Search listings using keywords and filters, browse categories, discover newly published ads, and find similar listings.
Available endpoints:

- `/search`
- `/search-count`
- `/browse`
- `/latest`
- `/similar-listings`
- `/search-aggregations`

### Data Coverage

Depending on the category, the API can provide:

- Listing titles and descriptions
- Prices and marketplace metadata
- Images and media assets
- Product specifications and attributes
- Vehicle information
- Real-estate information
- Seller and store profiles
- Public seller ratings and reviews
- Category and taxonomy data
- Location information
- Search and aggregation insights
- Trending marketplace categories
- Popular brands and products

### Popular Use Cases

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `njuskalo-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `_search-suggestions`     | `GET /search-suggestions`     | /search-suggestions     |
| `_search`                 | `GET /search`                 | /search                 |
| `_search-count`           | `GET /search-count`           | /search-count           |
| `_search-by-category`     | `GET /search-by-category`     | /search-by-category     |
| `_latest`                 | `GET /latest`                 | /latest                 |
| `_similar-listings`       | `GET /similar-listings`       | /similar-listings       |
| `_listing-details`        | `GET /listing-details`        | /listing-details        |
| `_listing-details-by-url` | `GET /listing-details-by-url` | /listing-details-by-url |
| `_listing-overview`       | `GET /listing-overview`       | /listing-overview       |
| `_parse-url`              | `GET /parse-url`              | /parse-url              |
| `_category-navigation`    | `GET /category-navigation`    | /category-navigation    |
| `_category-detail`        | `GET /category-detail`        | /category-detail        |
| `_filter-options`         | `GET /filter-options`         | /filter-options         |
| `_recommended-categories` | `GET /recommended-categories` | /recommended-categories |
| `_trending-categories`    | `GET /trending-categories`    | /trending-categories    |
| `_popular-brands`         | `GET /popular-brands`         | /popular-brands         |
| `_geocode`                | `GET /geocode`                | /geocode                |
| `_reverse-geocode`        | `GET /reverse-geocode`        | /reverse-geocode        |
| `_seller-profile`         | `GET /seller-profile`         | /seller-profile         |
| `_seller-reviews`         | `GET /seller-reviews`         | /seller-reviews         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
