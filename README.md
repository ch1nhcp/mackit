# mackit

Ninite for macOS. Tick the apps you want, paste the generated `brew install`
command into Terminal, walk away.

mackit doesn't execute anything on your machine — it builds a transparent shell
script you can read and run yourself. No daemons, no installers, no accounts.

```sh
brew install --cask google-chrome slack visual-studio-code raycast
brew install gh
```

## Status

Early alpha. The single-page UI, selection state, and command generator are
wired up against a small placeholder catalog (~20 apps across 7 categories).
The full curated catalog and real app icons land next.

## How it works

1. Tick apps in the grid — categories run from Browsers and Productivity to
   Developer and Creative.
2. A sticky bar at the bottom shows the running count and opens an install
   dialog.
3. The dialog gives you two flavours of the same payload:
   - **One-liner** — `brew install --cask … && brew install …` for users who
     already have Homebrew.
   - **Full script** — `set -e`, Homebrew bootstrap if missing, then the
     installs. Available as a `.sh` download.

That's it. mackit never runs the script — that's your call, in your terminal.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4** with shadcn/ui primitives
- **TypeScript 5**
- A Revolut-inspired design language documented in [DESIGN.md](DESIGN.md):
  Aeonik-proxied display type, near-black + white binary, universal pill
  buttons, zero shadows.

## Project layout

```
src/
├── app/
│   ├── page.tsx                 # renders MackitHome
│   ├── layout.tsx               # navbar + theme provider
│   └── globals.css              # design tokens, pill button utilities
├── components/mackit/
│   ├── MackitHome.tsx           # single-page composition
│   ├── AppCard.tsx              # selectable tile
│   ├── AppIcon.tsx              # category-tinted letter avatar
│   ├── SelectionBar.tsx         # sticky bottom CTA bar
│   └── InstallDialog.tsx        # one-liner / full-script tabs
└── lib/
    └── catalog.ts               # apps, categories, generateScript()
```

## Getting started

Requires Node 20.18+ or Bun 1.3.5+, and `pnpm` (workspace uses
`pnpm-workspace.yaml`).

```sh
pnpm install
pnpm dev
```

App runs on `http://localhost:3000`.

Other scripts:

```sh
pnpm build         # production build (turbopack)
pnpm lint          # eslint
pnpm type-check    # tsc --noEmit
pnpm format        # prettier write
```

## Adding apps to the catalog

Edit [src/lib/catalog.ts](src/lib/catalog.ts) and append to the `apps` array:

```ts
{
    id: 'rectangle',          // homebrew token (cask or formula name)
    name: 'Rectangle',
    type: 'cask',             // 'cask' for GUI apps, 'formula' for CLIs
    category: 'utilities',    // see CategoryId type
    description: 'Window manager',
    homepage: 'https://rectangleapp.com',
    popular: true,            // optional — surfaces on landing
}
```

The generator splits `cask` and `formula` into separate `brew install` calls
automatically.

## License

MIT — see [LICENSE.md](LICENSE.md).
