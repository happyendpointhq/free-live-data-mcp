# Realtor.com Data API: Free API and MCP access

US property data from Realtor.com. Search homes for sale, rent, and sold, get full listing detail, valuations, agents, schools, mortgage rates, and market stats.

![Realtor.com Data API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/d48a460d-0acb-4b9c-96a7-ec994cf022bf.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/realtor-com-data-api)
- [API overview and coverage](https://happyendpoint.com/library/realtor-com-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `realtor-com-data-api.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- For Sale, For Rent, and Sold Search
- Off-Market and Public Records Search
- Coordinate, Polygon, and Commute Search
- Search by URL
- Full Listing Details
- Details by Address
- Similar Homes and Comps
- RealEstimate Property Valuation
- Environmental and Climate Risk
- New Construction Inventory
- Agent Directory, Reviews, and Listings
- Schools and School Districts
- Live Mortgage and Lender Rates
- Market Hotness and Geo Statistics
- Neighborhood Guides and Map Boundaries

## Source documentation notes

|--------------|---------------------------------------------------------|
| **Data Updated** | **Real Time Data** |
| **Search Methods** | Location • Address • ZIP • Coordinates • Polygon • Commute • Owner • Realtor.com URL |
| **Property Data** | Details • Photos • Price History • Similar Homes • Environmental Risk |
| **Additional Data** | Home Valuations • Agents • Schools • Mortgage Rates • Neighborhoods |

### Search Properties

Search properties using multiple methods.
Supported searches include:

- Homes for rent
- Recently sold homes
- Off-market properties
- New construction
- Location autocomplete
- Search by address
- Search by coordinates
- Radius search
- Polygon map search
- Commute-time search
- Search by owner
- Search using a Realtor.com search URL
  Powerful filters include:
- Price
- Bedrooms
- Bathrooms
- Property type
- Square footage
- Lot size
- Year built
- Listing status
- Open houses
- New listings
- Price reductions
- Keywords
- And many additional Realtor.com filters

### Common Use Cases

Perfect for building:

- Real estate websites
- Property search platforms
- Home valuation tools
- Investment platforms
- Rental marketplaces
- CRM systems
- Lead generation tools
- Agent directories
- School search applications
- Mortgage calculators
- GIS and mapping applications
- Property comparison tools

### Endpoints

### Search

- Location Autocomplete
- Property Search
- Properties for Rent
- Properties Sold
- Search by Coordinates
- Search by Polygon
- Search by Commute
- New Construction
- Records by Owner
- Full Property Search

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `realtor-com-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                   | Request                            | Purpose                      |
| ------------------------------ | ---------------------------------- | ---------------------------- |
| `get_status`                   | `GET /status`                      | /status                      |
| `_locations-autocomplete`      | `GET /locations-autocomplete`      | /locations-autocomplete      |
| `_search`                      | `GET /search`                      | /search                      |
| `_properties-for-sale`         | `GET /properties-for-sale`         | /properties-for-sale         |
| `_properties-for-rent`         | `GET /properties-for-rent`         | /properties-for-rent         |
| `_properties-sold`             | `GET /properties-sold`             | /properties-sold             |
| `_search-by-coordinates`       | `GET /search-by-coordinates`       | /search-by-coordinates       |
| `_search-by-polygon`           | `GET /search-by-polygon`           | /search-by-polygon           |
| `_search-by-commute`           | `GET /search-by-commute`           | /search-by-commute           |
| `_new-construction`            | `GET /new-construction`            | /new-construction            |
| `_records-by-owner`            | `GET /records-by-owner`            | /records-by-owner            |
| `_property-search`             | `GET /property-search`             | /property-search             |
| `_search-by-url`               | `GET /search-by-url`               | /search-by-url               |
| `_property-details`            | `GET /property-details`            | /property-details            |
| `_property-details-by-url`     | `GET /property-details-by-url`     | /property-details-by-url     |
| `_similar-homes`               | `GET /similar-homes`               | /similar-homes               |
| `_property-environment`        | `GET /property-environment`        | /property-environment        |
| `_property-details-by-address` | `GET /property-details-by-address` | /property-details-by-address |
| `_property-valuation`          | `GET /property-valuation`          | /property-valuation          |
| `_agents-search`               | `GET /agents-search`               | /agents-search               |
| `_agent-details`               | `GET /agent-details`               | /agent-details               |
| `_agent-reviews`               | `GET /agent-reviews`               | /agent-reviews               |
| `_agent-recommendations`       | `GET /agent-recommendations`       | /agent-recommendations       |
| `_agent-feedback`              | `GET /agent-feedback`              | /agent-feedback              |
| `_agent-listings`              | `GET /agent-listings`              | /agent-listings              |
| `_schools-search`              | `GET /schools-search`              | /schools-search              |
| `_school`                      | `GET /school`                      | /school                      |
| `_school-district`             | `GET /school-district`             | /school-district             |
| `_mortgage-rates`              | `GET /mortgage-rates`              | /mortgage-rates              |
| `_mortgage-calculator`         | `GET /mortgage-calculator`         | /mortgage-calculator         |
| `_mortgage-lender-rates`       | `GET /mortgage-lender-rates`       | /mortgage-lender-rates       |
| `_market-hotness`              | `GET /market-hotness`              | /market-hotness              |
| `_neighborhood-info`           | `GET /neighborhood-info`           | /neighborhood-info           |
| `_geo-statistics`              | `GET /geo-statistics`              | /geo-statistics              |
| `_commute-time`                | `GET /commute-time`                | /commute-time                |
| `_market-feed`                 | `GET /market-feed`                 | /market-feed                 |
| `_map-boundary`                | `GET /map-boundary`                | /map-boundary                |
| `_enums`                       | `GET /enums`                       | /enums                       |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
