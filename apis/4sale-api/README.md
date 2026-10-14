# 4Sale Kuwait API: Free API and MCP access

Search 4Sale Kuwait classifieds, used cars, property and electronics. Access listing prices, sellers, districts and business directory data.

![4Sale Kuwait API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/c8a34954-1471-40be-af67-1943f43e7ef8.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/4sale-kuwait-api)
- [API overview and coverage](https://happyendpoint.com/library/4sale-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `4sale-kuwait-api.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Kuwait classifieds search across cars, property and consumer goods
- Price monitoring within a category and district
- Seller inventory and dealer research
- Local business directory search with reviews

## Source documentation notes

### Key Features

- Search every category by keyword in English or Arabic, or search inside one category with district, price and attribute filters.
- Browse a category, or several at once, by district, price range and attributes such as year, mileage, rooms and pool.
- Walk Kuwait's governorates, areas and blocks, and find a district or category by its English or Arabic name.
- Paste q84sale.com category and listing page addresses instead of building filters or extracting IDs.
- Open a listing's full bilingual record with decoded attributes, coordinates, seller phone and promotion state.
- See a listing's quality score, its daily and hourly view history and its contact clicks.
- Follow the latest listings across the whole catalogue as one newest-first feed.
- List a seller's active listings by phone number, and a business profile's whole inventory by slug.
- Search the business directory and open each business's details, reviews, photos and menus.
- Look up new car models, trims and prices in KWD.
- See what the marketplace promotes: paid placements, sponsored cards, home screen banners and promo codes.

### Available Data

Listing IDs, slugs and page addresses; titles and descriptions in English and Arabic; prices in KWD, with "price on request" listings marked; categories with names in both languages and full breadcrumbs; decoded attributes such as make, model, year, mileage, rooms and area, with their units; district names and paths from governorate to block; map coordinates where the seller pinned a point; images, video and photo counts; posting and bump dates; premium, pinned and paid placement flags; seller phone numbers, account type, verification and business profile links; view counts.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `4sale-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                   | Request                           | Purpose                     |
| ------------------------------ | --------------------------------- | --------------------------- |
| `getServiceStatus`             | `GET /status`                     | /status                     |
| `listCategories`               | `GET /categories`                 | /categories                 |
| `getCategoryDetails`           | `GET /category-details`           | /category-details           |
| `getCategoryFilters`           | `GET /category-filters`           | /category-filters           |
| `listDistricts`                | `GET /districts`                  | /districts                  |
| `getSearchSuggestions`         | `GET /autocomplete`               | /autocomplete               |
| `listTrendingSearches`         | `GET /trending-searches`          | /trending-searches          |
| `searchListings`               | `GET /search`                     | /search                     |
| `listCategoryListings`         | `GET /listings`                   | /listings                   |
| `searchCategoryListings`       | `GET /category-search`            | /category-search            |
| `listLatestListings`           | `GET /latest-listings`            | /latest-listings            |
| `listListingsByUrl`            | `GET /listings-by-url`            | /listings-by-url            |
| `listPromotedListings`         | `GET /promoted-listings`          | /promoted-listings          |
| `listPopularListings`          | `GET /popular-listings`           | /popular-listings           |
| `getListingDetails`            | `GET /listing-details`            | /listing-details            |
| `getListingDetailsByUrl`       | `GET /listing-details-by-url`     | /listing-details-by-url     |
| `getListingScore`              | `GET /listing-score`              | /listing-score              |
| `getListingViews`              | `GET /listing-views`              | /listing-views              |
| `listSimilarListings`          | `GET /similar-listings`           | /similar-listings           |
| `listSellerListings`           | `GET /seller-listings`            | /seller-listings            |
| `listBusinessProfiles`         | `GET /business-profiles`          | /business-profiles          |
| `getBusinessProfileDetails`    | `GET /business-profile-details`   | /business-profile-details   |
| `listBusinessProfileListings`  | `GET /business-profile-listings`  | /business-profile-listings  |
| `searchDirectoryBusinesses`    | `GET /directory-search`           | /directory-search           |
| `getDirectoryBusinessDetails`  | `GET /directory-business-details` | /directory-business-details |
| `listDirectoryBusinessReviews` | `GET /directory-business-reviews` | /directory-business-reviews |
| `listDirectoryBusinessMedia`   | `GET /directory-business-media`   | /directory-business-media   |
| `listSponsoredCards`           | `GET /sponsored-cards`            | /sponsored-cards            |
| `listPromoCodes`               | `GET /promo-codes`                | /promo-codes                |
| `getHomeSections`              | `GET /home-sections`              | /home-sections              |
| `searchNewCars`                | `GET /new-cars`                   | /new-cars                   |
| `listServiceOffers`            | `GET /service-offers`             | /service-offers             |
| `listServiceCategories`        | `GET /service-categories`         | /service-categories         |
| `listBlogArticles`             | `GET /blog-articles`              | /blog-articles              |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
