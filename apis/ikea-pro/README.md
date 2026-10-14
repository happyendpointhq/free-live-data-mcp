# Ikea Pro API: Free API and MCP access

IKEA API for product data - 12,000+ items with live pricing, dimensions, ratings, category paths, and per-store stock levels across every market.

![Ikea Pro API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/4fbbbe2c-9928-44b9-9f44-7e457eebaf5f.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/ikea-api-pro/)
- [API overview and coverage](https://happyendpoint.com/library/ikea-pro)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `ikea-api-pro.p.rapidapi.com`
- Category: retail
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Keyword Product Search
- Category Browse
- Product Details
- Store Locator
- Multi-Country Support
- 12,000+ Products
- Real-Time Catalog
- Category Filters

## Source documentation notes

**Power your application with IKEA API Pro!**
Unlock one of the most reliable, comprehensive, and developer-friendly APIs for accessing IKEA product data. Built for speed and scalability, **IKEA API Pro** delivers structured, real-time data for products, categories, stores, and more - perfect for **eCommerce**, **interior design apps**, **retail analytics**, and **market research tools**.

### API Features

Our API is structured into four powerful feature sets, giving you flexibility and scalability as your application grows:

### Feature 2: Keyword-Based Product Search

- Search products using keywords
- Apply advanced filters for precision
- Ideal for building search engines & discovery tools

### Core Endpoints

- `search by keyword` - Find products instantly
- `search by category` - Browse catalog by category
- `filters` - Refine search results
- `product details` - Get detailed product data
- `stores` - Retrieve store location data

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `ikea-pro`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                     | Request                                   | Purpose                                         |
| -------------------------------- | ----------------------------------------- | ----------------------------------------------- |
| `_health`                        | `GET /health`                             | Health check endpoint                           |
| `Search_By_Keyword`              | `GET /product-search-by-keyword`          | Search products by keyword on Ikea              |
| `Filters_for_Search_By_Keyword`  | `GET /product-search-by-keyword-filters`  | Filters for Product Search By Keyword Endpoint  |
| `Search_By_Category`             | `GET /product-search-by-category`         | Search products by Category ID on Ikea          |
| `Filters_for_Search_By_Category` | `GET /product-search-by-category-filters` | Filters for Product Search By Category Endpoint |
| `Product_Details`                | `GET /product-details`                    | Get Product Details                             |
| `Categories`                     | `GET /categories`                         | Get Categories list                             |
| `Countries`                      | `GET /countries`                          | Get Countries list                              |
| `Stores`                         | `GET /stores`                             | Get Stores list                                 |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
