
# Custom Email API for Medusa v2

This module provides a dynamic SMTP-based custom email endpoint for Medusa v2.

## Endpoint

**POST** `/store/custom-email`

### Payload
```json
{
  "to": "user@example.com",
  "subject": "Custom Subject",
  "text": "Plain text body",
  "html": "<h1>HTML Body</h1>"
}
```

## Installation

1. Copy this module into `src/modules/` of your Medusa v2 project.
2. Add to `medusa-config.ts`:

```ts
{
  resolve: "./src/modules/custom-email-api",
  options: {},
}
```

3. Restart your Medusa server.
# medusa-nodemailer-smtp
