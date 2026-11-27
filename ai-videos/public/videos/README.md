# Hero explainer (16:9)

| File | Purpose |
|------|---------|
| `hero-explainer-16x9.mp4` | Inline hero explainer (1920×1080, ~15s). Center-cropped from creative demos into true landscape — fills the frame with **no pillarboxing**. |
| `hero-explainer-poster.jpg` | Poster frame for the hero player |

To replace the explainer, drop a new **true 16:9 landscape** MP4 at `hero-explainer-16x9.mp4` (full-bleed content, not a portrait clip letterboxed/pillarboxed into 16:9) and update `hero-explainer-poster.jpg`. Paths are wired in `src/lib/site-content.ts` → `hero.explainer`.

Portrait demos used in the portfolio carousel stay under `creative/`.
