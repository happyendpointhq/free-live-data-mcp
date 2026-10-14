# Zoopla API: Free API and MCP access

Access Zoopla UK property listings, sold house prices, valuations, estate agents and postcode or UPRN lookups for property research tools.

![Zoopla API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/a569693a-0075-4ca4-bd49-e5a901024d46.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/zoopla8)
- [API overview and coverage](https://happyendpoint.com/library/zoopla-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `zoopla8.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- UK property portals and listing comparison tools
- Sold house price research by area and property type
- Address and UPRN enrichment for property databases
- Estate agent and new development market research

## Source documentation notes

| Feature                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UK Coverage**               | England, Scotland, Wales and Northern Ireland, plus the Isle of Man and the Channel Islands; search by town, city, county, area, postcode district, full postcode, street, station or school                                                                                                                                                                                                                                    |
| **33 Search Filters**         | Price with weekly, monthly or yearly rent units, bedrooms, bathrooms, floor area, property type, tenure, furnishing, rental term, date added, keywords, smart tags, must-have features, buyer incentive schemes, radius, chain free, available now, under offer and let agreed, auction, retirement, shared ownership, shared and student accommodation, reduced price, bills included, pets allowed, new build and development |
| **UPRN Property Records**     | Any UK home by UPRN or street address: sale and rent estimates with a confidence range, monthly estimate history, every recorded sale, past adverts, live listings, EPC rating, floor area and year built                                                                                                                                                                                                                       |
| **Sold Prices**               | Recorded sale prices and dates from HM Land Registry (England and Wales) and Registers of Scotland, by place or map box, from 1995, filtered by date window, property type, bedrooms and bathrooms                                                                                                                                                                                                                              |
| **Market Data**               | Buyer demand by price band, local selling time, sales volume and average price paid over six periods from 3 months to 20 years by property type, and local house price commentary by postcode district                                                                                                                                                                                                                          |
| **URL Front Doors**           | Paste a Zoopla search page or listing page address and get the listings or the full listing record; up to 50 listing addresses in one request                                                                                                                                                                                                                                                                                   |
| **Batch Lookups**             | Up to 50 listings by ID or URL, up to 25 properties by UPRN or by address, and up to 25 agent branches by ID in one request                                                                                                                                                                                                                                                                                                     |
| ‍ **Estate Agents Directory** | Estate, letting and commercial agents by place or nearest a map point, with phone, email, opening hours, memberships, live stock with average asking prices, and every live listing of a branch                                                                                                                                                                                                                                 |
| **New Home Developments**     | New-build developments by place with builder, price and bedroom range, and full development records with up to 24 homes, photos, video and nearby schools and stations                                                                                                                                                                                                                                                          |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `zoopla-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                   | Request                             | Purpose                       |
| ------------------------------ | ----------------------------------- | ----------------------------- |
| `getServiceStatus`             | `GET /status`                       | /status                       |
| `searchLocations`              | `GET /locations`                    | /locations                    |
| `getAddressesByPostcode`       | `GET /addresses-by-postcode`        | /addresses-by-postcode        |
| `getLocationByCoordinates`     | `GET /location-by-coordinates`      | /location-by-coordinates      |
| `searchListings`               | `GET /search`                       | /search                       |
| `searchListingsByCoordinates`  | `GET /search-by-coordinates`        | /search-by-coordinates        |
| `searchListingsByUrl`          | `GET /search-by-url`                | /search-by-url                |
| `getAgentListings`             | `GET /agent-listings`               | /agent-listings               |
| `listSmartTags`                | `GET /smart-tags`                   | /smart-tags                   |
| `getListingDetails`            | `GET /listing-details`              | /listing-details              |
| `getListingByUrl`              | `GET /listing-by-url`               | /listing-by-url               |
| `getListingsByIds`             | `GET /listings-by-ids`              | /listings-by-ids              |
| `getListingsByUrls`            | `GET /listings-by-urls`             | /listings-by-urls             |
| `getSimilarListings`           | `GET /similar-listings`             | /similar-listings             |
| `getSimilarListingsByListing`  | `GET /similar-listings-by-listing`  | /similar-listings-by-listing  |
| `getPropertyDetails`           | `GET /property-details`             | /property-details             |
| `getPropertiesByUprns`         | `GET /properties-by-uprns`          | /properties-by-uprns          |
| `getPropertiesByAddresses`     | `GET /properties-by-addresses`      | /properties-by-addresses      |
| `getPropertyByAddress`         | `GET /property-by-address`          | /property-by-address          |
| `getPropertyMarketInsights`    | `GET /property-market-insights`     | /property-market-insights     |
| `getComparableListings`        | `GET /comparable-listings`          | /comparable-listings          |
| `getValuationAgents`           | `GET /valuation-agents`             | /valuation-agents             |
| `searchSoldPrices`             | `GET /sold-prices`                  | /sold-prices                  |
| `searchSoldPricesByBounds`     | `GET /sold-prices-by-bounds`        | /sold-prices-by-bounds        |
| `getAreaMarketActivity`        | `GET /area-market-activity`         | /area-market-activity         |
| `getOutcodeMarketInsights`     | `GET /outcode-market-insights`      | /outcode-market-insights      |
| `searchAgents`                 | `GET /agents`                       | /agents                       |
| `getAgentsNearCoordinates`     | `GET /agents-near`                  | /agents-near                  |
| `getAgentDetails`              | `GET /agent-details`                | /agent-details                |
| `getAgentsByIds`               | `GET /agents-by-ids`                | /agents-by-ids                |
| `searchNewHomeDevelopments`    | `GET /new-home-developments`        | /new-home-developments        |
| `getNewHomeDevelopmentDetails` | `GET /new-home-development-details` | /new-home-development-details |
| `getEvChargingStations`        | `GET /ev-charging-stations`         | /ev-charging-stations         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
