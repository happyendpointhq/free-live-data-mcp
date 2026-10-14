# Ninja Saudi Food and Grocery API: Free API and MCP access

Ninja food delivery and grocery data for Saudi Arabia and the GCC - menus, delivery fees, deals, products, and live stock.

![Ninja Saudi Food and Grocery API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/408ddc37-d71e-4930-b523-71ee8e57266d.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/ninja-saudi-arabia)
- [API overview and coverage](https://happyendpoint.com/library/ninja-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `ninja-saudi-arabia.p.rapidapi.com`
- Category: grocery
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Delivery-Location Store Discovery
- Restaurant Search with Cuisine and Deal Filters
- Full Menus with Modifiers, Calories, and Allergens
- Current and Original Dish Prices
- Basket-Value Delivery Fee Ladders
- Restaurant Deal Campaigns and Discounted Items
- Search by Restaurant or Cuisine URL
- Grocery, Beauty, and Pharmacy Catalogs
- Product Search by Keyword, Category, or Brand
- Live On-Hand Stock by Store
- Multi-Pack Bundle Composition
- Store Promotions and Sponsored Placements
- Trending and Sponsored Search Phrases
- Smart Lists, Themed Lists, and Retail Stories
- English and Arabic Content

## Source documentation notes

| Feature               | Details                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Market Coverage       | Saudi restaurants and grocery coverage across Saudi Arabia, Kuwait, Qatar and Bahrain, selected by delivery coordinates |
| Restaurant Menus      | Dishes, variants, modifier choices, current and original prices, availability and declared nutrition                    |
| Delivery Costs        | Location-specific delivery summaries and basket-value fee bands with free-delivery thresholds when available            |
| Retail Catalogs       | Grocery, beauty and pharmacy products with brand/category discovery and prescription-product preferences                |
| Stock and Bundles     | Current product stock, cluster lookup and multi-pack component quantities                                               |
| Deals and Campaigns   | Restaurant campaign previews and paginated dishes, retail multi-buy offers and sponsored product placements             |
| Shopping Discovery    | Organic and sponsored search phrases, smart shopping lists, themed lists and retail story targets                       |
| Restaurant URL Inputs | Restaurant page URLs resolve to profiles; cuisine and browse URLs select restaurant searches                            |
| Language Support      | English/Arabic localized content and bilingual retail name fields; availability varies by field                         |
| API Type              | Fast REST API via RapidAPI                                                                                              |

Access Ninja restaurant and retail data for delivery-location discovery, menu comparison and product shopping workflows. Explore Saudi restaurant coverage, including Riyadh and Jeddah, alongside grocery coverage in Saudi Arabia, Kuwait, Qatar and Bahrain. Beauty and pharmacy availability depends on the delivery point; call `/verticals` to discover the catalogs and stores available there.

### Key Features

- Find serviceable catalogs and store ids using delivery coordinates.
- Search restaurants by text, cuisine and delivery/discount preferences, then inspect their menus.
- Compare current and original dish prices and calculate delivery fees from basket-value bands.
- Search products by term, category or brand, then fetch full details for selected product ids.
- Check inventory and understand multi-pack contents and quantities.
- Browse restaurant deal campaigns and retail promotions.
- Explore smart lists, themed product references, retail stories and search-term demand.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `ninja-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                    | Request                             | Purpose                       |
| ------------------------------- | ----------------------------------- | ----------------------------- |
| `_status`                       | `GET /status`                       | /status                       |
| `_verticals`                    | `GET /verticals`                    | /verticals                    |
| `_delivery-info`                | `GET /delivery-info`                | /delivery-info                |
| `_cuisines`                     | `GET /cuisines`                     | /cuisines                     |
| `_restaurant-filters`           | `GET /restaurant-filters`           | /restaurant-filters           |
| `_restaurants`                  | `GET /restaurants`                  | /restaurants                  |
| `_restaurant-details`           | `GET /restaurant-details`           | /restaurant-details           |
| `_restaurant-by-brand`          | `GET /restaurant-by-brand`          | /restaurant-by-brand          |
| `_restaurant-menu`              | `GET /restaurant-menu`              | /restaurant-menu              |
| `_restaurant-delivery-fees`     | `GET /restaurant-delivery-fees`     | /restaurant-delivery-fees     |
| `_restaurant-by-url`            | `GET /restaurant-by-url`            | /restaurant-by-url            |
| `_restaurants-by-url`           | `GET /restaurants-by-url`           | /restaurants-by-url           |
| `_menu-discounted-items`        | `GET /menu-discounted-items`        | /menu-discounted-items        |
| `_related-menu-items`           | `GET /related-menu-items`           | /related-menu-items           |
| `_restaurant-suggestions`       | `GET /restaurant-suggestions`       | /restaurant-suggestions       |
| `_trending-restaurant-searches` | `GET /trending-restaurant-searches` | /trending-restaurant-searches |
| `_restaurant-collections`       | `GET /restaurant-collections`       | /restaurant-collections       |
| `_restaurant-deals`             | `GET /restaurant-deals`             | /restaurant-deals             |
| `_restaurant-deal-items`        | `GET /restaurant-deal-items`        | /restaurant-deal-items        |
| `_restaurant-banners`           | `GET /restaurant-banners`           | /restaurant-banners           |
| `_product-search`               | `GET /product-search`               | /product-search               |
| `_products-by-category`         | `GET /products-by-category`         | /products-by-category         |
| `_products-by-brand`            | `GET /products-by-brand`            | /products-by-brand            |
| `_product-details`              | `GET /product-details`              | /product-details              |
| `_product-inventory`            | `GET /product-inventory`            | /product-inventory            |
| `_categories`                   | `GET /categories`                   | /categories                   |
| `_category-sections`            | `GET /category-sections`            | /category-sections            |
| `_brands`                       | `GET /brands`                       | /brands                       |
| `_product-bundle`               | `GET /product-bundle`               | /product-bundle               |
| `_store-offers`                 | `GET /store-offers`                 | /store-offers                 |
| `_promoted-products`            | `GET /promoted-products`            | /promoted-products            |
| `_display-tags`                 | `GET /display-tags`                 | /display-tags                 |
| `_search-phrases`               | `GET /search-phrases`               | /search-phrases               |
| `_boosted-search-phrases`       | `GET /boosted-search-phrases`       | /boosted-search-phrases       |
| `_smart-search-lists`           | `GET /smart-search-lists`           | /smart-search-lists           |
| `_themed-lists`                 | `GET /themed-lists`                 | /themed-lists                 |
| `_retail-stories`               | `GET /retail-stories`               | /retail-stories               |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
