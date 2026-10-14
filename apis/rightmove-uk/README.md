# Rightmove UK API: Free API and MCP access

Rightmove API for UK property data - sale and rental listings, sold price history, new homes, and student accommodation, with full filtering.

![Rightmove UK API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/efa96cc5-4b02-4a72-9328-348c1feae435.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/rightmove-uk-real-estate-data/)
- [API overview and coverage](https://happyendpoint.com/library/rightmove-uk)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `rightmove-uk-real-estate-data.p.rapidapi.com`
- Category: real-estate
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Sales Listings
- Rental Listings
- Sold Price History
- New Homes
- Student Housing
- Commercial Properties
- Estate Agent Search
- Location Autocomplete
- Property Detail Pages

## Source documentation notes

Tired of slow, incomplete, and unreliable property data APIs? You've come to the right place. Our **Rightmove UK Data API** is built from the ground up for speed, accuracy, and ease of use, giving you the power to integrate the UK's largest property dataset into your applications seamlessly.
We scrape and structure Rightmove's public data in real-time, so you can be confident you're always working with the freshest information available.

### **Our Core Endpoints**

We provide a full suite of endpoints to cover every need:

- `auto-complete`: Get location and keyword suggestions to power your search bars.
- `property-to-rent`: Search for residential properties available for rent.
- `student-property-to-rent`: A dedicated endpoint for finding student accommodation.
- `commercial/properties-to-rent`: Find commercial properties (offices, retail) for rent.
- `commercial/properties-to-sale`: Find commercial properties available for purchase.
- `house-prices/sold-house-prices`: Access historical data on sold property prices in an area.
- `sold-house-prices/details`: Get detailed information about a specific historical sale.
- `property-details`: Retrieve all available details for a single property listing.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `rightmove-uk`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                         | Request                               | Purpose                                          |
| ------------------------------------ | ------------------------------------- | ------------------------------------------------ |
| `Auto_Complete`                      | `GET /auto-complete`                  | Get Location Suggestion                          |
| `Property_for_Sale`                  | `GET /property-for-sale`              | Get properties listed for sale                   |
| `New_Home_for_Sale`                  | `GET /new-home-for-sale`              | Get new homes listed for sale                    |
| `Property_to_Rent`                   | `GET /property-to-rent`               | Get properties available to rent                 |
| `Student_Property_to_Rent`           | `GET /student-property-to-rent`       | Get student properties available to rent         |
| `Commercial_Property_to_Rent`        | `GET /commercial-properties-to-rent`  | Get commercial properties available to rent      |
| `get_commercial_properties_for_sale` | `GET /commercial-properties-for-sale` | Get commercial properties available for sale     |
| `get_property_details`               | `GET /property-details`               | Get detailed information for a specific property |
| `get_estate_agents`                  | `GET /estate-agents`                  | Get estate agents in a specific area             |
| `get_sold_house_prices`              | `GET /sold-house-prices`              | Get sold house prices in an area                 |
| `get_sold_house_prices_details`      | `GET /sold-house-prices-details`      | Get detailed information for a sold property     |
| `get_status`                         | `GET /status`                         | /status                                          |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
