# Houzz API: Free API and MCP access

Search Houzz contractors, interior design photos and furniture products. Access professional reviews, projects and home renovation data.

![Houzz API source logo](https://rapidapi-prod-apis.s3.amazonaws.com/d1903bbb-eba5-4ed9-a822-48024db31b8a.png)

## Access

- [RapidAPI listing and free plan](https://rapidapi.com/happyendpoint/api/houzz1)
- [API overview and coverage](https://happyendpoint.com/library/houzz-api)
- [Public API documentation](https://docs.happyendpoint.com/)
- Host: `houzz1.p.rapidapi.com`
- Category: retail
- Free tier: up to 1,000 calls, with no credit card required. Check the listing for the exact allowance, reset period and rate limits.
- Requires a RapidAPI account and enrollment in this API's free plan.

## Available data

- Contractor and interior designer directories
- Home renovation research using reviews and completed projects
- Room and style discovery from design photographs
- Furniture product search and retail price research

## Source documentation notes

| Feature                           | Details                                                                                                                                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Country Sites                     | 15 Houzz sites: United States, United Kingdom, Australia, Germany, France, Russia, Japan, Italy, Spain, Denmark, Sweden, Ireland, New Zealand, Singapore and India; the site sets the professionals, photos, products, language and currency |
| Professionals Directory           | Architects, general contractors, interior designers, kitchen and bath remodelers, landscapers and every other professional category on each site, searched by category and place within a radius of up to 100 miles                          |
| Contact and Licence Data          | Phone, website, social links, address, cost estimate, awards and badges, plus the state licence record with number, type and issuing board where the state verifies one                                                                      |
| Reviews and Ratings               | Full professional reviews with star rating, text, photos, reviewer and the professional's reply, in 4 sort orders; product reviews with star distribution and aspect scores                                                                  |
| US Map Coordinates                | Latitude, longitude and street address for professionals on the US directory                                                                                                                                                                 |
| Design Photo Search               | Interior and exterior design photos by keyword, room, style and metro area, with budget, room size, dominant colour and room-specific feature filters such as kitchen layout and counter material                                            |
| Filter Discovery                  | Live filter options with match counts for professional, photo and product searches                                                                                                                                                           |
| Ideabooks, Projects and Community | Ideabooks, professional projects with photos and cost range, Q&A discussions with answers and polls, editorial stories, photo and story comments, similar photos and home tour videos                                                        |
| URL Front Doors                   | Paste a Houzz directory, profile, photo, product, ideabook, project, discussion or story URL from any of the 15 sites and get the record                                                                                                     |
| API Type                          | Fast REST API via RapidAPI                                                                                                                                                                                                                   |

## Use with an AI agent

[Configure the MCP connector](../../docs/quickstart.md), then ask your agent to explore `houzz-api`. It can search the operations below, inspect a request schema and make a call. Resolve location, category and entity IDs through this API's lookup operations when available. Ask for missing details rather than inventing identifiers.

The connector's discovery tools work without an API key. Live requests require your configured RapidAPI key and this API's subscription.

## Documented operations

| Operation ID                  | Request                            | Purpose                      |
| ----------------------------- | ---------------------------------- | ---------------------------- |
| `getServiceStatus`            | `GET /status`                      | /status                      |
| `searchLocations`             | `GET /locations`                   | /locations                   |
| `listProfessionalCategories`  | `GET /professional-categories`     | /professional-categories     |
| `listPhotoCategories`         | `GET /photo-categories`            | /photo-categories            |
| `listProductCategories`       | `GET /product-categories`          | /product-categories          |
| `searchProfessionals`         | `GET /search-professionals`        | /search-professionals        |
| `searchProfessionalsByUrl`    | `GET /search-professionals-by-url` | /search-professionals-by-url |
| `getProfessionalFilters`      | `GET /professional-filters`        | /professional-filters        |
| `getProfessionalDetails`      | `GET /professional-details`        | /professional-details        |
| `getProfessionalDetailsByUrl` | `GET /professional-details-by-url` | /professional-details-by-url |
| `getProfessionalReviews`      | `GET /professional-reviews`        | /professional-reviews        |
| `getProfessionalPhotos`       | `GET /professional-photos`         | /professional-photos         |
| `getProfessionalProjects`     | `GET /professional-projects`       | /professional-projects       |
| `searchPhotos`                | `GET /search-photos`               | /search-photos               |
| `searchPhotosByUrl`           | `GET /search-photos-by-url`        | /search-photos-by-url        |
| `getPhotoFilters`             | `GET /photo-filters`               | /photo-filters               |
| `getPhotoDetails`             | `GET /photo-details`               | /photo-details               |
| `getPhotoDetailsByUrl`        | `GET /photo-details-by-url`        | /photo-details-by-url        |
| `getSimilarPhotos`            | `GET /similar-photos`              | /similar-photos              |
| `getPhotoComments`            | `GET /photo-comments`              | /photo-comments              |
| `searchProducts`              | `GET /search-products`             | /search-products             |
| `searchProductsByUrl`         | `GET /search-products-by-url`      | /search-products-by-url      |
| `getProductFilters`           | `GET /product-filters`             | /product-filters             |
| `getProductDetails`           | `GET /product-details`             | /product-details             |
| `getProductDetailsByUrl`      | `GET /product-details-by-url`      | /product-details-by-url      |
| `getProductReviews`           | `GET /product-reviews`             | /product-reviews             |
| `searchIdeabooks`             | `GET /search-ideabooks`            | /search-ideabooks            |
| `getIdeabookPhotos`           | `GET /ideabook-photos`             | /ideabook-photos             |
| `getIdeabookPhotosByUrl`      | `GET /ideabook-photos-by-url`      | /ideabook-photos-by-url      |
| `getProjectPhotos`            | `GET /project-photos`              | /project-photos              |
| `getProjectPhotosByUrl`       | `GET /project-photos-by-url`       | /project-photos-by-url       |
| `listDiscussions`             | `GET /discussions`                 | /discussions                 |
| `getDiscussionDetails`        | `GET /discussion-details`          | /discussion-details          |
| `getDiscussionDetailsByUrl`   | `GET /discussion-details-by-url`   | /discussion-details-by-url   |
| `listStories`                 | `GET /stories`                     | /stories                     |
| `getStoryDetails`             | `GET /story-details`               | /story-details               |
| `getStoryDetailsByUrl`        | `GET /story-details-by-url`        | /story-details-by-url        |
| `getStoryComments`            | `GET /story-comments`              | /story-comments              |
| `listVideos`                  | `GET /videos`                      | /videos                      |

Full request parameters, types, enums and defaults are available in [operations.json](operations.json). Use `describe_endpoint` to inspect one operation instead of loading every schema.

## Practical limits

This API provides on-demand access to its source data. Some operations return historical records or source observations, so request time does not establish when each record was last updated. One task may require several API calls, for example a lookup followed by a search. Free allowance is counted in upstream requests, not chat messages. Data coverage and field availability depend on the source.

## Links

- [All supported APIs](../../README.md#supported-apis)
- [Agent workflows](../../docs/agent-workflows.md)
- [Troubleshooting](../../docs/troubleshooting.md)
