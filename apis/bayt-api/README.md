# Bayt.com Jobs API: Free API and MCP access

Bayt.com jobs data for the Middle East. Search vacancies by country, city, industry, and salary, with job details and employer openings.

![Bayt.com Jobs API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/c855116c-336f-4f62-9d01-5504e5036d1e.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/bayt-com)
- [API overview and coverage](https://happyendpoint.com/library/bayt-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `bayt-com.p.rapidapi.com`
- Category: jobs
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Job Search with Location, Industry, and Salary Filters
- Search by Bayt.com URL
- Full Job Details by ID or URL
- Lightweight Job Records with Skills
- Search-Card View with Salary Band
- Similar Jobs
- Employer Job Openings
- Popular Jobs
- Remote and Easy-Apply Filters
- Career Level and Employment Type Filters
- Countries with Job Counts
- City and Province Identifiers
- Job Title Autocomplete
- Filter Taxonomy in One Call
- Live Labour-Market Facets

## Source documentation notes

| Feature             | Details                                 |
| ------------------- | --------------------------------------- |
| **Open Jobs**       | **75,000+ vacancies**                   |
| **Top Markets**     | UAE **10,068** · Saudi Arabia **7,486** |
| **Remote Jobs**     | **6,527 vacancies**                     |
| **Hiring Demand**   | Industry, seniority, contract, employer |
| **Location Trends** | Country, province, city                 |
| **Salary Data**     | Salary bands and currencies             |
| **Coverage**        | MENA, Pakistan, India                   |

Search and retrieve structured job vacancy data from **Bayt.com**, one of the leading employment websites for the Middle East and North Africa.
Use the API to find jobs by country, city, industry, career level, employment type, company, posting date, remote-work status, salary information, and other hiring criteria. Retrieve individual job records, full job descriptions, similar vacancies, employer openings, popular jobs, and live filter values through a straightforward REST API.

### Search Job Vacancies

Call `/job-search` to browse current job vacancies with filters such as:

- Country, province, emirate, governorate, or city
- Career level and employment type
- Employer industry and company type
- Employer name or company slug
- Posting date and listing source
- Remote jobs and work arrangement
- Salary range and salary currency
- Experience requirements and easy-apply availability
- Employer-stated gender or citizenship requirements
  Results are returned newest first. Each job card includes identifiers and fields useful for search results, vacancy feeds, hiring dashboards, job alerts, and recruitment data pipelines.
  If you already have a public Bayt.com search URL, use `/job-search-by-url` to convert it into structured job results.

### Search Notes

Some advanced filters, including free-text keyword and normalized salary refinements, operate over a configurable scan window rather than the entire job index. Their parameter descriptions and the response `postFilter` fields explain the scanned coverage. Narrow the search first with country, city, industry, career level, or posting date for the most relevant results.

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `bayt-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID          | Request                   | Purpose             |
| --------------------- | ------------------------- | ------------------- |
| `get_status`          | `GET /status`             | /status             |
| `_autocomplete`       | `GET /autocomplete`       | /autocomplete       |
| `_countries`          | `GET /countries`          | /countries          |
| `_cities`             | `GET /cities`             | /cities             |
| `_taxonomy`           | `GET /taxonomy`           | /taxonomy           |
| `_job-search`         | `GET /job-search`         | /job-search         |
| `_popular-jobs`       | `GET /popular-jobs`       | /popular-jobs       |
| `_job-search-by-url`  | `GET /job-search-by-url`  | /job-search-by-url  |
| `_job-details`        | `GET /job-details`        | /job-details        |
| `_job-details-by-url` | `GET /job-details-by-url` | /job-details-by-url |
| `_job`                | `GET /job`                | /job                |
| `_job-listing`        | `GET /job-listing`        | /job-listing        |
| `_similar-jobs`       | `GET /similar-jobs`       | /similar-jobs       |
| `_market-facets`      | `GET /market-facets`      | /market-facets      |
| `_company-jobs`       | `GET /company-jobs`       | /company-jobs       |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
