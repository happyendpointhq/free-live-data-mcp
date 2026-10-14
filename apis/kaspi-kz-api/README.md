# Kaspi.kz API: Free API and MCP access

Kaspi.kz marketplace data for Kazakhstan. Search products, compare seller offers and prices, check stock, and pull reviews and car parts.

![Kaspi.kz API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/eb4a32fa-917b-4e0e-846c-0c8e04adcd8f.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/kaspi-kz)
- [API overview and coverage](https://happyendpoint.com/library/kaspi-kz-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `kaspi-kz.p.rapidapi.com`
- Category: retail
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Product Search with Category and Facet Filters
- Search by Marketplace URL
- Product Details, Specifications, and Variants
- Similar Products
- Seller Offers and Buy-Box Winner
- Multi-Product Stock Checks by City
- Pickup Points and Parcel Lockers
- Seller Discovery by Keyword
- Merchant Profiles and Quality Scores
- Product and Merchant Reviews with Star Histograms
- Automotive Parts Search and Fitment Filters
- VIN Lookup and OEM Cross-Reference
- Tyre Fitment by Make, Model, and Year
- Brand and Seller Share of Shelf
- Trade-In Device Catalog

## Source documentation notes

| Endpoint area         | What you can do                                                                                                        | Available scope                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Search & Discovery    | Find query suggestions, inspect filters and counts, search by keyword or category, or resolve a marketplace search URL | Search pages contain 12 products; category and facet filters are supported           |
| Product Catalog       | Retrieve product details, specifications, variants, and similar products                                               | Category trees support depth 0-5                                                     |
| Offers & Availability | Compare seller prices and delivery terms, check stock, and identify collection options                                 | Up to 64 sellers per offer page and up to 150 product codes per availability request |
| Sellers               | Discover merchants by keyword and inspect seller profiles and quality scores                                           | Seller discovery, ratings, review totals, legal details, and service-quality metrics |
| Reviews               | Read product and merchant rating summaries, histograms, review text, photos, and related seller or product data        | Product and merchant review pages support up to 200 rows                             |
| Locations             | List supported regions, inspect city details, and find pickup points or parcel lockers                                 | 320 cities and towns; pickup-point requests support up to 200 points                 |
| Automotive            | Search automotive products, inspect fitment filters, decode VINs, cross-reference OEM numbers, and find tyre sizes     | Parts, oils, tyres, batteries, accessories, vehicle fitment, VIN, and OEM lookups    |
| Trade-In              | List device models accepted by the marketplace trade-in program                                                        | Five brands: Apple, Samsung, Xiaomi, Huawei, and Google                              |
| API Coverage          | Use the complete marketplace dataset exposed by this API and confirm service availability                              | 29 marketplace endpoints plus health                                                 |

### Search & Discovery

Use `/search-filters` to inspect matching totals and valid filter clauses before paging `/search-products`. Search by keyword, category, price, brand, merchant, discount, rating, delivery time, or category-specific facets. `/search-products-by-url` accepts a marketplace search or category URL and returns the interpreted search alongside its results.

### Common Use Cases

- Kazakhstan ecommerce product search and category browsing
- Price comparison, buy-box research, and seller offer analysis

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `kaspi-kz-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID               | Request                        | Purpose                  |
| -------------------------- | ------------------------------ | ------------------------ |
| `_cities`                  | `GET /cities`                  | /cities                  |
| `_city-details`            | `GET /city-details`            | /city-details            |
| `_categories`              | `GET /categories`              | /categories              |
| `_autocomplete`            | `GET /autocomplete`            | /autocomplete            |
| `_search-filters`          | `GET /search-filters`          | /search-filters          |
| `_search-products`         | `GET /search-products`         | /search-products         |
| `_search-products-by-url`  | `GET /search-products-by-url`  | /search-products-by-url  |
| `_product-details`         | `GET /product-details`         | /product-details         |
| `_product-details-by-url`  | `GET /product-details-by-url`  | /product-details-by-url  |
| `_product-specifications`  | `GET /product-specifications`  | /product-specifications  |
| `_product-variants`        | `GET /product-variants`        | /product-variants        |
| `_similar-products`        | `GET /similar-products`        | /similar-products        |
| `_product-offers`          | `GET /product-offers`          | /product-offers          |
| `_product-availability`    | `GET /product-availability`    | /product-availability    |
| `_pickup-points`           | `GET /pickup-points`           | /pickup-points           |
| `_trade-in-devices`        | `GET /trade-in-devices`        | /trade-in-devices        |
| `_sellers-by-keyword`      | `GET /sellers-by-keyword`      | /sellers-by-keyword      |
| `_merchant-details`        | `GET /merchant-details`        | /merchant-details        |
| `_merchant-quality-score`  | `GET /merchant-quality-score`  | /merchant-quality-score  |
| `_product-rating-summary`  | `GET /product-rating-summary`  | /product-rating-summary  |
| `_product-reviews`         | `GET /product-reviews`         | /product-reviews         |
| `_merchant-rating-summary` | `GET /merchant-rating-summary` | /merchant-rating-summary |
| `_merchant-reviews`        | `GET /merchant-reviews`        | /merchant-reviews        |
| `_car-parts-search`        | `GET /car-parts-search`        | /car-parts-search        |
| `_car-parts-filters`       | `GET /car-parts-filters`       | /car-parts-filters       |
| `_oem-cross-reference`     | `GET /oem-cross-reference`     | /oem-cross-reference     |
| `_tyre-fitment`            | `GET /tyre-fitment`            | /tyre-fitment            |
| `_vin-lookup`              | `GET /vin-lookup`              | /vin-lookup              |
| `_share-of-shelf`          | `GET /share-of-shelf`          | /share-of-shelf          |
| `get_status`               | `GET /status`                  | /status                  |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
