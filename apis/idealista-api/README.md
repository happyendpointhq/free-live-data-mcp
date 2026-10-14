# Idealista API: Free API and MCP access

Idealista API for live property data across Spain, Italy, and Portugal - detailed listings, agent intelligence, and market analytics via RapidAPI.

![Idealista API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/aa2f871e-ea58-457e-b814-cbd2505753e1.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/idealista17)
- [API overview and coverage](https://happyendpoint.com/library/idealista-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `idealista17.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Advanced Property Search
- AI-Powered Smart Search
- Geo & ZIP-Based Search
- Comprehensive Property Intelligence
- Listing Analytics & Engagement
- Agent & Agency Intelligence

## Source documentation notes

| Info             | Details                              |
| ---------------- | ------------------------------------ |
| Countries        | Spain, Italy & Portugal              |
| Property Search  | Filtered listing search              |
| Property Details | Detailed listing data                |
| URL Search       | Search listings by URL               |
| URL Details      | Fetch details from listing URLs      |
| Geo Search       | ZIP, coordinates & reverse geocoding |
| Location Data    | Autocomplete & sublocations          |
| Smart Search     | Intent-based property search         |
| Listing Stats    | Stats, engagement & comments         |
| ‍ Agent Data     | Agent profiles & listings            |
| Response Format  | REST API + JSON                      |

### API Features

### Advanced Property Search

Search real-estate listings using flexible filters and structured search parameters.
Endpoints:

- `/property-search`
- `/property-search-by-url`
  Search by:
- city or region
- price range
- property type
- bedrooms & bathrooms
- rent or sale operation
- keywords
- pagination
- sorting options
- and more
  Perfect for:
- property portals
- lead generation tools
- investment scanners
- housing apps
- listing aggregators

### AI-Powered Smart Search

Use natural-language and intent-based property discovery to simplify complex searches.
Endpoint:

- `/smart-search`
  Great for:
- AI assistants
- conversational search
- recommendation engines
- smart housing applications
- semantic property discovery

### Geo & ZIP-Based Search

Search listings using ZIP codes, coordinates and map-based location data.
Endpoints:

- `/property-search-by-zip`
- `/property-search-by-coordinates`
- `/reverse-geocode`
  Ideal for:
- map applications
- relocation tools
- geo-analytics
- neighborhood discovery
- location intelligence platforms

### Reliability Features

- Smart caching
- Automatic retries
- Upstream monitoring
- Error normalization
- Stable JSON structures
- Ultra-low latency responses

### Example Use Cases

### Research & Data Projects

Collect and analyze structured housing-market information at scale.

### Example Response

```json
{
  "total": 12847,

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `idealista-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID | Request | Purpose |
| --- | --- | --- |
| `get_status` | `GET /status` | /status |
| `_auto-complete` | `GET /auto-complete` | /auto-complete |
| `_smart-search` | `GET /smart-search` | /smart-search |
| `_sublocations` | `GET /sublocations` | /sublocations |
| `_reverse-geocode` | `GET /reverse-geocode` | /reverse-geocode |
| `_property-search` | `GET /property-search` | /property-search |
| `_property-search-by-url` | `GET /property-search-by-url` | /property-search-by-url |
| `_property-search-by-coordinates` | `GET /property-search-by-coordinates` | /property-search-by-coordinates |
| `_property-search-by-zip` | `GET /property-search-by-zip` | /property-search-by-zip |
| `_property-details` | `GET /property-details` | /property-details |
| `_property-details-by-url` | `GET /property-details-by-url` | /property-details-by-url |
| `_listing-stats` | `GET /listing-stats` | /listing-stats |
| `_comments` | `GET /comments` | /comments |
| `_agent-details` | `GET /agent-details` | /agent-details |
| `_agent-listings` | `GET /agent-listings` | /agent-listings |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
```
