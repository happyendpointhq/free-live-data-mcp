# Fotocasa API: Free API and MCP access

Fotocasa scraper API for Spain - 1.5M+ property listings across the mainland, Balearics and Andorra, with prices, photos, and granular filters.

![Fotocasa API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/42b173bd-1b93-4334-b2e6-9c5dcd40ec12.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/fotocasa3)
- [API overview and coverage](https://happyendpoint.com/library/fotocasa-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `fotocasa3.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Property Search
- Location Autocomplete
- Detailed Listings
- Market Analytics
- Spain and Andorra Coverage
- Balearic Islands
- Real-Time Updates
- RESTful JSON API

## Source documentation notes

### More than 1.5million properties

### Key Features:

- Property Search Suggestions
- Detailed Property Listings
- Comprehensive Property Information
- Real-time Data Updates
- Location-based Searches

### Comprehensive Coverage

Access millions of property listings across Spain's most desirable locations, from Barcelona's urban centers to Costa del Sol's beachfront properties. Our database covers all property types, including residential, commercial, and vacation rentals.

### Precise Search Capabilities

Implement powerful search functionality with our suggestion engine, helping users find exactly what they're looking for. Filter by location, price, property type, and more.

### Use Cases:

- Real Estate Platforms & Applications
- Market Analysis & Research
- Property Valuation Tools
- Investment Portfolio Management

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `fotocasa-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID           | Request                 | Purpose           |
| ---------------------- | ----------------------- | ----------------- |
| `get_health`           | `GET /health`           | /health           |
| `get_suggestions`      | `GET /suggestions`      | /suggestions      |
| `get_searchads`        | `GET /searchads`        | /searchads        |
| `get_property_details` | `GET /property-details` | /property-details |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
