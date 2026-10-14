# iGraal Cashback Coupons API: Free API and MCP access

iGraal and Shoop cashback and coupon data for France, Germany, Spain and Poland. Merchants, codes, cashback rates and featured offers.

![iGraal Cashback Coupons API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/43e4f0db-993e-4e57-b31d-b164bef1b7ea.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/igraal-cashback-coupons-api)
- [API overview and coverage](https://happyendpoint.com/library/igraal-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `igraal-cashback-coupons-api.p.rapidapi.com`
- Category: aggregator
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Four Markets - France, Germany, Spain, Poland
- Merchant Search and Autocomplete
- Merchant Lookup by Website URL
- Bulk Merchant Catalog Export
- Live Cashback Rates, Tiers, and Conditions
- Previous Cashback Rates
- Market-Wide and Per-Merchant Coupon Feeds
- Coupon Code Re-Check by ID
- Editorial Top Coupons and Featured Offers
- Sponsored Placement Tracking
- In-Store Supermarket Cashback
- Printable Grocery Coupons
- Discounted Gift Cards
- Merchant Search Keywords and Volume
- Affiliate Network Attribution
- Scheduled Cashback Events

## Source documentation notes

| Feature             | Details                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| Market Coverage     | France, Germany, Spain and Poland; Germany operates as Shoop                                   |
| Merchant Directory  | Search, category and website lookup, merchant profiles, logos and affiliate attribution        |
| Coupons & Deals     | Market-wide and per-merchant feeds, active/expired status, code lookup and editorial top picks |
| Cashback Terms      | Current rates, previous rates, campaign tiers and conditions                                   |
| Featured Promotions | Editorial offers, sponsored merchants and placement-specific promotional spots                 |
| In-Store Rewards    | Participating retailers, grocery offers, categories and spotlight banners where available      |
| Printable Coupons   | France-only grocery coupon offers and brand/category references                                |
| Gift Cards          | Discounted card offers, denominations and redemption terms                                     |
| API Type            | Fast REST API via RapidAPI                                                                     |

Access merchant, coupon, cashback and rewards data from iGraal in France, Spain and Poland and Shoop in Germany. Build deal discovery, cashback comparison, promotion monitoring and merchant research workflows across four European storefronts.

### Key Features

- Find merchants by text, website URL, category, quality, cashback or publication status.
- Read merchant profiles and move between merchant, coupon and campaign IDs.
- Browse coupon feeds or recheck individual codes by ID.
- Compare live cashback rates, tiers and campaign conditions.
- Inspect the platform's featured shortlist and placement-specific sponsored spots.
- Browse in-store rewards, printable coupons and gift cards where supported.
- Use a resumable merchant-catalogue cursor for bulk exports, up to 200 rows per request.
- Read keyword, affiliate-campaign and scheduled cashback-event datasets on plans that include advanced intelligence.

### Available Data

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `igraal-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID             | Request                      | Purpose                |
| ------------------------ | ---------------------------- | ---------------------- |
| `_status`                | `GET /status`                | /status                |
| `_merchants`             | `GET /merchants`             | /merchants             |
| `_merchants-catalog`     | `GET /merchants-catalog`     | /merchants-catalog     |
| `_merchant-details`      | `GET /merchant-details`      | /merchant-details      |
| `_merchant-autocomplete` | `GET /merchant-autocomplete` | /merchant-autocomplete |
| `_merchant-by-url`       | `GET /merchant-by-url`       | /merchant-by-url       |
| `_cashback-rate`         | `GET /cashback-rate`         | /cashback-rate         |
| `_cashback-campaign`     | `GET /cashback-campaign`     | /cashback-campaign     |
| `_affiliate-campaigns`   | `GET /affiliate-campaigns`   | /affiliate-campaigns   |
| `_cashback-events`       | `GET /cashback-events`       | /cashback-events       |
| `_coupons`               | `GET /coupons`               | /coupons               |
| `_coupon-count`          | `GET /coupon-count`          | /coupon-count          |
| `_merchant-coupons`      | `GET /merchant-coupons`      | /merchant-coupons      |
| `_top-coupons`           | `GET /top-coupons`           | /top-coupons           |
| `_coupon-lookup`         | `GET /coupon-lookup`         | /coupon-lookup         |
| `_featured-offers`       | `GET /featured-offers`       | /featured-offers       |
| `_instore-offers`        | `GET /instore-offers`        | /instore-offers        |
| `_instore-retailers`     | `GET /instore-retailers`     | /instore-retailers     |
| `_instore-reference`     | `GET /instore-reference`     | /instore-reference     |
| `_instore-spotlights`    | `GET /instore-spotlights`    | /instore-spotlights    |
| `_printable-offers`      | `GET /printable-offers`      | /printable-offers      |
| `_printable-reference`   | `GET /printable-reference`   | /printable-reference   |
| `_gift-cards`            | `GET /gift-cards`            | /gift-cards            |
| `_merchant-keywords`     | `GET /merchant-keywords`     | /merchant-keywords     |
| `_promotions`            | `GET /promotions`            | /promotions            |
| `_affiliate-networks`    | `GET /affiliate-networks`    | /affiliate-networks    |
| `_markets`               | `GET /markets`               | /markets               |
| `_categories`            | `GET /categories`            | /categories            |
| `_reference`             | `GET /reference`             | /reference             |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
