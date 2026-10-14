# Vrbo API: Free API and MCP access

Vacation rental data from Vrbo. Search listings by destination, dates, or map area, plus property detail, amenities, photos, rates, availability, and reviews.

![Vrbo API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/933c8d6b-bb9c-48c6-88f6-dcc79cd1185e.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/vrbo2)
- [API overview and coverage](https://happyendpoint.com/library/vrbo-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `vrbo2.p.rapidapi.com`
- Category: travel
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Destination Search with Dates and Guests
- Coordinate and Map Bounds Search
- Search by URL
- Search Filter Discovery
- Location Autocomplete
- Neighborhood Lookup
- Full Property Details
- Amenities and Room Breakdown
- Full Photo Gallery
- Bookable Rates and Stay Totals
- Day-by-Day Availability Calendar
- Guest Reviews and AI Review Digest
- Host Profiles and Host Listings
- Cancellation and Refund Policies

## Source documentation notes

### API Features

| Feature               | What you can access                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Property Search       | Search vacation rentals by destination, dates, guests, price, filters, coordinates, or map bounds |
| Location Discovery    | Find destinations, region IDs, and neighborhoods for targeted rental searches                     |
| Property Details      | Retrieve listing information, amenities, photos, rooms, policies, and location data               |
| Reviews               | Access guest reviews, ratings, review summaries, and recurring guest feedback                     |
| Host Data             | Retrieve host profiles, Premier Host status, scores, languages, and other host information        |
| Cancellation Policies | Get date-specific refund schedules and cancellation terms                                         |
| URL-Based Data        | Search using Vrbo search URLs or retrieve listing data directly from a property URL               |

### Property Search

Search for vacation rentals using a variety of search methods:

- Search by destination and travel dates
- Search around a latitude/longitude coordinate
- Search within rectangular geographic bounds
- Apply destination-specific search filters
- Run searches directly from a Vrbo search URL
  This makes the API suitable for applications that need **vacation rental search**, **Vrbo property search**, accommodation discovery, or rental listing data.

### URL-Based Endpoints

The API supports URL-based data retrieval for developers who already have Vrbo URLs.
Use a Vrbo search URL to run a search or provide a property listing URL to retrieve listing details without manually extracting property identifiers.

### Available Endpoints

### Search

- `/search-by-coordinates` - Search rentals around a latitude/longitude
- `/search-by-bounds` - Search rentals within map boundaries
- `/search-filters` - Retrieve available destination filters
- `/search-by-url` - Search using a Vrbo search URL

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `vrbo-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                    | Request                             | Purpose                       |
| ------------------------------- | ----------------------------------- | ----------------------------- |
| `get_status`                    | `GET /status`                       | /status                       |
| `_locations-autocomplete`       | `GET /locations-autocomplete`       | /locations-autocomplete       |
| `_neighborhoods`                | `GET /neighborhoods`                | /neighborhoods                |
| `_search`                       | `GET /search`                       | /search                       |
| `_search-by-coordinates`        | `GET /search-by-coordinates`        | /search-by-coordinates        |
| `_search-by-bounds`             | `GET /search-by-bounds`             | /search-by-bounds             |
| `_search-filters`               | `GET /search-filters`               | /search-filters               |
| `_search-by-url`                | `GET /search-by-url`                | /search-by-url                |
| `_property-details`             | `GET /property-details`             | /property-details             |
| `_property-amenities`           | `GET /property-amenities`           | /property-amenities           |
| `_property-photos`              | `GET /property-photos`              | /property-photos              |
| `_property-prices`              | `GET /property-prices`              | /property-prices              |
| `_property-availability`        | `GET /property-availability`        | /property-availability        |
| `_property-reviews`             | `GET /property-reviews`             | /property-reviews             |
| `_property-host`                | `GET /property-host`                | /property-host                |
| `_property-rooms`               | `GET /property-rooms`               | /property-rooms               |
| `_property-location`            | `GET /property-location`            | /property-location            |
| `_property-policies`            | `GET /property-policies`            | /property-policies            |
| `_property-cancellation-policy` | `GET /property-cancellation-policy` | /property-cancellation-policy |
| `_property-reviews-summary`     | `GET /property-reviews-summary`     | /property-reviews-summary     |
| `_host-listings`                | `GET /host-listings`                | /host-listings                |
| `_property-details-by-url`      | `GET /property-details-by-url`      | /property-details-by-url      |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
