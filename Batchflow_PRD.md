# Batchflow — Product Requirements Document

**Tagline:** Turn data into progress.

## Product Summary
Batchflow is an asynchronous CSV-import application. Users upload structured data, map source columns to target fields, validate records, run imports, and inspect failed rows.

## Goals
- Make CSV import safe and observable.
- Avoid blocking HTTP requests during processing.
- Give users clear row-level validation errors.
- Demonstrate background processing.

## Core Workflow
`Upload CSV → Inspect headers → Map fields → Validate → Queue import → Process → Review result`

## Required Screens
- Sign in
- Dashboard
- Import list
- New import
- Field mapping
- Validation preview
- Import progress
- Error rows
- Imported records
- Reports

## Upload Requirements
CSV only, configurable size limit, encoding validation, malformed-file rejection, source file stored in Cloudflare R2.

## Example Mapping
- `first_name` → First name
- `last_name` → Last name
- `email` → Email
- `company` → Company

## Import Statuses
`uploaded`, `mapping`, `queued`, `processing`, `completed`, `failed`.

## Validation
Use Zod for row-level validation. Store row number, field, source value, error message, and import ID.

## Background Processing
Preferred options: Netlify Background Functions, Cloudflare Queues, or a separate Node worker. For MVP choose the simplest option that supports the expected file size.

## Data Model
- `users`
- `imports`
- `import_mappings`
- `import_rows`
- `import_errors`
- `imported_records`

## Progress Tracking
Display total rows, processed rows, successful rows, failed rows, and percentage complete. Use polling or SSE.

## Error Export
Allow download of a CSV containing rejected rows and error reasons.

## Reporting
Total imports, average duration, success rate, errors by type.

## Testing
### Vitest
CSV parser, mapping logic, Zod validation, error aggregation.

### Playwright
Upload, map fields, run import, view progress, download errors.

## Technology Baseline
Astro, SolidJS, TypeScript, Vite, Node.js, Tailwind CSS, Neon Postgres, Neon Auth, direct SQL, Zod, Cloudflare R2, Resend, Vitest, Playwright, ESLint, Prettier, Sentry, GitHub Actions, Netlify, Cloudflare DNS.

## MVP Acceptance Criteria
- CSV upload works.
- Column mapping works.
- Valid rows are imported.
- Invalid rows are reported.
- User sees progress.
- Processing does not block the upload request.
- Error report can be downloaded.
