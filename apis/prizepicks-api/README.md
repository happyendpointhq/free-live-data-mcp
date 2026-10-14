# PrizePicks Player Projections API: Free API and MCP access

PrizePicks player projections data. Full league boards, player and game lines, live and trending projections, players, teams, and games.

![PrizePicks Player Projections API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/7a8f8b64-b093-4924-a76e-21147d9f3bf7.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/prizepicks-api)
- [API overview and coverage](https://happyendpoint.com/library/prizepicks-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `prizepicks-api.p.rapidapi.com`
- Category: sports
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Full League Projection Boards
- Joined Player, Team, Game, and Stat Context
- Projection Details by ID
- Bulk Refresh of Known Projections
- Player Projections by ID or Name
- Game Projections
- Live Event Projections
- Promotional Lines with Original Values
- Trending Projections by Popularity
- League Directory with Board Size
- League-Specific Stat Types
- Player, Team, and Game Directories
- Board Summary with Line Ranges
- Filters by Position, Market, Time Window, and Line Range

## Source documentation notes

| Feature             | Details                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| Projection Coverage | Full boards, individual lines, players, games, live events, promotions, and trending selections  |
| Market Context      | Athlete, team, league, game, stat type, line score, odds type, and wager information             |
| Discovery Tools     | League, player, team, game, and stat-type directories                                            |
| Projection Filters  | Sport, player, team, position, market, event state, promotion state, time window, and line range |
| Bulk Retrieval      | Refresh up to 200 known projection identifiers in one request                                    |
| API Type            | Fast REST API via RapidAPI                                                                       |

Access structured PrizePicks daily fantasy sports data for player projections, live lines, promotional selections, trending picks, leagues, athletes, teams, games, and board-level analysis. Build research tools, monitoring workflows, comparison products, and fantasy sports experiences through consistent response envelopes.

### Key Features

- Explore complete league boards with detailed filters, sorting, and pagination.
- Retrieve individual projections or refresh a known set of projection identifiers.
- Follow live, promotional, and trending selections through focused resources.
- Discover leagues, stat types, players, teams, and games represented on current boards.
- Summarize a league board by totals, breakdowns, line ranges, and active stat markets.
- Build player and game views from dedicated projection resources.

### Available Data

Responses can include projection identifiers, player names, team and position details, league context, stat types, line scores, odds and projection types, event timing, game identifiers, promotional values, live state, trending popularity, and board-level summaries. Available fields depend on the selected resource and the current source data.

### Common Use Cases

- Build fantasy sports projection explorers and player-prop research interfaces.
- Monitor selected lines, promotional values, live events, and popular picks.
- Compare athletes or markets across teams, games, stat types, and leagues.
- Create league dashboards with board composition and activity summaries.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `prizepicks-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID            | Request                     | Purpose               |
| ----------------------- | --------------------------- | --------------------- |
| `_status`               | `GET /status`               | /status               |
| `_projections`          | `GET /projections`          | /projections          |
| `_projections-by-ids`   | `GET /projections-by-ids`   | /projections-by-ids   |
| `_projection-details`   | `GET /projection-details`   | /projection-details   |
| `_player-projections`   | `GET /player-projections`   | /player-projections   |
| `_game-projections`     | `GET /game-projections`     | /game-projections     |
| `_live-projections`     | `GET /live-projections`     | /live-projections     |
| `_promo-projections`    | `GET /promo-projections`    | /promo-projections    |
| `_trending-projections` | `GET /trending-projections` | /trending-projections |
| `_leagues`              | `GET /leagues`              | /leagues              |
| `_league-details`       | `GET /league-details`       | /league-details       |
| `_stat-types`           | `GET /stat-types`           | /stat-types           |
| `_players`              | `GET /players`              | /players              |
| `_player-details`       | `GET /player-details`       | /player-details       |
| `_teams`                | `GET /teams`                | /teams                |
| `_games`                | `GET /games`                | /games                |
| `_board-summary`        | `GET /board-summary`        | /board-summary        |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
