# HungerStation API: Free API and MCP access

Access HungerStation restaurant menus, meal prices, delivery fees, offers and grocery products across Saudi Arabia in English and Arabic.

![HungerStation API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/1093d348-9a5b-4391-94ce-49898b00b304.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/hungerstation1)
- [API overview and coverage](https://happyendpoint.com/library/hungerstation-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `hungerstation1.p.rapidapi.com`
- Category: grocery
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Restaurant discovery in Riyadh, Jeddah, Dammam and other Saudi cities
- Tracking menu prices, meal deals and restaurant offers
- Comparing grocery products and store promotions
- Studying delivery fees and branch coverage by location

## Source documentation notes

| Feature                    | Details                                                                                                                                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage            | Saudi Arabia: every city and delivery district HungerStation serves, such as Riyadh, Jeddah, Dammam, Al Khobar and Mecca, with English and Arabic names and slugs, plus coordinate to city and district lookup                           |
| Six Marketplaces           | Restaurants, grocery and supermarkets, HungerStation Market, pickup, flowers, and pharmacies with beauty, optics and wellness stores                                                                                                     |
| Listing Filters and Sorts  | 4 sort orders: recommended, distance, rating and fastest delivery; minimum rating, delivery time, price band, Top Choice, Newly Added, Offers and HungerStation Plus filters; cuisine filters                                            |
| Priced Menus and Options   | Full menus in SAR with sections, descriptions, photos and calories; the live menu at a delivery point with discounts, Plus member prices, allergens, dietary info and scheduled order time slots; sizes, choice groups and add-on prices |
| Delivery Fees and Times    | Live open status, delivery fee, minimum order, delivery time estimate and distance for every vendor at a point; basket-size delivery fee tiers; delivery coverage for a point                                                            |
| Grocery Catalogues         | Store category trees with product counts, whole catalogues and current deals, in-store product search, promotion shelves, multi-buy and price-cut offers, barcodes and sold-by-weight produce                                            |
| Grocery Price Comparison   | One product across every grocery store delivering to a point, with pack size and price per base unit                                                                                                                                     |
| Reviews, Offers and Awards | Rating distribution and customer reviews with star rating, tags and date; the checkout offers of a branch with cap, minimum basket and expiry; customer-voted restaurant awards in 3 regions                                             |
| Home Feed and Collections  | Home screen rails with sponsored placements, themed collections such as Dessert and Save More, and meal deal shelves at a point                                                                                                          |
| URL Front Doors            | Paste a HungerStation restaurant page or district listing URL and get the record                                                                                                                                                         |
| English and Arabic         | Names, cuisines, menus, labels and units in English or Arabic; ids, prices and coordinates are the same in both                                                                                                                          |
| API Type                   | Fast REST API via RapidAPI                                                                                                                                                                                                               |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `hungerstation-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                  | Request                            | Purpose                      |
| ----------------------------- | ---------------------------------- | ---------------------------- |
| `listCities`                  | `GET /cities`                      | /cities                      |
| `listDistricts`               | `GET /districts`                   | /districts                   |
| `locateCoordinates`           | `GET /locate`                      | /locate                      |
| `listCuisines`                | `GET /cuisines`                    | /cuisines                    |
| `listRestaurantsByDistrict`   | `GET /restaurants`                 | /restaurants                 |
| `listRestaurantsNearby`       | `GET /restaurants-nearby`          | /restaurants-nearby          |
| `getListingFilters`           | `GET /listing-filters`             | /listing-filters             |
| `searchVendors`               | `GET /search`                      | /search                      |
| `getSearchSuggestions`        | `GET /search-suggestions`          | /search-suggestions          |
| `autocompleteSearch`          | `GET /search-autocomplete`         | /search-autocomplete         |
| `getHomeFeed`                 | `GET /home-feed`                   | /home-feed                   |
| `listCollections`             | `GET /collections`                 | /collections                 |
| `listCollectionVendors`       | `GET /collection-vendors`          | /collection-vendors          |
| `listMealDeals`               | `GET /meal-deals`                  | /meal-deals                  |
| `getRestaurantDetails`        | `GET /restaurant-details`          | /restaurant-details          |
| `getVendorAtLocation`         | `GET /vendor-at-location`          | /vendor-at-location          |
| `getRestaurantMenu`           | `GET /restaurant-menu`             | /restaurant-menu             |
| `getRestaurantMenuAtLocation` | `GET /restaurant-menu-at-location` | /restaurant-menu-at-location |
| `getMenuItemOptions`          | `GET /menu-item-options`           | /menu-item-options           |
| `getFrequentlyOrderedWith`    | `GET /frequently-ordered-with`     | /frequently-ordered-with     |
| `getRestaurantByUrl`          | `GET /restaurant-by-url`           | /restaurant-by-url           |
| `listRestaurantsByUrl`        | `GET /restaurants-by-url`          | /restaurants-by-url          |
| `listGroceryStores`           | `GET /grocery-stores`              | /grocery-stores              |
| `getGroceryStoreDetails`      | `GET /grocery-store-details`       | /grocery-store-details       |
| `getGroceryStorePromotions`   | `GET /grocery-store-promotions`    | /grocery-store-promotions    |
| `listGroceryProducts`         | `GET /grocery-products`            | /grocery-products            |
| `listGroceryStoreProducts`    | `GET /grocery-store-products`      | /grocery-store-products      |
| `searchGroceryProducts`       | `GET /grocery-product-search`      | /grocery-product-search      |
| `compareGroceryPrices`        | `GET /grocery-price-comparison`    | /grocery-price-comparison    |
| `getHmarketStoreForLocation`  | `GET /hmarket-store`               | /hmarket-store               |
| `listTopVendors`              | `GET /top-vendors`                 | /top-vendors                 |
| `searchVendorsNearby`         | `GET /search-nearby`               | /search-nearby               |
| `listBrandBranches`           | `GET /brand-branches`              | /brand-branches              |
| `getRestaurantReviews`        | `GET /restaurant-reviews`          | /restaurant-reviews          |
| `getRestaurantOffers`         | `GET /restaurant-offers`           | /restaurant-offers           |
| `getDeliveryFeeTiers`         | `GET /delivery-fee-tiers`          | /delivery-fee-tiers          |
| `getApiStatus`                | `GET /status`                      | /status                      |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
