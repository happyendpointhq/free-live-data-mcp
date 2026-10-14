# Emlakjet Turkey API: Free API and MCP access

Turkey real estate data from Emlakjet. Search property listings, get details and price history, plus nearby places, demographics, agencies, and new projects.

![Emlakjet Turkey API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/1edd23e2-4b37-430e-a859-61687c5ee3b1.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/emlakjet)
- [API overview and coverage](https://happyendpoint.com/library/emlakjet-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `emlakjet.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- Search by URL
- Listing Details
- Similar Listings
- Price History
- Nearby Places
- Area Demographics
- Province, District, and Neighborhood Data
- Location Autocomplete
- Search Filters and Categories
- Agency Profiles and Listings
- New Construction Projects

## Source documentation notes

Access structured real estate data from one of Türkiye's largest property marketplaces. Search listings with advanced filters, retrieve complete property details, analyze price history, discover nearby amenities, explore neighborhood demographics, browse agencies and new construction projects, and access the complete location taxonomy powering searches.
| Feature | Details |
|---------|---------|
| **Coverage** | Türkiye (All 81 provinces) |
| **Property Types** | Apartments, Houses, Villas, Land, Commercial, Residences, Buildings, and more |
| **Search** | Advanced property search with rich filters and pagination |
| **Price Intelligence** | Historical price changes for individual listings |
| **Nearby Places** | Schools, hospitals, transport, shopping, and other points of interest |
| **Area Insights** | Neighborhood demographics and area information |
| **Location Data** | Provinces, districts, neighborhoods, autocomplete, search taxonomy |
| **Agencies & Projects** | Agency profiles, listings, and new construction projects |
| **Response Format** | JSON |

### Features

- Advanced property search with dozens of filtering options
- Search directly from an existing Emlakjet search URL
- Retrieve complete property details by listing ID or URL
- View historical price changes for listings
- Find nearby schools, hospitals, transportation, shopping, and other amenities
- Access neighborhood demographic information
- Discover Turkish provinces, districts, and neighborhoods
- Location autocomplete for building search experiences
- Complete category and filter taxonomy
- Search real estate agencies and offices
- Retrieve agency profiles and active listings
- Search new housing projects and developers
- Retrieve detailed project information

### Available Endpoints

### Search

- `/search-property`
- `/search-by-url`

### Common Use Cases

- Real estate websites and marketplaces
- Property search platforms
- Investment analysis tools
- Property valuation systems
- Market research dashboards
- Lead generation platforms
- CRM and brokerage software
- PropTech applications
- AI-powered real estate assistants
- Location intelligence and analytics
- Housing market monitoring

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `emlakjet-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID               | Request                        | Purpose                  |
| -------------------------- | ------------------------------ | ------------------------ |
| `get_status`               | `GET /status`                  | /status                  |
| `_search-property`         | `GET /search-property`         | /search-property         |
| `_search-by-url`           | `GET /search-by-url`           | /search-by-url           |
| `_property-details`        | `GET /property-details`        | /property-details        |
| `_property-details-by-url` | `GET /property-details-by-url` | /property-details-by-url |
| `_similar-listings`        | `GET /similar-listings`        | /similar-listings        |
| `_price-history`           | `GET /price-history`           | /price-history           |
| `_nearby-places`           | `GET /nearby-places`           | /nearby-places           |
| `_area-demographics`       | `GET /area-demographics`       | /area-demographics       |
| `_locations-autocomplete`  | `GET /locations-autocomplete`  | /locations-autocomplete  |
| `_cities`                  | `GET /cities`                  | /cities                  |
| `_districts`               | `GET /districts`               | /districts               |
| `_neighborhoods`           | `GET /neighborhoods`           | /neighborhoods           |
| `_categories`              | `GET /categories`              | /categories              |
| `_search-filters`          | `GET /search-filters`          | /search-filters          |
| `_agents-autocomplete`     | `GET /agents-autocomplete`     | /agents-autocomplete     |
| `_agency-listings`         | `GET /agency-listings`         | /agency-listings         |
| `_project-details`         | `GET /project-details`         | /project-details         |
| `_project-search`          | `GET /project-search`          | /project-search          |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
