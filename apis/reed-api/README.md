# Reed.co.uk API: Free API and MCP access

Search Reed.co.uk jobs, salaries, employers and courses. Access UK job listings, application counts and salary benchmarks through JSON endpoints.

![Reed.co.uk API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/bbb9f46a-9f3a-4214-b87a-a4d9333a9b09.jpg)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/reed-co-uk)
- [API overview and coverage](https://happyendpoint.com/library/reed-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `reed-co-uk.p.rapidapi.com`
- Category: jobs
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- UK job boards and role-based vacancy search
- Salary benchmarking by role, sector and location
- Employer hiring activity and application-count research
- Course discovery for recruitment and career products

## Source documentation notes

| Feature                    | Details                                                                                                                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UK Coverage**            | Towns, cities, districts, counties, regions, nations, outcodes and postcodes across the UK; up to 5 places in one search                                                                                                                                                                           |
| **24 Job Search Filters**  | Keywords, place and radius, sector, salary range and unit, posting date, permanent, temporary, contract, full or part time, graduate, agency or direct employer, posted by Reed, easy apply, early bird, visa sponsorship, salary shown, training and survey exclusions, remote, hybrid or on-site |
| **Salary Benchmark**       | Average, low and high advertised pay for a job title and place, a salary distribution and up to 9 comparison titles under the same filters                                                                                                                                                         |
| **Sector Job Counts**      | Matching adverts per sector for any search, with each sector's share                                                                                                                                                                                                                               |
| **Application Counts**     | How many people have applied, on full job details and across whole searches of up to 100 rows per page                                                                                                                                                                                             |
| **Employer Profiles**      | Company profiles with website, sector, size, benefits, social links and media; a directory of employers hiring now; every live job of one employer                                                                                                                                                 |
| **Reed Courses**           | Course search by subject, place, study method, fees, qualification and awarding body; full course details and learner reviews                                                                                                                                                                      |
| **URL Lookups**            | Paste a Reed.co.uk job search, job, company profile, course listing or course page address and get the record                                                                                                                                                                                      |
| **Search Reference Tools** | Place suggestions and checks, coordinates to town lookup, job title and skill autocomplete, and the sector and role taxonomy                                                                                                                                                                       |
| **Batch Job Lookup**       | Up to 25 jobs by job ID in one request, in the order sent                                                                                                                                                                                                                                          |
| **Similar Jobs**           | Reed's recommended similar jobs for any advert, page by page                                                                                                                                                                                                                                       |
| **Description Formats**    | Job descriptions as plain text, HTML and Markdown                                                                                                                                                                                                                                                  |
| API Type                   | Fast REST API via RapidAPI                                                                                                                                                                                                                                                                         |

Bring UK jobs data from Reed.co.uk into your application: search job adverts across every UK town, city, county and postcode, read full job details with salaries and application counts, benchmark pay for any job title, explore employer profiles and hiring employers, and search the Reed Courses catalogue with learner reviews.

### Key Features

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `reed-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID              | Request                       | Purpose                 |
| ------------------------- | ----------------------------- | ----------------------- |
| `getServiceStatus`        | `GET /status`                 | /status                 |
| `suggestLocations`        | `GET /location-suggestions`   | /location-suggestions   |
| `resolveLocation`         | `GET /resolve-location`       | /resolve-location       |
| `reverseGeocode`          | `GET /reverse-geocode`        | /reverse-geocode        |
| `suggestJobTitles`        | `GET /job-title-suggestions`  | /job-title-suggestions  |
| `suggestSkills`           | `GET /skill-suggestions`      | /skill-suggestions      |
| `listSectors`             | `GET /sectors`                | /sectors                |
| `searchJobs`              | `GET /search-jobs`            | /search-jobs            |
| `searchJobsByUrl`         | `GET /search-jobs-by-url`     | /search-jobs-by-url     |
| `getJobDetails`           | `GET /job-details`            | /job-details            |
| `getJobDetailsByUrl`      | `GET /job-details-by-url`     | /job-details-by-url     |
| `getJobsByIds`            | `GET /jobs-by-ids`            | /jobs-by-ids            |
| `getSimilarJobs`          | `GET /similar-jobs`           | /similar-jobs           |
| `getJobApplicationCounts` | `GET /job-application-counts` | /job-application-counts |
| `getSalaryBenchmark`      | `GET /salary-benchmark`       | /salary-benchmark       |
| `getSectorJobCounts`      | `GET /sector-job-counts`      | /sector-job-counts      |
| `getCompanyProfile`       | `GET /company-profile`        | /company-profile        |
| `getCompanyProfileByUrl`  | `GET /company-profile-by-url` | /company-profile-by-url |
| `getEmployerJobs`         | `GET /employer-jobs`          | /employer-jobs          |
| `listCompanies`           | `GET /companies`              | /companies              |
| `searchEmployers`         | `GET /search-employers`       | /search-employers       |
| `listCourseSubjects`      | `GET /course-subjects`        | /course-subjects        |
| `searchCourses`           | `GET /search-courses`         | /search-courses         |
| `searchCoursesByUrl`      | `GET /search-courses-by-url`  | /search-courses-by-url  |
| `getCourseDetails`        | `GET /course-details`         | /course-details         |
| `getCourseDetailsByUrl`   | `GET /course-details-by-url`  | /course-details-by-url  |
| `getCourseReviews`        | `GET /course-reviews`         | /course-reviews         |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
