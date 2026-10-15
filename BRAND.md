# Monad Labs brand kit

Tech studio. Dark, precise, electric. The logo (`public/monad-logo-white.svg`) and favicon stay as they are; this kit covers color, type and usage.

All tokens live in `app/globals.css` under `@theme`, so they work as Tailwind classes (`bg-void`, `text-cyan`, `border-line`, ...) and as CSS variables (`var(--color-cyan)`).

## Colors

### Surfaces

| Token    | Hex       | Use                                   |
| -------- | --------- | ------------------------------------- |
| `void`   | `#06070D` | Page background                       |
| `carbon` | `#0D1019` | Bands, cards, terminal panel          |
| `panel`  | `#131826` | Raised cards, hover state             |
| `line`   | `#222A3D` | Borders, dividers, grid lines         |

### Text

| Token  | Hex       | Contrast on `void` | Use                         |
| ------ | --------- | ------------------ | --------------------------- |
| `ink`  | `#F2F5FF` | 18:1               | Headings, body on dark      |
| `mist` | `#9AA4BD` | 8.1:1              | Secondary copy              |
| `dim`  | `#737D99` | 4.9:1              | Labels, meta, footer        |

### Signal colors

| Token     | Hex       | Role                                                                     |
| --------- | --------- | ------------------------------------------------------------------------ |
| `volt`    | `#3563FF` | Primary action. Buttons and the main CTA. White text on it passes AA.   |
| `volt-hi` | `#6189FF` | Hover state for volt, and volt when used as text on dark.               |
| `cyan`    | `#19E3FF` | Links, focus rings, section indices, interactive highlights.            |
| `lime`    | `#C4FF3D` | "Live / done / ok" signals: status dots, checkmarks. Use sparingly.     |
| `pink`    | `#FF3D9A` | Rare accent only (one per view at most). Never for errors on its own.   |

### Spectrum gradient

`volt-hi → cyan → lime` at 100°. Classes: `text-spectrum` (headline highlights) and `bg-spectrum` (glows). Use it on one phrase per section at most.

## Rules

- Dark first. `void` is the canvas; light surfaces are for product cards that carry their own brand.
- One `volt` button per view. Everything else is a ghost button or a cyan link.
- Cyan is for things you can interact with. Lime is for things that are done or live.
- Glows are blurred circles of `volt`, `cyan` or the spectrum at 15–25% opacity, never hard gradients behind text.
- Blueprint grid (`bg-blueprint`) only behind hero and CTA blocks, always masked to fade out.

## Typography

| Role    | Font            | Notes                                                     |
| ------- | --------------- | --------------------------------------------------------- |
| Display | Sora 600/700    | Headlines, tight tracking (`-0.03em` on hero)             |
| Body    | DM Sans         | Paragraphs, 16–18px, relaxed line height                  |
| Mono    | IBM Plex Mono   | Labels, tags, nav, buttons: uppercase, `0.14–0.2em` track |

Section labels follow the pattern `[01] Services ——` in mono, with the index in cyan.
