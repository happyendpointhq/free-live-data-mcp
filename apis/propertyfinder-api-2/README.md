# PropertyFinder - Search by URL: Free API and MCP access

PropertyFinder API - pass any PropertyFinder search URL and get live UAE property listings back as structured JSON. No scraping to maintain.

![PropertyFinder - Search by URL source logo](https://rapidapi-prod-apis.s3.amazonaws.com/05b8ee7f-e368-448c-bd7c-92d355544b8d.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/propertyfinder1)
- [API overview and coverage](https://happyendpoint.com/library/propertyfinder-api-2)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `propertyfinder1.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- URL to JSON Conversion
- 500K+ Live Listings
- Agent and Broker Contacts
- Geo-Coordinates Included
- Pagination Support
- Redis Caching
- Sub-500ms Latency
- No Proxies Required

## Source documentation notes

- **500K+ Live Listings** (Rent, Buy, Commercial, New Projects)
- **Coverage:** Dubai, Abu Dhabi, Sharjah & all UAE
- ‍ **Includes Agents & Broker Contacts**
- **Fast responses with Redis caching**

### PropertyFinder UAE Data API (Search URL → JSON)

Unlock powerful, real-time real estate data from PropertyFinder UAE with a simple API call.  
No scraping headaches. No proxy management. No blocking issues.

### How It Works

1.  Copy any search URL from PropertyFinder (buy, rent, commercial, etc.)
2.  Pass the URL to our API endpoint
3.  Get fully parsed listing data in JSON format
    Supports:

- Filtered searches (price, beds, location, amenities)
- Any page number (pagination)
- Sorting and advanced query parameters

### What You Get

Each API response includes rich, structured data such as:

- Property details (price, size, bedrooms, bathrooms)
- Full location hierarchy with coordinates
- Amenities and furnishing status
- High-quality images and media
- Agent and broker information (contacts included)
- Listing metadata, verification, and availability
  Perfect for building:
- Real estate platforms
- Property comparison tools
- Investment dashboards
- Lead generation systems
- Market analytics tools

### Key Features

- **Precise Location Intelligence**  
  Accurate geo-coordinates and full location hierarchy for mapping, filtering, and advanced location-based insights.
- **Complete Property Details**  
  Comprehensive specs including size, amenities, furnishing, and layout for full listing clarity.
- ‍ **Verified Agent & Broker Data**  
  Trusted agent profiles and contact details for CRM integration and direct lead generation.
- **One-Click URL Data Extraction**  
  Input any PropertyFinder search URL and instantly receive structured JSON data for that exact results page.
- **Bot Protection Bypass Ready**  
  Handles anti-bot systems seamlessly so you don’t deal with blocks, captchas, or failed scraping attempts.
- **Dedicated Live Chat Support**  
  Get fast, real-time support for integration, scaling, or troubleshooting anytime.
- **Ultra-Fast Sub-500ms Latency**

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `propertyfinder-api-2`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID       | Request              | Purpose                      |
| ------------------ | -------------------- | ---------------------------- |
| `get_health`       | `GET /health`        | /health                      |
| `_property-search` | `GET /search-by-url` | Get properties by search URL |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
