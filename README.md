# Revgenpro-project

Landing apps for **RevGenPro Solutions Pvt Ltd** in `ai-videos-web/` (Next.js 15 + Tailwind).

## Routes (kept separate — do not merge)

| Path | Offer |
|------|--------|
| `/` | Complete Online Presence (₹14,999) |
| `/product-advertisements` | AI Promotional Product Videos (₹1,499 / video) — standalone lead-gen page |

## Development

```bash
cd ai-videos-web
npm install
npm run dev -- --port 3458 --hostname 127.0.0.1
```

## Product video lead form

Enquiries on `/product-advertisements` `POST` to `/api/leads` for server-side validation and a WhatsApp handoff URL (CRM-ready; no fake client-side save).
