# Sephora API: Free API and MCP access

Sephora scraper API for live product data - US catalog with brands, prices, star ratings, review counts, and store stock levels, as structured JSON.

![Sephora API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/929ea64a-578a-4210-ada0-f1ceb65244d4.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/real-time-sephora-api)
- [API overview and coverage](https://happyendpoint.com/library/sephora-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `real-time-sephora-api.p.rapidapi.com`
- Category: beauty
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Product Search
- Product Reviews
- Brand Directory
- Category Browse
- Real-Time Availability
- Store Locator
- Keyword Autocomplete
- Sub-400ms Responses

## Source documentation notes

Unlock the full potential of **Sephora.com** data with our fast, scalable, and developer-friendly API. Built for performance, our API delivers rich product data, real-time inventory, reviews, store locations, and more - all with **sub-400ms response times**
With **11 powerful endpoints**, you can build everything from product discovery tools to advanced beauty recommendation engines - ideal for **e-commerce platforms**, **beauty apps**, **price comparison tools**, and **market research solutions**

### Bulk Sephora US Dataset Available (8,500+ Products)

In addition to our real-time API, we offer a **ready-to-use Sephora US dataset** for large-scale data needs.

### Key Features

- **Category & Brand Data** - Full structured directories
- **Smart Search** - Autocomplete + keyword search
- **Real-Time Availability** - Live stock updates
- **Store Locator** - Geo-based store discovery
- **Product Reviews** - Ratings & customer insights

### API Endpoints (11 Total)

### Discovery & Search

- `/auto-complete` - Product suggestions from partial queries
- `/search-by-keyword` - Advanced keyword search with filters
- `/search-by-category` - Fetch products by category ID
- `/search-by-brand` - Retrieve products by brand

### Ideal Use Cases

- E-commerce & product comparison platforms
- Beauty & skincare mobile/web apps
- AI-powered recommendation systems

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `sephora-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID            | Request                     | Purpose               |
| ----------------------- | --------------------------- | --------------------- |
| `_auto-complete`        | `GET /auto-complete`        | /auto-complete        |
| `_store-list`           | `GET /store-list`           | /store-list           |
| `_brands-list`          | `GET /brands-list`          | /brands-list          |
| `_categories-list`      | `GET /categories-list`      | /categories-list      |
| `_category-data`        | `GET /category-data`        | /category-data        |
| `_search-by-keyword`    | `GET /search-by-keyword`    | /search-by-keyword    |
| `_search-by-category`   | `GET /search-by-category`   | /search-by-category   |
| `_search-by-brand`      | `GET /search-by-brand`      | /search-by-brand      |
| `_product-details`      | `GET /product-details`      | /product-details      |
| `_product-reviews`      | `GET /product-reviews`      | /product-reviews      |
| `_product-availability` | `GET /product-availability` | /product-availability |
| `get_status`            | `GET /status`               | /status               |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
