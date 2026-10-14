# Expedia API: Free API and MCP access

Search Expedia hotels, flights, car rentals and activities. Access room rates, reviews, price calendars and travel packages across 32 markets.

![Expedia API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/fb159e34-02f6-45fd-8491-81c79f43addb.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/expedia18)
- [API overview and coverage](https://happyendpoint.com/library/expedia-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `expedia18.p.rapidapi.com`
- Category: travel
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Hotel search and room-rate comparison
- Airfare research across dates and cabin classes
- Car rental and flight-plus-hotel package comparison
- Destination guides with activities and guest reviews

## Source documentation notes

| Feature                                | Details                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **32 Markets and 7 Language Variants** | 32 Expedia storefronts across the Americas, Europe and Asia Pacific, each priced in its own local currency and written in its own language, plus 7 second-language versions: French in Canada, English in Hong Kong, Taiwan, Japan, Thailand and Indonesia, and Simplified Chinese in Hong Kong                                                                            |
| **Six Ways to Search Hotels**          | Destination name or region, map point with a radius, map box, near an airport, pasted Expedia search URL, and a batch of up to 50 hotel IDs                                                                                                                                                                                                                                |
| **22 Hotel Search Filters**            | Star rating, guest rating, minimum and maximum price, nightly or total price basis, free cancellation, pay later, available only, meal plans, amenities, property types, accessibility, traveler types, bedrooms, room views, room amenities, member benefits, neighborhood, brands, hotel name, excluded hotels and any destination filter code from the filter catalogue |
| **Six Hotel Sort Orders**              | Recommended, price low to high, price high to low, guest rating, star rating and member prices; pages of up to 200 hotels                                                                                                                                                                                                                                                  |
| **Hotels and Vacation Rentals**        | Hotels, resorts, apartments, villas, cabins, cottages and private vacation homes, with bedrooms, room-by-room sleeping arrangements and host profiles for rentals                                                                                                                                                                                                          |
| **Room Rates and Policies**            | Every room type and rate plan for a stay: totals with taxes, nightly rates, strikethrough prices, fees paid at the property, cancellation policy with its refund timeline, extras such as breakfast, pay now, pay later or deposit options and rooms left                                                                                                                  |
| **Guest Reviews**                      | Hotel reviews 50 per page with management replies, photos and themes, four sort orders and keyword search; category scores, rating distribution and AI review summaries                                                                                                                                                                                                    |
| **Hotel Price Calendar**               | A hotel's price for every check-in date across about 16 months in one request, plus a low, typical or high verdict for any stay                                                                                                                                                                                                                                            |
| **Flight Search**                      | One way, round trip and multi-city trips of 2 to 5 flights; every matching itinerary paged up to 100 per page, with segments, layovers, aircraft and fare families                                                                                                                                                                                                         |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `expedia-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                    | Request                                | Purpose                          |
| ------------------------------- | -------------------------------------- | -------------------------------- |
| `getStatus`                     | `GET /status`                          | /status                          |
| `searchLocations`               | `GET /locations`                       | /locations                       |
| `listMarkets`                   | `GET /markets`                         | /markets                         |
| `searchHotels`                  | `GET /hotels/search`                   | /hotels/search                   |
| `searchHotelsByCoordinates`     | `GET /hotels/search-by-coordinates`    | /hotels/search-by-coordinates    |
| `searchHotelsByBounds`          | `GET /hotels/search-by-bounds`         | /hotels/search-by-bounds         |
| `searchHotelsNearAirport`       | `GET /hotels/search-near-airport`      | /hotels/search-near-airport      |
| `getHotelsBatch`                | `GET /hotels/batch`                    | /hotels/batch                    |
| `getHotelSearchFilters`         | `GET /hotels/search-filters`           | /hotels/search-filters           |
| `getHotelDetails`               | `GET /hotels/details`                  | /hotels/details                  |
| `getHotelDetailsByUrl`          | `GET /hotels/details-by-url`           | /hotels/details-by-url           |
| `getHotelPhotos`                | `GET /hotels/photos`                   | /hotels/photos                   |
| `getHotelRooms`                 | `GET /hotels/rooms`                    | /hotels/rooms                    |
| `getHotelHost`                  | `GET /hotels/host`                     | /hotels/host                     |
| `getSimilarHotels`              | `GET /hotels/similar`                  | /hotels/similar                  |
| `getHotelReviewsSummary`        | `GET /hotels/reviews-summary`          | /hotels/reviews-summary          |
| `searchHotelsByUrl`             | `GET /hotels/search-by-url`            | /hotels/search-by-url            |
| `getHotelReviews`               | `GET /hotels/reviews`                  | /hotels/reviews                  |
| `getHotelPriceCalendar`         | `GET /hotels/price-calendar`           | /hotels/price-calendar           |
| `getHotelPriceInsight`          | `GET /hotels/price-insight`            | /hotels/price-insight            |
| `searchFlights`                 | `GET /flights/search`                  | /flights/search                  |
| `searchReturnFlights`           | `GET /flights/search-return`           | /flights/search-return           |
| `searchMultiCityFlights`        | `GET /flights/search-multi-city`       | /flights/search-multi-city       |
| `getFlightSearchFilters`        | `GET /flights/search-filters`          | /flights/search-filters          |
| `getFlightPriceInsight`         | `GET /flights/price-insight`           | /flights/price-insight           |
| `getFlightFlexibleDates`        | `GET /flights/flexible-dates`          | /flights/flexible-dates          |
| `searchCars`                    | `GET /cars/search`                     | /cars/search                     |
| `getCarDetails`                 | `GET /cars/details`                    | /cars/details                    |
| `searchPackages`                | `GET /packages/search`                 | /packages/search                 |
| `searchActivities`              | `GET /activities/search`               | /activities/search               |
| `getActivityDetails`            | `GET /activities/details`              | /activities/details              |
| `getActivityOffers`             | `GET /activities/offers`               | /activities/offers               |
| `getActivityReviews`            | `GET /activities/reviews`              | /activities/reviews              |
| `getDestinationDetails`         | `GET /destinations/details`            | /destinations/details            |
| `getDestinationBestTimeToVisit` | `GET /destinations/best-time-to-visit` | /destinations/best-time-to-visit |
| `getDestinationThingsToDo`      | `GET /destinations/things-to-do`       | /destinations/things-to-do       |
| `getDestinationTravelTips`      | `GET /destinations/travel-tips`        | /destinations/travel-tips        |
| `listTopDestinations`           | `GET /destinations/top`                | /destinations/top                |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
