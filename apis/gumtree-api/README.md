# Gumtree UK API: Free API and MCP access

UK classifieds data from Gumtree. Search listings with filters, get ad details, seller profiles and reviews, plus categories, locations, and trends.

![Gumtree UK API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/6889468d-36f0-4de5-9390-8507db6bde0c.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/gumtree2)
- [API overview and coverage](https://happyendpoint.com/library/gumtree-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `gumtree2.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Listing Search
- Search by URL
- Search Suggestions
- Trending Searches
- Listing Details
- Similar Listings
- Seller Profiles, Listings, and Reviews
- Category Tree and Filters
- Location Autocomplete
- Reverse Geocoding

## Source documentation notes

> Fast, structured access to Gumtree UK classifieds through JSON APIs for search, listings, sellers, categories, locations, filters, and marketplace intelligence.

### Endpoints

### Search

Search Gumtree listings using keywords and advanced search filters.

### Search Listings

Search listings by keyword with support for rich filtering.
Example use cases:

- Product research
- Vehicle searches
- Property monitoring
- Job aggregation
- Classified search engines

### Search by URL

Already have a Gumtree search URL?
Simply pass the URL and receive structured JSON results without rebuilding the search parameters yourself.

### Search Suggestions

Retrieve keyword autocomplete suggestions and related categories.
Useful for:

- Search boxes
- Keyword discovery
- SEO tools
- Marketplace analytics

### Trending Searches

Retrieve currently trending search terms on Gumtree.
Great for:

- Trend monitoring
- Demand analysis
- Keyword research
- Content generation

### Locations Autocomplete

Find Gumtree location IDs from user input.
Useful for:

- Search forms
- Location selectors
- Address autocomplete

### Filters

Retrieve available filters for any category.
Examples include:

- Price
- Condition
- Brand
- Mileage
- Bedrooms
- Job type
- Salary
- Property type
- Vehicle attributes
  (depending on category)

### Endpoints

| Endpoint                  | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `/search`                 | Search Gumtree listings with advanced filters.      |
| `/search-by-url`          | Execute a search from a Gumtree search URL.         |
| `/search-suggestions`     | Keyword autocomplete suggestions.                   |
| `/trending-searches`      | Retrieve trending search terms.                     |
| `/listing`                | Get complete listing details by advertisement ID.   |
| `/listing-by-url`         | Get listing details from a listing URL.             |
| `/locations-autocomplete` | Find Gumtree location IDs from text input.          |
| `/locations-nearest`      | Find the nearest Gumtree location from coordinates. |
| `/countries`              | Retrieve supported ISO countries.                   |
| `/categories`             | Retrieve the Gumtree category tree.                 |
| `/filters`                | Get available filters for a category.               |
| `/filter-options`         | Get selectable values for a specific filter.        |
| `/seller`                 | Retrieve a public seller profile.                   |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `gumtree-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `_search`                 | `GET /search`                 | /search                 |
| `_search-by-url`          | `GET /search-by-url`          | /search-by-url          |
| `_search-suggestions`     | `GET /search-suggestions`     | /search-suggestions     |
| `_trending-searches`      | `GET /trending-searches`      | /trending-searches      |
| `_listing`                | `GET /listing`                | /listing                |
| `_listing-by-url`         | `GET /listing-by-url`         | /listing-by-url         |
| `_similar-listings`       | `GET /similar-listings`       | /similar-listings       |
| `_locations-autocomplete` | `GET /locations-autocomplete` | /locations-autocomplete |
| `_locations-nearest`      | `GET /locations-nearest`      | /locations-nearest      |
| `_countries`              | `GET /countries`              | /countries              |
| `_categories`             | `GET /categories`             | /categories             |
| `_filters`                | `GET /filters`                | /filters                |
| `_filter-options`         | `GET /filter-options`         | /filter-options         |
| `_seller`                 | `GET /seller`                 | /seller                 |
| `_seller-listings`        | `GET /seller-listings`        | /seller-listings        |
| `_seller-reviews`         | `GET /seller-reviews`         | /seller-reviews         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
