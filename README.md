# Revgenpro-project

AI Trending Videos landing app for **RevGenPro Solutions**.

- **Live URL:** https://ai-videos.apps.grok.bot/
- **Source app:** `ai-videos-web/` (Next.js)

## Development

```bash
cd ai-videos-web
npm install
npm run dev -- --port 3458 --hostname 127.0.0.1
```

## Recent change

Mobile hero category cards (Love Story / Kids / Horror) now render as a vertical stack on small screens instead of `hidden sm:block` absolutely positioned tiles that overflow off-screen.