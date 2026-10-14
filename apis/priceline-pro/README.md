# Priceline Pro API: Free API and MCP access

Priceline API for travel data - real-time hotel rates and availability, room-level pricing, flight search, and car rental rates from one endpoint.

![Priceline Pro API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/2b29545f-d55b-4c9f-94cf-c0d73015628e.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/priceline-api-pro/playground)
- [API overview and coverage](https://happyendpoint.com/library/priceline-pro)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `priceline-api-pro.p.rapidapi.com`
- Category: travel
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Hotel Search
- Hotel Details and Rooms
- Real-Time Room Pricing
- Flight Search
- Car Rentals
- Location Autocomplete
- Real-Time Availability
- Fast and Reliable

## Source documentation notes

Unlock the full power of Priceline.com's travel data with the **Priceline API Pro**, the most advanced and reliable API on the market.
We built this API for developers who are tired of slow, incomplete, or abandoned APIs. Get the fast, stable, and comprehensive data you need to build amazing travel applications.

### Power Your Application with Our Endpoints:

Our API provides all the tools you need to succeed:

- `autocomplete-location-search`: Fast, predictive location searching.
- `hotels-search`: A powerful engine to find hotels by any criteria.
- `hotel-details`: Pull rich details for any hotel, including photos, amenities, and policies.
- `cars`: A comprehensive endpoint for searching car rentals.
- `flight`: The endpoint for all your flight search and data needs.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `priceline-pro`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                      | Request                               | Purpose                                             |
| --------------------------------- | ------------------------------------- | --------------------------------------------------- |
| `_auto-complete-location`         | `GET /auto-complete-location`         | Get Location Suggestion                             |
| `_advance-auto-complete-location` | `GET /advance-auto-complete-location` | Search for location suggestion with advance control |
| `_hotels-search`                  | `GET /hotels-search`                  | Search hotels with customized search                |
| `_hotel-details`                  | `GET /hotel-details`                  | Get Hotel details from hotel ID                     |
| `_hotel-room-and-price-details`   | `GET /hotel-room-and-price-details`   | Get hotel rooms and price details                   |
| `_hotel-reviews-by-hotelid`       | `GET /hotel-reviews-by-hotelid`       | Get hotel reviews by hotelID                        |
| `_search-rental-car`              | `GET /search-rental-car`              | Search for rental car with location and time        |
| `_search-flights`                 | `GET /search-flights`                 | Search for flight (one-way and round-trip)          |
| `_round-trip-search-flights`      | `GET /round-trip-search-flights`      | Search for Round Trip Flights                       |
| `get_status`                      | `GET /status`                         | /status                                             |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
