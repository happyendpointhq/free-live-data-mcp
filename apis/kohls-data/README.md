# Kohls Data API: Free API and MCP access

Kohl's API for US retail data - product catalog with live pricing, promotions, ratings, customer reviews, Q&A, and store inventory as JSON.

![Kohls Data API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/a20a3696-1391-48a5-9a79-b774dc44cfdb.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/kohls-com/)
- [API overview and coverage](https://happyendpoint.com/library/kohls-data)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `kohls-com.p.rapidapi.com`
- Category: retail
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Product Search
- Product Details
- Customer Reviews
- Q and A Data
- Category Tree
- Store Locator
- Pricing Data
- Inventory Status

## Source documentation notes

### Use Cases

- Build **price comparison tools** or **retail analytics dashboards**
- Track **product availability and stock changes**
- Enrich **eCommerce datasets** or **affiliate websites**

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `kohls-data`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID      | Request                | Purpose                                        |
| ----------------- | ---------------------- | ---------------------------------------------- |
| `_health`         | `GET /health`          | Health check endpoint                          |
| `Product_Search`  | `GET /product-search`  | Search products by keyword on Kohls.com        |
| `Categories`      | `GET /categories`      | Get list of Categories on kohls.com            |
| `Product_Reviews` | `GET /product-reviews` | Get products reviews by productID on Kohls.com |
| `Product_QNAs`    | `GET /product-qnas`    | Get products QNAs by productID on Kohls.com    |
| `Store_Locator`   | `GET /store-locator`   | Locate Store of Kohls through lat and lng      |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
