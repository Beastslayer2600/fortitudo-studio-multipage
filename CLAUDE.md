# CLAUDE.md

Website for Gert Fourie, financial adviser and representative of Liberty Group Limited (FSP 2409),
Pretoria. See README.md for commands and structure.

## Commands

- `npm run check`: lint, typecheck, unit tests. Run before every commit (the pre-commit hook does).
- `npm run build && npm run test:e2e`: smoke tests and axe across every route.
- Next.js is v16. Check `node_modules/next/dist/docs/` before using an API.

## Where copy lives

- Guides and insights: `content/articles.ts` (metadata) plus the page files under `app/(site)/`.
- Services: `content/services.ts`. Site-wide facts (URL, phones, email, response time): `lib/site.ts`.
- Never hard-code `https://fortitudostudios.com`; import `SITE_URL`. A test enforces this.

## Compliance rules (non-negotiable)

- Never invent facts, fees, qualifications, client numbers, returns or testimonials. Use a
  `[PLACEHOLDER]` and ask Gert.
- Testimonials must be real, attributable, consented and cleared by Liberty (FAIS General Code of
  Conduct, s14). Never write sample ones.
- Changes to regulated wording, calculators and their assumptions, disclaimers, or how personal
  data is collected or used ship only after Gert confirms Liberty compliance has seen them.
- Marketing email is opt-in only (POPIA s69): a separate, unticked checkbox, with the consent
  recorded. Never add anyone to a list from an enquiry alone.
- Keep the footer FSP disclosure and every "general information, not advice" note intact.
- Say "adviser", not "advisor" (except in the name of the FAIS Act).

## Voice

Calm, plain, first person ("I"). Short sentences. No hype, no urgency tricks, no product claims.
South African English (organise, programme, cheque).

## Boundaries

- Don't touch DNS, domains or other Vercel projects. Don't deploy to production without Gert.
- The repo is public: no keys, no client data, ever.
- Accessibility: WCAG 2.1 AA. Keep the skip link, visible focus ring, labelled inputs, 44px tap
  targets and `prefers-reduced-motion` handling. axe in CI must stay green.
