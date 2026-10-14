# Allhomes Australia API: Free API and MCP access

Allhomes property data for Canberra, ACT and NSW. Listings, past sales, valuations, land values, auctions, suburbs, agents, and schools.

![Allhomes Australia API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/287b206c-3ccd-4500-bd7c-38f1943dc4bd.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/allhomes-com-au-api)
- [API overview and coverage](https://happyendpoint.com/library/allhomes-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `allhomes-com-au-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- For Sale, Rent, Share, and New Development Search
- Search by Allhomes URL
- Map Viewport and Coordinate Search
- Property Details by Listing, Address, or URL
- Sale and Rental History by Address
- Automated Valuation and Rental Yield
- Comparable Sold and Leased Homes
- ACT Unimproved Land Values
- Suburb, District, and Street Profiles
- Weekly Auction Results and Clearance Rates
- Locality Boundaries and Median Prices
- Agent and Agency Profiles with Reviews
- School Catchments and Nearby Amenities
- Property News Feeds

## Source documentation notes

| Feature                | Details                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| Market Coverage        | Canberra and ACT, southern NSW, and searchable localities across Australia                             |
| Listing Markets        | Residential sale, rental, share and new-development listings                                           |
| Search Filters         | Bedrooms, bathrooms, parking, property type, sale method, availability, amenities and geographic scope |
| Property Records       | Listing, address and URL entry points with features, campaign details and media                        |
| Value and Transactions | Sale and rent estimates, comparable homes, past transfers and ACT land values                          |
| Local Research         | Suburb and district profiles, boundaries, census, median sale series and auctions                      |
| Agent Data             | Local agent and agency directories, profiles, activity and customer reviews                            |
| API Type               | Fast REST API via RapidAPI                                                                             |

Explore homes and local markets across Canberra, the ACT and NSW. Search live sale and rental listings, research addresses and past transactions, compare suburbs and auctions, and find agents, schools and nearby amenities through focused endpoints.

### Key Features

- Search residential listings across four markets with locality, property and amenity filters.
- Start from an Allhomes search or property URL and recover usable ids and results.
- Research properties by listing id or stable address id, including off-market homes.
- Read sale and rental history separately from current property details.
- Compare estimates, nearby transactions and ACT unimproved land values.
- Explore suburb and district profiles, auctions, schools and coordinate-based amenities.
- Find agents and agencies with locality activity, full profiles and reviews.

### Available Data

Listings include addresses, features, advertising details, media and inspection times. Property records include physical attributes, parcel information, available estimates and marketing agents. Market research covers past transfers, comparable sales, median series, census, auction outcomes and locality boundaries. Agent, school, amenity and news records support a broader local-market view.

### `/locations`

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `allhomes-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `get_status`              | `GET /status`                 | /status                 |
| `searchLocations`         | `GET /locations`              | /locations              |
| `getLocality`             | `GET /locality`               | /locality               |
| `listLocalitiesNearby`    | `GET /localities-nearby`      | /localities-nearby      |
| `listLocalitiesInBounds`  | `GET /localities-in-bounds`   | /localities-in-bounds   |
| `getLocalityBoundary`     | `GET /locality-boundary`      | /locality-boundary      |
| `listStreets`             | `GET /streets`                | /streets                |
| `searchListings`          | `GET /listings`               | /listings               |
| `countListings`           | `GET /listings-count`         | /listings-count         |
| `searchListingsByUrl`     | `GET /listings-by-url`        | /listings-by-url        |
| `searchListingsInBounds`  | `GET /listings-in-bounds`     | /listings-in-bounds     |
| `listSimilarListings`     | `GET /similar-listings`       | /similar-listings       |
| `listFeaturedListings`    | `GET /featured-listings`      | /featured-listings      |
| `getProperty`             | `GET /property`               | /property               |
| `getPropertyHistory`      | `GET /property-history`       | /property-history       |
| `getPropertyByAddressId`  | `GET /property-by-address-id` | /property-by-address-id |
| `getPropertyByUrl`        | `GET /property-by-url`        | /property-by-url        |
| `listPropertyPhotos`      | `GET /property-photos`        | /property-photos        |
| `getPropertyValuation`    | `GET /property-valuation`     | /property-valuation     |
| `listPropertyComparables` | `GET /property-comparables`   | /property-comparables   |
| `getPropertyLandValues`   | `GET /property-land-values`   | /property-land-values   |
| `listSalesHistory`        | `GET /sales-history`          | /sales-history          |
| `listNearbySales`         | `GET /nearby-sales`           | /nearby-sales           |
| `getSuburbProfile`        | `GET /suburb-profile`         | /suburb-profile         |
| `getDistrictProfile`      | `GET /district-profile`       | /district-profile       |
| `getStreetProfile`        | `GET /street-profile`         | /street-profile         |
| `listSurroundingSuburbs`  | `GET /surrounding-suburbs`    | /surrounding-suburbs    |
| `getAuctionResults`       | `GET /auction-results`        | /auction-results        |
| `listAgents`              | `GET /agents`                 | /agents                 |
| `listAgencies`            | `GET /agencies`               | /agencies               |
| `getAgent`                | `GET /agent`                  | /agent                  |
| `getAgency`               | `GET /agency`                 | /agency                 |
| `listAgentReviews`        | `GET /agent-reviews`          | /agent-reviews          |
| `listAgencyReviews`       | `GET /agency-reviews`         | /agency-reviews         |
| `getSchool`               | `GET /school`                 | /school                 |
| `getSchoolBySlug`         | `GET /school-by-slug`         | /school-by-slug         |
| `listNearbyAmenities`     | `GET /nearby-amenities`       | /nearby-amenities       |
| `listLatestNews`          | `GET /news-latest`            | /news-latest            |
| `listNewsArticles`        | `GET /news-articles`          | /news-articles          |
| `getNewsArticle`          | `GET /news-article`           | /news-article           |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
