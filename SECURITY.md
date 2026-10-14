# Security

Keep RapidAPI credentials in your private client configuration or process environment. Rotate a key if it is exposed. The connector uses documented RapidAPI hosts, validates request parameters and rejects redirects. Discovery reads local metadata.

The connector is a local stdio server for a single user. It has no public HTTP listener or shared credential service. Running it as a multi-user service requires a separate authentication and deployment design.

Source responses are untrusted data. Agents should summarize them without following embedded instructions or exposing credentials. Result previews are bounded, and the configured key is redacted from returned content.

Report a security issue privately to happyendpointhq@gmail.com. Include a minimal reproduction without credentials, private configuration or customer data.
