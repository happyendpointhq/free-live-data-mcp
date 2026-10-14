# Milanuncios API: Free API and MCP access

Search Milanuncios classifieds in Spain. Access used cars, property, electronics, listing details, seller profiles and price drops as JSON.

![Milanuncios API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/80f5862e-32d7-4127-b33d-2d86e5e950d8.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/milanuncios-api)
- [API overview and coverage](https://happyendpoint.com/library/milanuncios-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `milanuncios-api.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Spain used car and motorbike listing search
- Second-hand electronics price monitoring
- Property classifieds research by city and category
- Seller and dealer inventory monitoring

## Source documentation notes

| Feature                   | Details                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Market Coverage           | Spain: classifieds from every province, region and city on Milanuncios, as listed on the site                                                                                                                                                                            |
| Categories Carried        | Cars and used cars, motorbikes, real estate (pisos, houses, rooms), electronics, mobile phones, home goods, jobs, services and the rest of the Milanuncios category tree, with each category's own filter definitions                                                    |
| Search Filters            | `searchListings`: 58 filters, including keyword, category, province, city and neighbourhood zone, coordinates with radius, price range, seller type, condition, car make, model, year, mileage, fuel, transmission, surface, bedrooms and bathrooms, plus 10 sort orders |
| URL Front Doors           | Paste a milanuncios.com search or category address and get its listings with the filters applied, or paste a listing address and get the full listing record                                                                                                             |
| Listing Detail            | Full photo gallery, specifications, description, seller, store, view and favourite statistics, financing offers and the price rating on cars                                                                                                                             |
| Price Drops               | Reduced listings only, each with the previous price and the amount and percentage of the drop                                                                                                                                                                            |
| Category Breakdown        | How the matches of a keyword search split across the child categories                                                                                                                                                                                                    |
| Shipping Quotes           | Shipping methods and the full buyer cost for shippable listings                                                                                                                                                                                                          |
| Seller and Store Profiles | Seller profile with trust badge and sales, plus dealer and agency store profiles and their full inventory                                                                                                                                                                |
| Seller Phone Numbers      | The phone numbers of listings that show phone contact                                                                                                                                                                                                                    |
| Zones and Geocoding       | Province, city and neighbourhood zone ids, street address autocomplete, geocoding and reverse geocoding for Spain                                                                                                                                                        |
| API Type                  | Fast REST API via RapidAPI                                                                                                                                                                                                                                               |

### Key Features

- Search every category with 58 filters and 10 sort orders, including province, city, neighbourhood zone, coordinates with a radius, price, seller type and category-specific filters for cars, motorbikes, boats, trucks and real estate.
- Look up any category's own filter definitions, with every accepted option value, so you can build filter panels.
- Turn a word such as "piso" or "iphone" into matching categories and suggested searches.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `milanuncios-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `listCategories`          | `GET /categories`             | /categories             |
| `searchCategories`        | `GET /search-categories`      | /search-categories      |
| `getCategoryFilters`      | `GET /category-filters`       | /category-filters       |
| `searchLocations`         | `GET /locations`              | /locations              |
| `listCityZones`           | `GET /city-zones`             | /city-zones             |
| `searchAddresses`         | `GET /address-search`         | /address-search         |
| `geocodePlace`            | `GET /geocode`                | /geocode                |
| `reverseGeocode`          | `GET /reverse-geocode`        | /reverse-geocode        |
| `searchListings`          | `GET /search`                 | /search                 |
| `getSearchCategoryCounts` | `GET /search-category-counts` | /search-category-counts |
| `searchListingsByUrl`     | `GET /search-by-url`          | /search-by-url          |
| `searchPriceDrops`        | `GET /price-drops`            | /price-drops            |
| `getListing`              | `GET /listing`                | /listing                |
| `getListingByUrl`         | `GET /listing-by-url`         | /listing-by-url         |
| `getListingPhone`         | `GET /listing-phone`          | /listing-phone          |
| `listSimilarListings`     | `GET /similar-listings`       | /similar-listings       |
| `getListingShipping`      | `GET /listing-shipping`       | /listing-shipping       |
| `getSellerProfile`        | `GET /seller-profile`         | /seller-profile         |
| `listSellerListings`      | `GET /seller-listings`        | /seller-listings        |
| `getStore`                | `GET /store`                  | /store                  |
| `listStoreListings`       | `GET /store-listings`         | /store-listings         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
