# H&M API: Free API and MCP access

H&M API for fashion product data - global catalog with prices, colours, sizes, stock levels, supplier detail, and store locations, as clean JSON.

![H&M API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/ddf47459-9eff-4eaf-a68c-ffc476e03b69.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/h-m-hennes-mauritz1/)
- [API overview and coverage](https://happyendpoint.com/library/hm-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `h-m-hennes-mauritz1.p.rapidapi.com`
- Category: fashion
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Product Search
- Category Browse
- Store Locator
- Supplier Details
- Multi-Country Support
- Search Autocomplete
- JSON Responses
- Near Real-Time Data

## Source documentation notes

### **Available Endpoints**

1. **Product Search** - Search products on H&M using keywords. Supports pagination, sorting, and advanced filters such as size, color, fit, material, and more.
2. **Countries** - Retrieve the list of supported countries and language codes for localization.
3. **Auto-Complete** - Get real-time search suggestions to power “search-as-you-type” experiences.
4. **Stores** - Fetch all H&M store locations by country, including opening hours and departments.
5. **Supplier Details** - Access supplier and manufacturing information for specific H&M products.
6. **Categories** - Get the full category hierarchy to organize or filter your product data.

### **Use Cases**

- Build fashion trend trackers and AI styling assistants
- Create shopping bots or retail data dashboards
- Compare prices and availability across countries
- Analyze supplier sustainability and transparency

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `hm-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID       | Request                 | Purpose                                            |
| ------------------ | ----------------------- | -------------------------------------------------- |
| `_health`          | `GET /health`           | Health check endpoint                              |
| `Product_Search`   | `GET /product-search`   | Search products on H&M                             |
| `Countries`        | `GET /countries`        | Get list of available countries and language codes |
| `Auto-Complete`    | `GET /auto-complete`    | Get search suggestions / auto-complete             |
| `Stores`           | `GET /stores`           | Get list of H&M stores by country                  |
| `Supplier_Details` | `GET /supplier-details` | Get supplier details for a product                 |
| `Categories`       | `GET /categories`       | Get H&M categories                                 |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
