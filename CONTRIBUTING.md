# Contributing

Useful examples, clearer source descriptions, corrected request schemas and tested MCP client instructions are welcome.

1. Open an issue explaining the task or correction.
2. Create a branch and make a focused change.
3. Run `npm ci` and `npm run validate`.
4. Open a pull request with the behavior change and verification result.

Each published API has one `apis/<api-id>/` folder containing a README and `operations.json`. Its catalog entry records the verified RapidAPI host, enrollment link and schema provenance. Keep operation IDs unique within an API. Preserve parameter types, required fields, defaults and enum values.

Use public request documentation or verified live MCP tool metadata. Include only the request information needed for discovery and execution. Exclude unpublished APIs and private infrastructure details. Confirm free-tier claims against the provider listing. Examples should work within the documented free-plan access and identify any additional requirements.

Source-specific identifiers vary. Use real lookup workflows or clearly marked examples; avoid fabricated response data presented as live results. Do not commit API keys, environment files, private infrastructure addresses or user data. Use plain punctuation without em dashes in public prose.

The connector code is MIT licensed. API access and source data remain subject to their own terms. New providers need verified public hosts, documented access requirements and maintainable schemas; discuss additions in an issue before implementing them.
