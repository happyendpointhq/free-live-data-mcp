# Stocktwits API: Free API and MCP access

Access Stocktwits messages, bullish and bearish sentiment, trending tickers, quotes, price charts, financial news and earnings transcripts.

![Stocktwits API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/187c7338-545b-484d-8870-8ea91f6142c5.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/stocktwits5)
- [API overview and coverage](https://happyendpoint.com/library/stocktwits-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `stocktwits5.p.rapidapi.com`
- Category: finance
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Retail investor sentiment dashboards
- Trending ticker and market discussion monitoring
- Research combining messages, price charts and company news
- Earnings-event analysis with calls and transcripts

## Source documentation notes

| Feature                       | Details                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market Coverage               | US stocks and ETFs, indices, futures, forex pairs, crypto, private companies, India (NSE) listings and Canadian (TSX and CSE) listings; US, India and crypto markets for trending, rankings, sentiment and calendars                                                                                     |
| Symbol Search and Lookup      | Search by ticker, company or coin name, or username, with a market ranked first (US, India, Canada or crypto); identify up to 100 symbols in one call                                                                                                                                                    |
| Social Sentiment Data         | Sentiment and message volume now with 15-minute and 24-hour change; score and message-volume series from 5-minute points to daily points back to 2018; the daily bullish and bearish split for the last 61 days                                                                                          |
| Market Sentiment Index        | The Stocktwits Sentiment Index for the US, India and crypto markets, with the market's benchmark prices, from 1 month to the full history                                                                                                                                                                |
| Trending and Rankings         | Trending symbols for the US or India by asset class; 6 native rankings: most active, most bullish, most bearish, top gainers, top losers and most new watchers; popular messages and AI "why it's trending" topics                                                                                       |
| Message Streams               | Streams by symbol, user, hashtag topic, liked messages, news article, the trending, suggested and charts streams, and the CMT technical-analysis stream; `bullish`, `bearish`, `top`, `links`, `charts` and `gifs` filters with `no_links`, `no_charts` and `no_gifs` mirrors; `max` and `since` cursors |
| Threads and Message Search    | Single messages, reply threads paged forward or backward, whole conversations with nested replies, and full-text message search month by month back to May 2008                                                                                                                                          |
| Quotes and Charts             | Real-time quotes; batches of up to 100 symbols for quotes, sparklines and fundamentals; price charts in 9 ranges from 1D to ALL; market-cap charts; single-stock futures and futures contract specs                                                                                                      |
| Fundamentals and Company Data | Valuation, profitability, balance sheet, dividends, share structure, beta and 52-week range; EPS and revenue against estimates; watcher statistics; crypto profiles priced in 11 currencies; private-company funding rounds and firmographics                                                            |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `stocktwits-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                | Request                         | Purpose                   |
| --------------------------- | ------------------------------- | ------------------------- |
| `getServiceStatus`          | `GET /status`                   | /status                   |
| `searchSymbolsAndUsers`     | `GET /search`                   | /search                   |
| `lookupSymbols`             | `GET /lookup-symbols`           | /lookup-symbols           |
| `getSymbol`                 | `GET /symbol`                   | /symbol                   |
| `getSymbolByUrl`            | `GET /symbol-by-url`            | /symbol-by-url            |
| `getSymbolAnnouncements`    | `GET /symbol-announcements`     | /symbol-announcements     |
| `getFundamentals`           | `GET /fundamentals`             | /fundamentals             |
| `getFundamentalsBatch`      | `GET /fundamentals-batch`       | /fundamentals-batch       |
| `getEpsFacts`               | `GET /eps-facts`                | /eps-facts                |
| `getWatcherStats`           | `GET /watcher-stats`            | /watcher-stats            |
| `getFundingRounds`          | `GET /funding-rounds`           | /funding-rounds           |
| `getCryptoData`             | `GET /crypto-data`              | /crypto-data              |
| `getQuote`                  | `GET /quote`                    | /quote                    |
| `getQuotes`                 | `GET /quotes`                   | /quotes                   |
| `getPriceChart`             | `GET /price-chart`              | /price-chart              |
| `getSparklines`             | `GET /sparklines`               | /sparklines               |
| `getMarketCapChart`         | `GET /market-cap-chart`         | /market-cap-chart         |
| `getSymbolSentiment`        | `GET /sentiment`                | /sentiment                |
| `getSentimentChart`         | `GET /sentiment-chart`          | /sentiment-chart          |
| `getDailySentiment`         | `GET /sentiment-daily`          | /sentiment-daily          |
| `getMarketSentimentIndex`   | `GET /market-sentiment-index`   | /market-sentiment-index   |
| `getTrendingSymbols`        | `GET /trending-symbols`         | /trending-symbols         |
| `listSymbolRankings`        | `GET /symbol-rankings`          | /symbol-rankings          |
| `getPopularMessages`        | `GET /popular-messages`         | /popular-messages         |
| `getSymbolPopularMessages`  | `GET /symbol-popular-messages`  | /symbol-popular-messages  |
| `getTrendingTopic`          | `GET /trending-topic`           | /trending-topic           |
| `getSymbolStream`           | `GET /symbol-stream`            | /symbol-stream            |
| `getUserStream`             | `GET /user-stream`              | /user-stream              |
| `getUserLikedMessages`      | `GET /user-liked-messages`      | /user-liked-messages      |
| `getTopicStream`            | `GET /topic-stream`             | /topic-stream             |
| `getGlobalStream`           | `GET /global-stream`            | /global-stream            |
| `getCmtStream`              | `GET /cmt-stream`               | /cmt-stream               |
| `getMessage`                | `GET /message`                  | /message                  |
| `getMessageByUrl`           | `GET /message-by-url`           | /message-by-url           |
| `getMessageThread`          | `GET /message-thread`           | /message-thread           |
| `getMessageConversation`    | `GET /message-conversation`     | /message-conversation     |
| `getArticleMessages`        | `GET /article-messages`         | /article-messages         |
| `searchMessages`            | `GET /search-messages`          | /search-messages          |
| `getNewsFeed`               | `GET /news-feed`                | /news-feed                |
| `getSymbolNews`             | `GET /symbol-news`              | /symbol-news              |
| `listNewsArticles`          | `GET /news-articles`            | /news-articles            |
| `getNewsArticle`            | `GET /news-article`             | /news-article             |
| `getNewsArticleByUrl`       | `GET /news-article-by-url`      | /news-article-by-url      |
| `getEarningsCalendar`       | `GET /earnings-calendar`        | /earnings-calendar        |
| `getEarningsCall`           | `GET /earnings-call`            | /earnings-call            |
| `getEarningsCallTranscript` | `GET /earnings-call-transcript` | /earnings-call-transcript |
| `getUser`                   | `GET /user`                     | /user                     |
| `getUserByUrl`              | `GET /user-by-url`              | /user-by-url              |
| `getUserFollowers`          | `GET /user-followers`           | /user-followers           |
| `getUserFollowing`          | `GET /user-following`           | /user-following           |
| `getUserWatchlist`          | `GET /user-watchlist`           | /user-watchlist           |
| `listSuggestedUsers`        | `GET /suggested-users`          | /suggested-users          |
| `getMarketHolidays`         | `GET /market-calendar`          | /market-calendar          |
| `getPredictionHours`        | `GET /prediction-hours`         | /prediction-hours         |
| `listPolls`                 | `GET /polls`                    | /polls                    |
| `getPoll`                   | `GET /poll`                     | /poll                     |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
