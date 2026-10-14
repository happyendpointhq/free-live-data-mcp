# Rent.com API: Free API and MCP access

Search Rent.com apartments and houses for rent in the US. Access listing details, floor plans, availability, rent estimates and neighborhood data.

![Rent.com API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/cc3f75fa-f5a1-4723-b642-2582fe6c793b.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/rent-com1)
- [API overview and coverage](https://happyendpoint.com/library/rent-com-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `rent-com1.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Apartment and house rental discovery across the US
- Rent comparisons using location, bedrooms and amenities
- Building and floor-plan inventory research
- Neighborhood enrichment with utility and walkability data

## Source documentation notes

| Feature                           | Details                                                                                                                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **US Coverage**                   | Nationwide across the 50 states and DC: states, cities, neighborhoods, ZIP codes, counties, school districts, schools, colleges, military bases and landmarks                                                                       |
| **Property Types**                | Apartments, houses, condos, townhouses, duplexes and triplexes                                                                                                                                                                      |
| **Six Ways to Search**            | Location, pasted Rent.com search URL, map point with a 1 to 50 mile radius, drawn polygon with holes, nationwide by filters alone, and community name lookup                                                                        |
| **17 Search Filters**             | Bedrooms, bathrooms, property type, pet policy, 72 amenities, rent range, size range, move-in date, keyword, deals, recently updated, page views, excluded listings, excluded city and a cheap-rent preference on location searches |
| **Seven Sort Orders**             | Relevance, price low to high, price high to low, fewest bedrooms, smallest size, random sampling and nearest first on location searches                                                                                             |
| **Large Result Pages**            | Up to 500 listings per page, with the matching floor plans shown on each row when you filter by beds, baths, rent, size or move-in date                                                                                             |
| **Floor Plans and Units**         | Every floor plan with its units: rent, size, deposit and availability date per unit                                                                                                                                                 |
| **Fees and Cost Estimates**       | Application, admin and broker fees where published; estimated monthly and move-in costs, per unit where available                                                                                                                   |
| **Buildings With Every Unit**     | Every unit listed at a multi-unit address, cheapest first, with photos and nearby schools                                                                                                                                           |
| **Rent Estimates**                | Minimum, mean, median and maximum market rent for a bedroom count at any US point, over the full pool of comparable homes, plus the nearest comparables                                                                             |
| **Utility Estimates**             | Relative electricity and gas usage estimates by ZIP code                                                                                                                                                                            |
| **Walk, Transit and Bike Scores** | Scores from 0 to 100 with sub-scores for groceries, dining, errands, parks, schools, shopping and culture                                                                                                                           |
| **Nearby Places**                 | Grocery stores, restaurants, schools, universities, transit, parks, gyms, banks, healthcare and shopping, nearest first; OpenStreetMap data under the ODbL                                                                          |
| **Listing Agent Contacts**        | Agent name, email, brokerage and MLS ID for agent-listed rentals                                                                                                                                                                    |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `rent-com-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                   | Request                        | Purpose                  |
| ------------------------------ | ------------------------------ | ------------------------ |
| `get_status`                   | `GET /status`                  | /status                  |
| `searchLocations`              | `GET /locations`               | /locations               |
| `getLocationDetails`           | `GET /location-details`        | /location-details        |
| `searchListings`               | `GET /search`                  | /search                  |
| `searchListingsByCoordinates`  | `GET /search-by-coordinates`   | /search-by-coordinates   |
| `searchListingsByPolygon`      | `GET /search-by-polygon`       | /search-by-polygon       |
| `searchListingsNationwide`     | `GET /search-nationwide`       | /search-nationwide       |
| `searchListingsByPropertyName` | `GET /search-by-property-name` | /search-by-property-name |
| `searchListingsByUrl`          | `GET /search-by-url`           | /search-by-url           |
| `listAgentContacts`            | `GET /agent-contacts`          | /agent-contacts          |
| `getListingDetails`            | `GET /listing-details`         | /listing-details         |
| `getListingByUrl`              | `GET /listing-by-url`          | /listing-by-url          |
| `getListingsByIds`             | `GET /listings-by-ids`         | /listings-by-ids         |
| `getSimilarListings`           | `GET /similar-listings`        | /similar-listings        |
| `getBuildingDetails`           | `GET /building-details`        | /building-details        |
| `getRentEstimate`              | `GET /rent-estimate`           | /rent-estimate           |
| `getUtilityEstimates`          | `GET /utility-estimates`       | /utility-estimates       |
| `getWalkScore`                 | `GET /walk-score`              | /walk-score              |
| `getNearbyPlaces`              | `GET /nearby-places`           | /nearby-places           |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
