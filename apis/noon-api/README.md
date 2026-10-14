# Noon API: Free API and MCP access

Search Noon products across Middle East markets. Access product prices, Buy Box offers, seller profiles, reviews, deals and category data.

![Noon API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/fa86e01a-15f6-4fce-a01f-150f83b5e2a0.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/noon7)
- [API overview and coverage](https://happyendpoint.com/library/noon-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `noon7.p.rapidapi.com`
- Category: retail
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Product search and price comparison for UAE, Saudi and other storefronts
- Buy Box and seller offer research
- Monitoring discounts, deals and category inventories
- Product review analysis and merchant comparison

## Source documentation notes

| Feature                   | Details                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Storefront Coverage       | 7 noon storefronts: United Arab Emirates (AED), Saudi Arabia (SAR), Egypt (EGP), Kuwait (KWD), Qatar (QAR), Oman (OMR) and Bahrain (BHD); every price is in the storefront's own currency, and `getMarketplace` shows which catalogue serves each storefront |
| Catalogue Browsing        | Keyword search, every top-level department and every branch below them, the brand directory and one seller's whole catalogue; up to 200 products per page and 10,000 per query                                                                               |
| Deals and Campaigns       | The discount campaigns running today with their codes, the products on each campaign, original and current price, discount percent and stacked promotions                                                                                                    |
| Offers and Buy Box        | Every seller competing on a product and which one holds the Buy Box, with each seller's price, stock, rating, delivery promise, warranty, return policy, payment options and every coupon on the offer                                                       |
| Bulk Price Check          | Current price, original price, discount, stock and Buy Box seller for up to 20 products in one call; out of stock, not in the catalogue and failed lookups are kept apart                                                                                    |
| Reviews and Review Photos | Product reviews in English and Arabic with star level, photo, verified purchase and variant family filters, 4 sort orders, rating breakdown, customer review photos and noon's own AI review summary                                                         |
| Seller Profiles           | Seller rating and star breakdown, scorecard metrics such as Product as Described, badges, trading since date, every seller review and the seller's whole catalogue                                                                                           |
| Related Products          | noon's own recommendations for one product or a basket of up to 20 products                                                                                                                                                                                  |
| Sponsored Placements      | Which products pay for placement on a keyword or in a category, split from the organic rows, at standard or high ad load                                                                                                                                     |
| Delivery Locations        | Parcel lockers and pickup points with coordinates and opening hours on the UAE, Saudi Arabia and Egypt storefronts, the nearest ones to a point, and coordinate to delivery area and city lookup on all 7 storefronts                                        |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `noon-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID            | Request                    | Purpose              |
| ----------------------- | -------------------------- | -------------------- |
| `get_status`            | `GET /status`              | /status              |
| `getMarketplace`        | `GET /marketplace`         | /marketplace         |
| `getSearchSuggestions`  | `GET /autocomplete`        | /autocomplete        |
| `listCategories`        | `GET /categories`          | /categories          |
| `listBrands`            | `GET /brands`              | /brands              |
| `listDealCampaigns`     | `GET /deal-campaigns`      | /deal-campaigns      |
| `searchProducts`        | `GET /product-search`      | /product-search      |
| `listCategoryProducts`  | `GET /category-products`   | /category-products   |
| `listSellerProducts`    | `GET /seller-products`     | /seller-products     |
| `listDealProducts`      | `GET /deal-products`       | /deal-products       |
| `listSponsoredProducts` | `GET /sponsored-products`  | /sponsored-products  |
| `listProductsByUrl`     | `GET /products-by-url`     | /products-by-url     |
| `getProductDetails`     | `GET /product-details`     | /product-details     |
| `listProductOffers`     | `GET /product-offers`      | /product-offers      |
| `getProductPrices`      | `GET /product-prices`      | /product-prices      |
| `getProductByUrl`       | `GET /product-by-url`      | /product-by-url      |
| `listProductReviews`    | `GET /product-reviews`     | /product-reviews     |
| `getReviewSummary`      | `GET /review-summary`      | /review-summary      |
| `listReviewImages`      | `GET /review-images`       | /review-images       |
| `getSellerProfile`      | `GET /seller-profile`      | /seller-profile      |
| `listSellerReviews`     | `GET /seller-reviews`      | /seller-reviews      |
| `listRelatedProducts`   | `GET /related-products`    | /related-products    |
| `listCollectionPoints`  | `GET /collection-points`   | /collection-points   |
| `getAreaByCoordinates`  | `GET /area-by-coordinates` | /area-by-coordinates |
| `listFoodZones`         | `GET /food-zones`          | /food-zones          |
| `searchFoodRestaurants` | `GET /food-restaurants`    | /food-restaurants    |
| `getFoodMenu`           | `GET /food-menu`           | /food-menu           |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
