# Turo Car Rental Data API: Free API and MCP access

Turo car rental data - search vehicles, daily prices, availability calendars, itemised trip quotes, hosts, and reviews.

![Turo Car Rental Data API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/b5bd26ee-4b8f-4098-aee1-df25ed52c89d.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/turo-com-api)
- [API overview and coverage](https://happyendpoint.com/library/turo-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `turo-com-api.p.rapidapi.com`
- Category: travel
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Search by Coordinate, Map Area, or Pick-Up Location
- Search by City or Airport Name
- Search by Turo URL
- Price, Make, Model, Year, and Feature Filters
- Make, Model, and Filter Vocabularies
- Full Vehicle Records by ID or URL
- Equipment, Fuel Economy, and Electric Range
- Day-by-Day Price Calendars
- Exact-Window Availability Checks
- Booked and Free Calendar Intervals
- Itemised Trip Quotes with Fees and Taxes
- Bulk Quotes for up to 25 Vehicles
- Vehicle Reviews and Reputation Summaries
- Host Profiles, Fleets, and Guest Feedback
- US, Canada, UK, Australia, and France Markets

## Source documentation notes

| Feature          | Details                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage  | Supported Turo markets with country, coordinate, map-boundary, pick-up-location, and place-name search                    |
| Vehicle Search   | Location, trip dates, price, make, model, year, vehicle type, features, seats, host status, mileage, and sorting controls |
| Vehicle Records  | Specifications, photos, location, host, rates, ratings, rules, equipment, fuel economy, and electric range                |
| Bulk Trip Quotes | Compare itemised prices for up to 25 vehicles over one shared trip window                                                 |
| Hosts & Reviews  | Member profiles, host fleets, guest feedback, driver history, vehicle reviews, and reputation summaries                   |
| URL Workflows    | Run searches and retrieve vehicle details directly from public Turo URLs                                                  |
| API Type         | Fast REST API via RapidAPI                                                                                                |

### Key Features

- Search cars by coordinate, map bounds, pick-up location, country, place name, or Turo URL
- Apply filters for price, vehicle identity and type, year, seats, features, fuel and engine attributes, mileage, host status, and trip dates
- Discover valid filter values, manufacturers, models, cities, airports, and points of interest
- Retrieve full vehicle records from an ID or public listing URL
- Inspect equipment, mechanical specifications, fuel economy, and electric range
- Confirm whether a vehicle is available for an exact trip window
- Calculate one itemised trip quote or compare up to 25 vehicles at once
- Review vehicle reputation, guest reviews, host feedback, profiles, and fleets

### Available Data

- Search results and total match counts
- Search-location metadata and price histograms when available
- Vehicle IDs, makes, models, years, categories, types, photos, ratings, badges, and trip counts
- Daily rates, date-specific quote summaries, fees, taxes, and trip totals
- Vehicle specifications, equipment, fuel economy, battery range, location, and rental rules
- Availability decisions, calendar intervals, and daily price calendars
- Host IDs, biographies, badges, languages, history, and listed vehicles
- Vehicle reviews, host feedback, driver reviews, ratings, and reputation summaries

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `turo-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                     | Request                              | Purpose                        |
| -------------------------------- | ------------------------------------ | ------------------------------ |
| `get_status`                     | `GET /status`                        | /status                        |
| `_search`                        | `GET /search`                        | /search                        |
| `_search-by-place`               | `GET /search-by-place`               | /search-by-place               |
| `_search-by-url`                 | `GET /search-by-url`                 | /search-by-url                 |
| `_search-filters`                | `GET /search-filters`                | /search-filters                |
| `_vehicle-makes`                 | `GET /vehicle-makes`                 | /vehicle-makes                 |
| `_vehicle-models`                | `GET /vehicle-models`                | /vehicle-models                |
| `_location-autocomplete`         | `GET /location-autocomplete`         | /location-autocomplete         |
| `_location-details`              | `GET /location-details`              | /location-details              |
| `_vehicle-details`               | `GET /vehicle-details`               | /vehicle-details               |
| `_vehicle-details-by-url`        | `GET /vehicle-details-by-url`        | /vehicle-details-by-url        |
| `_vehicle-features`              | `GET /vehicle-features`              | /vehicle-features              |
| `_vehicle-daily-pricing`         | `GET /vehicle-daily-pricing`         | /vehicle-daily-pricing         |
| `_vehicle-availability`          | `GET /vehicle-availability`          | /vehicle-availability          |
| `_vehicle-availability-calendar` | `GET /vehicle-availability-calendar` | /vehicle-availability-calendar |
| `_vehicle-reviews`               | `GET /vehicle-reviews`               | /vehicle-reviews               |
| `_vehicle-reputation`            | `GET /vehicle-reputation`            | /vehicle-reputation            |
| `_host-details`                  | `GET /host-details`                  | /host-details                  |
| `_host-vehicles`                 | `GET /host-vehicles`                 | /host-vehicles                 |
| `_host-guest-feedback`           | `GET /host-guest-feedback`           | /host-guest-feedback           |
| `_driver-reviews`                | `GET /driver-reviews`                | /driver-reviews                |
| `_trip-quote`                    | `GET /trip-quote`                    | /trip-quote                    |
| `_bulk-trip-quotes`              | `GET /bulk-trip-quotes`              | /bulk-trip-quotes              |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
