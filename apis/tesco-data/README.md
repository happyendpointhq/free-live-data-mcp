# Tesco Data API: Free API and MCP access

Tesco grocery API for UK and Ireland - 300K+ SKUs with live pricing, Clubcard offers, nutrition, promotions, and store-level availability as JSON.

![Tesco Data API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/4f4b110d-fc24-4070-9562-d544fbdee641.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/tesco-data-api/)
- [API overview and coverage](https://happyendpoint.com/library/tesco-data)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `tesco-data-api.p.rapidapi.com`
- Category: grocery
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- UK Product Search
- Ireland Product Search
- Product Details
- Nutritional Data
- Category Browsing
- Category Taxonomy
- Pricing and Offers
- 300,000+ SKUs

## Source documentation notes

### Available Endpoints

### Product Search (UK)

- **`GET /product-search-by-keyword`**
  Search Tesco UK products using keywords like `"milk"`, `"bread"`, `"snacks"`, `"electronics"`.

### Sample Use Cases

- Retail analytics & competitive intelligence
- Grocery comparison & price alert apps
- AI chatbots & smart shopping assistants
- Consumer behavior & demand analysis
- eCommerce aggregation platforms

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `tesco-data`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                    | Request                             | Purpose                                          |
| ------------------------------- | ----------------------------------- | ------------------------------------------------ |
| `_health`                       | `GET /health`                       | Health check endpoint                            |
| `_product-search-by-keyword`    | `GET /product-search-by-keyword`    | Search products by keyword on Tesco UK           |
| `_product-details`              | `GET /product-details`              | Get product details from Tesco UK                |
| `_category-page`                | `GET /category-page`                | Get category page data from Tesco UK             |
| `_ireland-category-page`        | `GET /ireland-category-page`        | Get category page data from Tesco Ireland        |
| `_ireland-product-details`      | `GET /ireland-product-details`      | Get product details from Tesco Ireland           |
| `_get-category-id-for-uk`       | `GET /get-category-ids-for-uk`      | Get category taxonomy and IDs from Tesco UK      |
| `_get-category-ids-for-ireland` | `GET /get-category-ids-for-ireland` | Get category taxonomy and IDs from Tesco Ireland |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
