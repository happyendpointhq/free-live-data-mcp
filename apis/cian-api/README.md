# Cian API: Free API and MCP access

Access Cian real estate data for Russia: sale and rental listings, new builds, agents, price history, property valuations and daily rentals.

![Cian API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/813ea9b1-dfeb-4f08-810c-cfbe0e76c5b4.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/cian-ru)
- [API overview and coverage](https://happyendpoint.com/library/cian-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `cian-ru.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property search for Moscow, Saint Petersburg and other Russian regions
- Monitoring asking prices and listing price history
- Research into new developments, layouts and construction progress
- Agent, developer and daily rental comparison

## Source documentation notes

| Feature                 | Details                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage         | Russia: Moscow, Saint Petersburg, Moscow Oblast, Leningrad Oblast and every region and city Cian lists, searched by region or city, or nationwide                                                                                                                                                                                                                                                              |
| Property Types          | 21 property types in 3 groups: flats, rooms, beds and flat shares; houses, house parts, townhouses and land; offices, retail, warehouses, free-purpose premises, catering, garages, production, car service, running businesses, whole buildings, domestic services, commercial land and coworking                                                                                                             |
| Search Filters          | 111 filters on `searchOffers`: place ids, a map box or any polygon, metro walking time, distance from the MKAD, price and price per m², areas, floors, year built, building material, renovation, finishing, handover year, mortgage, owner and developer listings, auction lots, rent terms, suburban utilities, commercial specifics and coworking amenities; 10 sort orders; 28 full listing cards per page |
| Map Clusters            | Building-level map pins for any map view with the listing count, price label and listing ids of each building                                                                                                                                                                                                                                                                                                  |
| Search by URL           | Paste a cian.ru search results URL or a listing page URL and get the listing rows or the full listing card                                                                                                                                                                                                                                                                                                     |
| Full Listing Cards      | Specs, room areas, building and official housing-registry (BTI) record, land and utilities, commercial and coworking details, deposit, prepayment, commission, discount, photos and seller contacts                                                                                                                                                                                                            |
| Price and House History | Dated asking-price history of a listing with a change summary; past and current listings in the same building or in comparable buildings nearby, removed listings included                                                                                                                                                                                                                                     |
| New Build Complexes     | Residential complexes (ЖК) with houses and deadlines, per-room price tables, promotions, flat layouts and the flats behind each layout, construction progress photos, monthly price trend and sales volume                                                                                                                                                                                                     |
| Reliability Checks      | State-register (наш.дом.рф) check per house: original and current completion quarter, deadline shifts, escrow, permits and project declarations; reliable-complex badge and problem-object warnings                                                                                                                                                                                                            |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `cian-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                         | Request                                  | Purpose                            |
| ------------------------------------ | ---------------------------------------- | ---------------------------------- |
| `get_status`                         | `GET /status`                            | /status                            |
| `listRegions`                        | `GET /regions`                           | /regions                           |
| `searchLocations`                    | `GET /locations`                         | /locations                         |
| `geocodeAddress`                     | `GET /geocode`                           | /geocode                           |
| `listPlaceSuggestions`               | `GET /place-suggestions`                 | /place-suggestions                 |
| `listMetroStations`                  | `GET /metro-stations`                    | /metro-stations                    |
| `listDistricts`                      | `GET /districts`                         | /districts                         |
| `listHighways`                       | `GET /highways`                          | /highways                          |
| `listRailwayStations`                | `GET /railway-stations`                  | /railway-stations                  |
| `listCottageVillages`                | `GET /cottage-villages`                  | /cottage-villages                  |
| `listDevelopers`                     | `GET /developers`                        | /developers                        |
| `getAgent`                           | `GET /agent`                             | /agent                             |
| `listAgentReviews`                   | `GET /agent-reviews`                     | /agent-reviews                     |
| `searchOffers`                       | `GET /search`                            | /search                            |
| `getMapClusters`                     | `GET /map-clusters`                      | /map-clusters                      |
| `searchOffersByUrl`                  | `GET /search-by-url`                     | /search-by-url                     |
| `listAgentListings`                  | `GET /agent-listings`                    | /agent-listings                    |
| `getOffer`                           | `GET /offer`                             | /offer                             |
| `getOfferByUrl`                      | `GET /offer-by-url`                      | /offer-by-url                      |
| `getOfferPriceHistory`               | `GET /offer-price-history`               | /offer-price-history               |
| `listSimilarOffers`                  | `GET /similar-offers`                    | /similar-offers                    |
| `getHouseOfferHistory`               | `GET /house-offer-history`               | /house-offer-history               |
| `getOfferValuation`                  | `GET /offer-valuation`                   | /offer-valuation                   |
| `searchNewbuildings`                 | `GET /newbuildings`                      | /newbuildings                      |
| `getNewbuilding`                     | `GET /newbuilding`                       | /newbuilding                       |
| `listNewbuildingLayouts`             | `GET /newbuilding-layouts`               | /newbuilding-layouts               |
| `listNewbuildingLayoutOffers`        | `GET /newbuilding-layout-offers`         | /newbuilding-layout-offers         |
| `getNewbuildingConstructionProgress` | `GET /newbuilding-construction-progress` | /newbuilding-construction-progress |
| `getNewbuildingReliability`          | `GET /newbuilding-reliability`           | /newbuilding-reliability           |
| `listNewbuildingReviews`             | `GET /newbuilding-reviews`               | /newbuilding-reviews               |
| `listNewbuildingReviewAnswers`       | `GET /newbuilding-review-answers`        | /newbuilding-review-answers        |
| `listNewbuildingQuestions`           | `GET /newbuilding-questions`             | /newbuilding-questions             |
| `listNewbuildingQuestionAnswers`     | `GET /newbuilding-question-answers`      | /newbuilding-question-answers      |
| `getNewbuildingPriceTrend`           | `GET /newbuilding-price-trend`           | /newbuilding-price-trend           |
| `getDeveloper`                       | `GET /developer`                         | /developer                         |
| `searchDailyRent`                    | `GET /dailyrent-search`                  | /dailyrent-search                  |
| `getDailyRentAvailability`           | `GET /dailyrent-availability`            | /dailyrent-availability            |
| `listDailyRentReviews`               | `GET /dailyrent-reviews`                 | /dailyrent-reviews                 |
| `getDailyRentListing`                | `GET /dailyrent-listing`                 | /dailyrent-listing                 |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
