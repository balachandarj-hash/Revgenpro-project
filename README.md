# Revgenpro-project

AI Promotional Product Video landing app for **RevGenPro Solutions Pvt Ltd**.

- **Live URL:** https://ai-videos.apps.grok.bot/
- **Source app:** `ai-videos-web/` (Next.js 15 + Tailwind)
- **Offer:** AI Promotional Product Videos at **₹1,499 / video**

## Development

```bash
cd ai-videos-web
npm install
npm run dev -- --port 3458 --hostname 127.0.0.1
```

## Lead form

Enquiries `POST` to `/api/leads` for server-side validation. The handler returns a WhatsApp handoff URL for the team; it is structured for a future CRM integration (no fake client-side save).
