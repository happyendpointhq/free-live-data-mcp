# Motory API: Free API and MCP access

Access Motory used and new car listings in Saudi Arabia and Jordan, with prices, makes, models, dealers, offers and vehicle comparison data.

![Motory API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/953f4cd1-733d-4957-85bc-7a2f811beef5.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/motory-com)
- [API overview and coverage](https://happyendpoint.com/library/motory-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `motory-com.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Saudi and Jordan car search and price comparison
- Tracking used vehicle inventory by make and model
- Comparing new car specifications and dealer offers
- Automotive dealer and service directory research

## Source documentation notes

| Feature                         | Details                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage                 | Saudi Arabia (prices in SAR) and Jordan (prices in JOD), each with its own inventory and ids; Saudi cities such as Riyadh, Jeddah, Dammam, Khobar, Makkah and Madinah, and Jordan cities such as Amman                                                                                                                            |
| Used Car Search                 | 26 parameters on `searchUsedCars`: 21 filters (make, model, city, year, price, body type, fuel type, transmission, mileage, colour, origin, electric range, financing, priced listings only, seller type, dealer, price collection and keyword) and 7 sort orders: featured, newest, oldest, mileage and price in both directions |
| Full Listing Details            | Specs, VIN, gallery, price, seller phone and WhatsApp numbers, inspection reports and related cars and offers for every used listing                                                                                                                                                                                              |
| New Car Catalogue               | New car prices by model year and grade, specs, features, selling companies with phone and WhatsApp numbers, financing, make line-ups with starting and top prices, 5 sort orders and archived model years                                                                                                                         |
| Car Comparison                  | Two new cars side by side across 6 spec categories, plus the cars most often compared with a car and the most compared cars of the week                                                                                                                                                                                           |
| Finance and Offers              | Finance providers by make, new cars by finance provider, and current car offers and financing deals with terms, dates, the cars on offer, monthly instalment, down payment and eligibility terms                                                                                                                                  |
| Filter Options with Live Counts | Used and new car filter options with result counts that narrow as you add filters: cities, makes, models, years, price bands, body, fuel, transmission, mileage, colour, origin, electric range, seller types and dealers                                                                                                         |
| Dealers and Showrooms           | Showcased dealers with stock counts and a preview of their cars; dealer phones, WhatsApp, showroom map locations and branch count                                                                                                                                                                                                 |
| URL Front Doors                 | Paste a motory.com search or listing link and get the results or the full record; identify any motory.com link with its page type and ids                                                                                                                                                                                         |
| Site Search and Suggestions     | Keyword search across used cars, new cars, offers, the directory, news and videos; typed text to make, model and year suggestions with ids                                                                                                                                                                                        |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `motory-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                   | Request                           | Purpose                     |
| ------------------------------ | --------------------------------- | --------------------------- |
| `get_status`                   | `GET /status`                     | /status                     |
| `listMakes`                    | `GET /makes`                      | /makes                      |
| `listModels`                   | `GET /models`                     | /models                     |
| `getNewCarLineup`              | `GET /new-car-lineup`             | /new-car-lineup             |
| `getUsedCarFilters`            | `GET /used-car-filters`           | /used-car-filters           |
| `getNewCarFilters`             | `GET /new-car-filters`            | /new-car-filters            |
| `listFinanceProviders`         | `GET /finance-providers`          | /finance-providers          |
| `getFuelPrices`                | `GET /fuel-prices`                | /fuel-prices                |
| `searchUsedCars`               | `GET /used-cars`                  | /used-cars                  |
| `getUsedCarDetails`            | `GET /used-car-details`           | /used-car-details           |
| `searchUsedCarsByUrl`          | `GET /used-cars-by-url`           | /used-cars-by-url           |
| `getUsedCarDetailsByUrl`       | `GET /used-car-details-by-url`    | /used-car-details-by-url    |
| `searchNewCars`                | `GET /new-cars`                   | /new-cars                   |
| `getNewCarDetails`             | `GET /new-car-details`            | /new-car-details            |
| `searchNewCarsByUrl`           | `GET /new-cars-by-url`            | /new-cars-by-url            |
| `getNewCarDetailsByUrl`        | `GET /new-car-details-by-url`     | /new-car-details-by-url     |
| `compareNewCars`               | `GET /compare-new-cars`           | /compare-new-cars           |
| `getCompareSuggestions`        | `GET /compare-suggestions`        | /compare-suggestions        |
| `searchMotory`                 | `GET /search`                     | /search                     |
| `getSearchSuggestions`         | `GET /search-suggestions`         | /search-suggestions         |
| `resolveUrl`                   | `GET /resolve-url`                | /resolve-url                |
| `listDealers`                  | `GET /dealers`                    | /dealers                    |
| `getDealerDetails`             | `GET /dealer-details`             | /dealer-details             |
| `listCarOffers`                | `GET /offers`                     | /offers                     |
| `getCarOfferDetails`           | `GET /offer-details`              | /offer-details              |
| `searchDirectory`              | `GET /directory-search`           | /directory-search           |
| `getDirectoryBusinessDetails`  | `GET /directory-business-details` | /directory-business-details |
| `getDirectoryCompanyDetails`   | `GET /directory-company-details`  | /directory-company-details  |
| `searchDirectoryCompanies`     | `GET /directory-companies`        | /directory-companies        |
| `listDirectoryCompanyBranches` | `GET /directory-branches`         | /directory-branches         |
| `listDirectoryServices`        | `GET /directory-services`         | /directory-services         |
| `listDirectoryAmenities`       | `GET /directory-amenities`        | /directory-amenities        |
| `listDirectoryCities`          | `GET /directory-cities`           | /directory-cities           |
| `listDirectoryMakes`           | `GET /directory-makes`            | /directory-makes            |
| `listNewsCategories`           | `GET /news-categories`            | /news-categories            |
| `getNewsByCategory`            | `GET /category-news`              | /category-news              |
| `searchNews`                   | `GET /news-search`                | /news-search                |
| `getNewsDetails`               | `GET /news-details`               | /news-details               |
| `getNewsAuthorDetails`         | `GET /author-details`             | /author-details             |
| `getNewsByAuthor`              | `GET /author-news`                | /author-news                |
| `listNewsAuthorTags`           | `GET /author-tags`                | /author-tags                |
| `getNewsByTag`                 | `GET /tag-news`                   | /tag-news                   |
| `listMostReadNews`             | `GET /most-read-news`             | /most-read-news             |
| `listVideoCategories`          | `GET /video-categories`           | /video-categories           |
| `listVideos`                   | `GET /videos`                     | /videos                     |
| `getVideoDetails`              | `GET /video-details`              | /video-details              |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
