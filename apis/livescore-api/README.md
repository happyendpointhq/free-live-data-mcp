# LiveScore API: Free API and MCP access

Get LiveScore sports data: live scores, fixtures, match statistics, lineups, standings and player data for football, basketball, cricket and more.

![LiveScore API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/eb8b18fe-3faa-4595-bf2c-0d774cff9a7f.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/livescore-api2)
- [API overview and coverage](https://happyendpoint.com/library/livescore-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `livescore-api2.p.rapidapi.com`
- Category: sports
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Live scoreboards and match result pages
- Fixture calendars by sport, team or competition
- League standings and player statistics dashboards
- Match preview tools using form and head-to-head records

## Source documentation notes

| Feature                               | Details                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Multi-Sport Live Scores**           | Live scores and match state for football, basketball, cricket, tennis, ice hockey and American football. |
| **Fixtures and Match Results**        | Dated boards, competition schedules, team fixtures and upcoming or finished views.                       |
| **Match Scores and Clocks**           | Detailed scores, kickoff times, available clocks, sets, periods and innings.                             |
| **Lineups and Player Highlights**     | Formations, starters, bench players, substitutions, unavailable players and highlighted athletes.        |
| **Match Statistics and Maps**         | Team statistics, period breakdowns and shot maps where available.                                        |
| **Detailed Cricket Scorecards**       | Batting, bowling, wicket falls, innings and over-by-over details.                                        |
| **Match Events and Commentary**       | Goals, cards, recorded incidents and written match commentary.                                           |
| **Form and Match History**            | Recent team results, head-to-head meetings and historical summaries.                                     |
| **Standings and Tournament Brackets** | League tables, qualification markers, grouped standings and knockout rounds.                             |
| **Team and Player Leaderboards**      | Ranked statistics for competitions and teams, with selectable measures.                                  |
| **Venue and Official Details**        | Venue identity, artwork, location, capacity, neutral-ground status and match officials.                  |
| **Sports Discovery and Resolution**   | Search, curated suggestions, competition discovery and batch resolution of known IDs.                    |
| **Team Profiles and Squads**          | Club identity, badges, colors, registered players, competition addresses and fixture windows.            |
| **Player Profiles and Records**       | Athlete profiles, career history, match involvement and season statistics.                               |
| **Sports News and Previews**          | News feeds, article summaries, statistical insights and authored editorial verdicts.                     |
| **Sports Media and Community**        | Video playlists, social posts, country television guides, community picks and topic catalogs.            |
| API Type                              | Fast REST API via RapidAPI                                                                               |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `livescore-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                | Request                         | Purpose                   |
| --------------------------- | ------------------------------- | ------------------------- |
| `get_status`                | `GET /status`                   | /status                   |
| `_sports`                   | `GET /sports`                   | /sports                   |
| `_timezones`                | `GET /timezones`                | /timezones                |
| `_table-legend`             | `GET /table-legend`             | /table-legend             |
| `_translations`             | `GET /translations`             | /translations             |
| `_search`                   | `GET /search`                   | /search                   |
| `_popular`                  | `GET /popular`                  | /popular                  |
| `_competitions`             | `GET /competitions`             | /competitions             |
| `_resolve`                  | `GET /resolve`                  | /resolve                  |
| `_matches-by-date`          | `GET /matches-by-date`          | /matches-by-date          |
| `_live-matches`             | `GET /live-matches`             | /live-matches             |
| `_matches-by-competition`   | `GET /matches-by-competition`   | /matches-by-competition   |
| `_league-matches`           | `GET /league-matches`           | /league-matches           |
| `_matches-by-team`          | `GET /matches-by-team`          | /matches-by-team          |
| `_match-updates`            | `GET /match-updates`            | /match-updates            |
| `_day-coverage`             | `GET /day-coverage`             | /day-coverage             |
| `_match-details`            | `GET /match-details`            | /match-details            |
| `_match-statistics`         | `GET /match-statistics`         | /match-statistics         |
| `_match-lineups`            | `GET /match-lineups`            | /match-lineups            |
| `_match-incidents`          | `GET /match-incidents`          | /match-incidents          |
| `_match-commentary`         | `GET /match-commentary`         | /match-commentary         |
| `_match-media`              | `GET /match-media`              | /match-media              |
| `_match-h2h`                | `GET /match-h2h`                | /match-h2h                |
| `_match-form`               | `GET /match-form`               | /match-form               |
| `_match-standings`          | `GET /match-standings`          | /match-standings          |
| `_match-insights`           | `GET /match-insights`           | /match-insights           |
| `_match-innings`            | `GET /match-innings`            | /match-innings            |
| `_match-info`               | `GET /match-info`               | /match-info               |
| `_match-key-players`        | `GET /match-key-players`        | /match-key-players        |
| `_match-verdict`            | `GET /match-verdict`            | /match-verdict            |
| `_match-social-posts`       | `GET /match-social-posts`       | /match-social-posts       |
| `_competition-details`      | `GET /competition-details`      | /competition-details      |
| `_standings`                | `GET /standings`                | /standings                |
| `_competition-player-stats` | `GET /competition-player-stats` | /competition-player-stats |
| `_competition-team-stats`   | `GET /competition-team-stats`   | /competition-team-stats   |
| `_league-table`             | `GET /league-table`             | /league-table             |
| `_country-competitions`     | `GET /country-competitions`     | /country-competitions     |
| `_competition-draw`         | `GET /competition-draw`         | /competition-draw         |
| `_competition-media`        | `GET /competition-media`        | /competition-media        |
| `_team-details`             | `GET /team-details`             | /team-details             |
| `_team-squad`               | `GET /team-squad`               | /team-squad               |
| `_team-matches`             | `GET /team-matches`             | /team-matches             |
| `_team-standings`           | `GET /team-standings`           | /team-standings           |
| `_team-stats`               | `GET /team-stats`               | /team-stats               |
| `_team-player-stats`        | `GET /team-player-stats`        | /team-player-stats        |
| `_team-media`               | `GET /team-media`               | /team-media               |
| `_team-competitions`        | `GET /team-competitions`        | /team-competitions        |
| `_team-fixtures`            | `GET /team-fixtures`            | /team-fixtures            |
| `_player-details`           | `GET /player-details`           | /player-details           |
| `_player-matches`           | `GET /player-matches`           | /player-matches           |
| `_player-stats`             | `GET /player-stats`             | /player-stats             |
| `_news`                     | `GET /news`                     | /news                     |
| `_article`                  | `GET /article`                  | /article                  |
| `_tv-guide`                 | `GET /tv-guide`                 | /tv-guide                 |
| `_bet-tips`                 | `GET /bet-tips`                 | /bet-tips                 |
| `_tipster-topics`           | `GET /tipster-topics`           | /tipster-topics           |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
