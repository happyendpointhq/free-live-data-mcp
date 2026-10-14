# Klarna Ecom API: Free API and MCP access

Klarna API for shopping data - multi-store price comparison and price history across Amazon, Walmart, Target and more, in 13 regions.

![Klarna Ecom API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/c30f02b4-22d8-41e6-ad7a-1c878d9ce1d0.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/klarna7/)
- [API overview and coverage](https://happyendpoint.com/library/klarna-ecom)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `klarna7.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Multi-Store Coverage
- Price History Charts
- Product Reviews
- 13 Regions Supported
- Cross-Platform Search
- Deal Discovery
- Category Intelligence
- Store and Category Data

## Source documentation notes

The **Klarna Store & Shop Ecommerce API** is an all-in-one data solution that aggregates rich shopping, product, and store information from multiple top ecommerce platforms. With a single, unified API, you can access **cross-store product data**, detailed **category structures**, advanced **filtering**, complete **reviews**, and accurate **price history**, making it perfect for building ecommerce apps, comparison engines, affiliate tools, browser extensions, and AI shopping assistants.
This API exposes a wide range of endpoints covering the entire shopping journey- from product discovery to purchase decision.

### **✓ Advanced Search & Recommendations**

Use keyword suggestions, product search, category-based search, and popular category search terms. Support for custom filters, sorting, price ranges, and multi-level category paths enables highly relevant and powerful search experiences.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `klarna-ecom`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                | Request                         | Purpose                                  |
| --------------------------- | ------------------------------- | ---------------------------------------- |
| `_health`                   | `GET /health`                   | Health check endpoint                    |
| `_stores`                   | `GET /stores`                   | Search Klarna partner stores             |
| `_store-page`               | `GET /store-page`               | Get store page products                  |
| `_store-page-filters`       | `GET /store-page-filters`       | Get store page filters                   |
| `_keyword-suggestion`       | `GET /keyword-suggestion`       | Get keyword suggestions                  |
| `_product-search`           | `GET /product-search`           | Search products by keyword               |
| `_search-by-category`       | `GET /search-by-category`       | Search products by category              |
| `_compare-products`         | `GET /compare-products`         | Compare two products                     |
| `_product-details`          | `GET /product-details`          | Get product details                      |
| `_product-page-details`     | `GET /product-page-details`     | Get product page details (offers)        |
| `_price-history`            | `GET /price-history`            | Get product price history                |
| `_product-group`            | `GET /product-group`            | Get product group                        |
| `_product-reviews-overview` | `GET /product-reviews-overview` | Get product reviews overview             |
| `_product-pro-reviews`      | `GET /product-pro-reviews`      | Get professional product reviews         |
| `_product-user-reviews`     | `GET /product-user-reviews`     | Get user product reviews                 |
| `_top-level-categories`     | `GET /top-level-categories`     | Get top level categories                 |
| `_sub-categories`           | `GET /sub-categories`           | Get sub-categories                       |
| `_category-filters`         | `GET /category-filters`         | Get category filters                     |
| `_popular-keywords`         | `GET /popular-keywords`         | Get popular search keywords for category |
| `_category-guiding-content` | `GET /category-guiding-content` | Get category guiding content             |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
