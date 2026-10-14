# Morningstar API: Free API and MCP access

Morningstar API for financial data - real-time equity and ETF quotes, fundamentals, valuation metrics, and ESG risk ratings for research tools.

![Morningstar API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/a6d9ef2c-fe8f-47f1-8966-78d6e0cbe222.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/morningstar13)
- [API overview and coverage](https://happyendpoint.com/library/morningstar)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `morningstar13.p.rapidapi.com`
- Category: finance
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Real-Time Quotes
- Financial Statements
- ESG Risk Ratings
- ETF and Fund Data
- Valuation Metrics
- Earnings Transcripts
- Ownership Data
- Dividend History

## Source documentation notes

Unlock institutional-grade financial data with the Morningstar API. Designed for developers building investment platforms, analysis tools, or market dashboards, this API provides direct access to Morningstar's extensive database.

### Key Features

- **Real-Time Data**: Get up-to-the-minute stock quotes, charts, and market mover updates.
- **Global Market Coverage**: Access data for commodities, currencies, indexes, and sector performance.
- **Deep Fundamentals**: Retrieve detailed financials (income statement, balance sheet, cash flow), valuation ratios, and key metrics.
- **Corporate Intelligence**: Access executive details, ownership structures, dividends history, and earnings transcripts.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `morningstar`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID         | Request                         | Purpose                                            |
| -------------------- | ------------------------------- | -------------------------------------------------- |
| `_health`            | `GET /health`                   | Health check endpoint                              |
| `Auto-Complete`      | `GET /auto-complete`            | Search for companies, funds, or ETFs               |
| `Stock_Details`      | `GET /stock/details`            | Get stock details                                  |
| `Market_Data`        | `GET /market/data`              | Get market data (commodities, currencies, indexes) |
| `Market_Movers`      | `GET /market/movers`            | Get market movers                                  |
| `Calendar`           | `GET /market/calendar`          | Get market calendar                                |
| `Sector_Performance` | `GET /market/sectors`           | Get sector performance                             |
| `Real_Time_Data`     | `GET /stock/real-time`          | Get real-time stock data                           |
| `Stock_Chart`        | `GET /stock/chart`              | Get stock chart data                               |
| `Stock_News`         | `GET /stock/news`               | Get stock news                                     |
| `News_Details`       | `GET /news/details`             | Get news details                                   |
| `Fair_Value`         | `GET /stock/fair-value`         | Get fair value chart data                          |
| `Sustainability`     | `GET /stock/sustainability`     | Get sustainability data                            |
| `Trailing_Return`    | `GET /stock/trailing-return`    | Get trailing returns                               |
| `Key_Metrics`        | `GET /stock/key-metrics`        | Get key metrics                                    |
| `Financials`         | `GET /stock/financials`         | Get financials                                     |
| `Earning_Transcript` | `GET /stock/earning-transcript` | Get earning call transcript                        |
| `Valuations`         | `GET /stock/valuations`         | Get valuations                                     |
| `Dividends`          | `GET /stock/dividends`          | Get dividends/splits                               |
| `Ownership`          | `GET /stock/ownership`          | Get ownership data                                 |
| `Executive`          | `GET /stock/executive`          | Get executive/insider data                         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
