# Free Live Data MCP

Give your AI agent access to live property listings, product catalogs, travel data, jobs, sports and financial information through one MCP connector.

This open-source project includes **48 APIs**, a separate guide for each API, and **1,106 documented GET operations**, including health checks. Each API has a free plan with up to **1,000 calls and no credit card required**. Exact allowances, reset periods and endpoint access are listed on RapidAPI.

The agent can discover a source, inspect its parameters, resolve identifiers and fetch structured data. You describe the task in ordinary language:

> Find two-bedroom rentals in Dubai Marina and show the price, area and listing link.
>
> Compare IKEA desk products available in the US.
>
> Find UK software engineering jobs matching these skills.

Maintained by [Happy Endpoint](https://happyendpoint.com). The APIs in this catalog are provided by Happy Endpoint through RapidAPI. The connector code is MIT licensed; API access and source data follow their applicable terms.

## Quick start

You need Node.js 22 or newer and a client that supports local MCP servers, such as Claude Desktop or Cursor.

1. Pick an API from the [catalog below](#supported-apis).
2. Create a RapidAPI account, join that API's free plan and copy your application key. Repeat enrollment for each API you want to use; the same application key can serve your subscribed APIs.
3. Install the connector:

```sh
git clone https://github.com/happyendpointhq/free-live-data-mcp.git
cd free-live-data-mcp
npm ci
```

4. Add this configuration to your MCP client. Replace the path and key placeholders:

```json
{
  "mcpServers": {
    "free-live-data": {
      "command": "node",
      "args": ["/absolute/path/free-live-data-mcp/src/server.mjs"],
      "env": {
        "RAPIDAPI_KEY": "YOUR_RAPIDAPI_KEY"
      }
    }
  }
}
```

5. Reload the client and ask it to find a suitable API for your task. Four discovery and execution tools should be available.

Keep the key in your private client configuration or environment. You can explore the catalog without a key; live calls require a key and the relevant subscription.

See the [complete setup guide](docs/quickstart.md) for Cursor configuration, a pinned GitHub installation and a credential-free discovery example.

## How the agent gets data

| Tool                | What it does                                          | Uses API quota? |
| ------------------- | ----------------------------------------------------- | --------------- |
| `search_apis`       | Finds a source by task, platform, country or category | No              |
| `search_endpoints`  | Finds relevant operations and required inputs         | No              |
| `describe_endpoint` | Provides parameter names, types, enums and defaults   | No              |
| `call_endpoint`     | Validates inputs and makes one live RapidAPI request  | Yes             |

For a location-based task, the agent can first call a location lookup, then use the returned location ID in a property search. It can ask you to choose between ambiguous locations. You do not need to browse an endpoint list or construct a query string yourself.

The server exposes four tools at startup. Full endpoint schemas are available on demand, keeping the initial tool list small. Source selection and reasoning happen in your AI client; the connector supplies discovery, request validation and execution.

## Supported APIs

Each folder contains a source guide, enrollment link and `operations.json` with the request schemas. Both PropertyFinder API variants have their own folders.

### real estate

| API                                                                   | Coverage                                                                                                                                                          | Operations |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [UAE Real Estate API](apis/uae-realestate-api/README.md)              | Bayut and PropertyFinder in one UAE real estate API - 450K+ Dubai and Abu Dhabi listings, agent profiles, agencies, and transaction records as JSON.              | 11         |
| [Bayut UAE Data](apis/bayut-api/README.md)                            | Bayut API for UAE property data - 500K+ Dubai and Abu Dhabi listings, agent and agency profiles, off-plan projects, and transaction history.                      | 17         |
| [PropertyFinder UAE Data](apis/propertyfinder-api/README.md)          | PropertyFinder API for live UAE real estate data - 500K+ listings with price trends, agent data, and new projects, as structured JSON via RapidAPI.               | 21         |
| [Rightmove UK API](apis/rightmove-uk/README.md)                       | Rightmove API for UK property data - sale and rental listings, sold price history, new homes, and student accommodation, with full filtering.                     | 12         |
| [Fotocasa API](apis/fotocasa-api/README.md)                           | Fotocasa scraper API for Spain - 1.5M+ property listings across the mainland, Balearics and Andorra, with prices, photos, and granular filters.                   | 4          |
| [Idealista API](apis/idealista-api/README.md)                         | Idealista API for live property data across Spain, Italy, and Portugal - detailed listings, agent intelligence, and market analytics via RapidAPI.                | 15         |
| [PropertyFinder - Search by URL](apis/propertyfinder-api-2/README.md) | PropertyFinder API - pass any PropertyFinder search URL and get live UAE property listings back as structured JSON. No scraping to maintain.                      | 2          |
| [99.co Singapore API](apis/99co-api/README.md)                        | Live Singapore property data from 99.co. Search condos, HDB, rentals, and sale listings, plus new launches, transactions, price trends, and agents.               | 15         |
| [Aqar Saudi Arabia API](apis/aqar-api/README.md)                      | Saudi Arabia real estate data from Aqar. Property search, AI natural-language search, district pricing, geographic reference data, and developer projects.        | 23         |
| [Hepsiemlak Turkey API](apis/hepsiemlak-api/README.md)                | Turkey real estate data from Hepsiemlak. Search property listings by city and district, get details, filters, similar listings, and market price index.           | 12         |
| [SUUMO Japan Real Estate API](apis/suumo-api/README.md)               | Japan real estate data from SUUMO. Search rentals and sales, station and commute-based discovery, plus address, railway, and agency reference data.               | 22         |
| [Emlakjet Turkey API](apis/emlakjet-api/README.md)                    | Turkey real estate data from Emlakjet. Search property listings, get details and price history, plus nearby places, demographics, agencies, and new projects.     | 19         |
| [Auction.com API](apis/auction-com-api/README.md)                     | US distressed property data from Auction.com. Search foreclosure, bank-owned, and auction listings, get property details, schedules, and live bid status.         | 13         |
| [Realtor.com Data API](apis/realtor-com-api/README.md)                | US property data from Realtor.com. Search homes for sale, rent, and sold, get full listing detail, valuations, agents, schools, mortgage rates, and market stats. | 38         |
| [28Hse Hong Kong Property API](apis/28hse-api/README.md)              | Hong Kong property data from 28Hse. Search listings for sale and rent, estates, and new developments, plus transactions, agencies, school nets, and mortgages.    | 14         |
| [Allhomes Australia API](apis/allhomes-api/README.md)                 | Allhomes property data for Canberra, ACT and NSW. Listings, past sales, valuations, land values, auctions, suburbs, agents, and schools.                          | 40         |
| [Wasalt Saudi Arabia API](apis/wasalt-api/README.md)                  | Wasalt Saudi property data. Sale and rent listings, REGA licences, holiday rentals, off-plan projects, and Infath auctions with live bids.                        | 26         |
| [Cian API](apis/cian-api/README.md)                                   | Access Cian real estate data for Russia: sale and rental listings, new builds, agents, price history, property valuations and daily rentals.                      | 39         |
| [Rent.com API](apis/rent-com-api/README.md)                           | Search Rent.com apartments and houses for rent in the US. Access listing details, floor plans, availability, rent estimates and neighborhood data.                | 19         |
| [Zoopla API](apis/zoopla-api/README.md)                               | Access Zoopla UK property listings, sold house prices, valuations, estate agents and postcode or UPRN lookups for property research tools.                        | 33         |

### beauty

| API                                       | Coverage                                                                                                                                             | Operations |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Sephora API](apis/sephora-api/README.md) | Sephora scraper API for live product data - US catalog with brands, prices, star ratings, review counts, and store stock levels, as structured JSON. | 12         |

### finance

| API                                             | Coverage                                                                                                                                        | Operations |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Morningstar API](apis/morningstar/README.md)   | Morningstar API for financial data - real-time equity and ETF quotes, fundamentals, valuation metrics, and ESG risk ratings for research tools. | 21         |
| [Stocktwits API](apis/stocktwits-api/README.md) | Access Stocktwits messages, bullish and bearish sentiment, trending tickers, quotes, price charts, financial news and earnings transcripts.     | 56         |

### retail

| API                                         | Coverage                                                                                                                                          | Operations |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Ikea Pro API](apis/ikea-pro/README.md)     | IKEA API for product data - 12,000+ items with live pricing, dimensions, ratings, category paths, and per-store stock levels across every market. | 9          |
| [Kohls Data API](apis/kohls-data/README.md) | Kohl's API for US retail data - product catalog with live pricing, promotions, ratings, customer reviews, Q&A, and store inventory as JSON.       | 6          |
| [Kaspi.kz API](apis/kaspi-kz-api/README.md) | Kaspi.kz marketplace data for Kazakhstan. Search products, compare seller offers and prices, check stock, and pull reviews and car parts.         | 30         |
| [Houzz API](apis/houzz-api/README.md)       | Search Houzz contractors, interior design photos and furniture products. Access professional reviews, projects and home renovation data.          | 39         |
| [Noon API](apis/noon-api/README.md)         | Search Noon products across Middle East markets. Access product prices, Buy Box offers, seller profiles, reviews, deals and category data.        | 27         |

### aggregator

| API                                                      | Coverage                                                                                                                                                 | Operations |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Klarna Ecom API](apis/klarna-ecom/README.md)            | Klarna API for shopping data - multi-store price comparison and price history across Amazon, Walmart, Target and more, in 13 regions.                    | 20         |
| [Njuškalo Croatia API](apis/njuskalo-api/README.md)      | Marketplace data from Njuškalo, Croatia's largest classifieds site. Search cars, real estate, and listings, plus sellers, categories, and pricing.       | 21         |
| [Yad2 Israel API](apis/yad2-api/README.md)               | Israel marketplace data from Yad2. Search real estate, vehicles, and second-hand listings, get details and maps, plus government-registered sale prices. | 25         |
| [Gumtree UK API](apis/gumtree-api/README.md)             | UK classifieds data from Gumtree. Search listings with filters, get ad details, seller profiles and reviews, plus categories, locations, and trends.     | 17         |
| [iGraal Cashback Coupons API](apis/igraal-api/README.md) | iGraal and Shoop cashback and coupon data for France, Germany, Spain and Poland. Merchants, codes, cashback rates and featured offers.                   | 29         |
| [4Sale Kuwait API](apis/4sale-api/README.md)             | Search 4Sale Kuwait classifieds, used cars, property and electronics. Access listing prices, sellers, districts and business directory data.             | 34         |
| [Milanuncios API](apis/milanuncios-api/README.md)        | Search Milanuncios classifieds in Spain. Access used cars, property, electronics, listing details, seller profiles and price drops as JSON.              | 22         |
| [Motory API](apis/motory-api/README.md)                  | Access Motory used and new car listings in Saudi Arabia and Jordan, with prices, makes, models, dealers, offers and vehicle comparison data.             | 46         |

### grocery

| API                                                          | Coverage                                                                                                                                           | Operations |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Tesco Data API](apis/tesco-data/README.md)                  | Tesco grocery API for UK and Ireland - 300K+ SKUs with live pricing, Clubcard offers, nutrition, promotions, and store-level availability as JSON. | 8          |
| [Ninja Saudi Food and Grocery API](apis/ninja-api/README.md) | Ninja food delivery and grocery data for Saudi Arabia and the GCC - menus, delivery fees, deals, products, and live stock.                         | 37         |
| [HungerStation API](apis/hungerstation-api/README.md)        | Access HungerStation restaurant menus, meal prices, delivery fees, offers and grocery products across Saudi Arabia in English and Arabic.          | 37         |

### fashion

| API                              | Coverage                                                                                                                                          | Operations |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [H&M API](apis/hm-api/README.md) | H&M API for fashion product data - global catalog with prices, colours, sizes, stock levels, supplier detail, and store locations, as clean JSON. | 7          |

### travel

| API                                                 | Coverage                                                                                                                                                       | Operations |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Priceline Pro API](apis/priceline-pro/README.md)   | Priceline API for travel data - real-time hotel rates and availability, room-level pricing, flight search, and car rental rates from one endpoint.             | 10         |
| [Vrbo API](apis/vrbo-api/README.md)                 | Vacation rental data from Vrbo. Search listings by destination, dates, or map area, plus property detail, amenities, photos, rates, availability, and reviews. | 22         |
| [Turo Car Rental Data API](apis/turo-api/README.md) | Turo car rental data - search vehicles, daily prices, availability calendars, itemised trip quotes, hosts, and reviews.                                        | 23         |
| [Expedia API](apis/expedia-api/README.md)           | Search Expedia hotels, flights, car rentals and activities. Access room rates, reviews, price calendars and travel packages across 32 markets.                 | 38         |

### jobs

| API                                          | Coverage                                                                                                                                          | Operations |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Bayt.com Jobs API](apis/bayt-api/README.md) | Bayt.com jobs data for the Middle East. Search vacancies by country, city, industry, and salary, with job details and employer openings.          | 15         |
| [Reed.co.uk API](apis/reed-api/README.md)    | Search Reed.co.uk jobs, salaries, employers and courses. Access UK job listings, application counts and salary benchmarks through JSON endpoints. | 27         |

### sports

| API                                                                | Coverage                                                                                                                                           | Operations |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [PrizePicks Player Projections API](apis/prizepicks-api/README.md) | PrizePicks player projections data. Full league boards, player and game lines, live and trending projections, players, teams, and games.           | 17         |
| [LiveScore API](apis/livescore-api/README.md)                      | Get LiveScore sports data: live scores, fixtures, match statistics, lineups, standings and player data for football, basketball, cricket and more. | 56         |

## Practical examples

| Task                                             | Useful starting sources                        |
| ------------------------------------------------ | ---------------------------------------------- |
| Research UAE rental listings and property prices | Bayut, PropertyFinder, UAE Real Estate         |
| Compare retail products, prices and reviews      | IKEA, Sephora, Noon, H&M, Kohl's               |
| Explore property listings outside the UAE        | Rightmove, Zoopla, Realtor.com, Cian, Fotocasa |
| Research accommodation and travel options        | Expedia, Priceline, Vrbo                       |
| Explore restaurants, menus and grocery products  | HungerStation, Tesco, Ninja                    |
| Find jobs and inspect employer listings          | Reed, Bayt                                     |
| Explore sports results or market discussions     | LiveScore, PrizePicks, Stocktwits              |

The [agent workflow guide](docs/agent-workflows.md) includes prompts and a worked Bayut lookup. Check each API guide for geographic coverage and source capabilities.

## Free plans and data freshness

- Free-plan allowance is up to 1,000 upstream API requests per API, subject to the listing's exact limits. A task that performs a lookup and a search uses two calls.
- Some operations are restricted to particular plans. A free subscription does not establish access to every operation.
- The connector reports remaining requests when RapidAPI supplies that header. It does not automatically retry failed requests.
- Calls retrieve data on demand. Historical transactions, observed price history and other dated records retain their source timestamps.
- Results include the source listing, fetch time and a truncation indicator. Arrays are previewed at 20 items by default, configurable up to 100; narrow the request or use source pagination for more data.
- The executor currently accepts JSON responses. Operations describing raw HTML remain discoverable, but a non-JSON response requires another API client.
- API free plans cover the data requests. Your chosen AI client may have its own usage costs.

## Project structure

```text
apis/<api-id>/README.md         Source coverage and usage guide
apis/<api-id>/operations.json   Compact request metadata
catalog.json                   Searchable API catalog
src/                           MCP connector and validated executor
docs/                          Setup, workflows and troubleshooting
examples/                      Runnable discovery and request examples
test/                          Catalog, execution and MCP transport checks
```

The catalog includes published APIs only. Bulk datasets and daily spreadsheet feeds are separate products and are outside this connector's API surface.

## Development and contributions

```sh
npm ci
npm run validate
```

Contributions are welcome for useful examples, improved search metadata, corrected request schemas and client setup instructions. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

The catalog was checked on October 14, 2026 against provider documentation. PropertyFinder's primary listing was checked against its live RapidAPI MCP tool metadata. Automated checks validate every request schema and exercise the connector over MCP. This does not mean every upstream operation has been live-tested.

[License](LICENSE) · [Troubleshooting](docs/troubleshooting.md) · [API library](https://happyendpoint.com/library)
