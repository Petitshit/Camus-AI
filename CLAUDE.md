# CLAUDE.md

Guidance for Claude Code (claude.ai/code) working in this repository. **Read this fully before making changes.**

## What this is

Marketing site for **CAMUS** — an **enterprise GEO (Generative Engine Optimization) system architecture** firm based in Singapore. CAMUS builds AI-native information architectures that make AI search engines (ChatGPT, Perplexity, Claude, Gemini, Doubao, DeepSeek, Kimi, Wenxin) understand, trust, and recommend a brand.

Positioning, in CAMUS's own words: *"We do not optimize content for AI. We design structured information systems."* The site itself is a dogfooding showcase — it carries the same Schema.org markup, hreflang, and AI-discoverability infrastructure that CAMUS sells.

**Positioning history (so old strings make sense):** v1 = "Generative Engine Optimization (GEO)". v2 pivot = "AI Trust & Conversion Solutions". v3 (current) = "enterprise GEO system architecture / AI visibility". Some legacy strings may still reference older framings — check git history before assuming a string is a bug.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server at http://localhost:3000
npm run build      # always run before pushing significant changes — Vercel fails the same way
npm run lint       # next lint
```

No tests in this repo.

## Deploy & hosting

- **Vercel** is wired to the GitHub repo `Petitshit/Camus-AI`. Pushing to `main` → production deploy. Pushing any other branch + opening a PR → preview deploy (URL posted as a check on the PR).
- **Production domain**: `https://www.camus.one` (apex `camus.one` 301-redirects to `www`).
- **Workflow**: feature branch → PR → review Vercel preview → merge to `main`. Don't push directly to `main` except for tiny operational files (e.g. search-console verification).
- ⚠️ **PR-merge race**: don't merge a PR while commits are still being pushed to its branch — the merge snapshots whatever's on the branch at that instant. Confirm the latest commit hash is in the PR before merging. (We hit this once; PR #7 merged before a fix commit landed, requiring PR #8 to recover it.)
- There's a dev-only `POST /api/deploy` route + `<DeployButton />` (visible only in `npm run dev`) that git-commits-and-pushes. Gated to `NODE_ENV === "development"`. Its hardcoded path (`/Users/v/Camus Website`) is stale — don't rely on it.

## Architecture

### Routes (Next.js 16 App Router, React 19, TypeScript, Tailwind 3)
- `/` — home, composed of ~13 section components in `app/page.tsx`
- `/about` — English; server shell (`page.tsx`) + client content (`AboutContent.tsx`)
- `/about/zh` — **Chinese**; server shell + `AboutZhContent.tsx`
- `/about/ar` — **Arabic** (RTL); server shell + `AboutArContent.tsx`
- `/case` — placeholder ("coming soon")
- `/package` — 3 engagement tiers (Foundation / Authority / Leadership)
- `/insights` — article index (`InsightsContent.tsx`). Each card is one article (built from `data/insights.ts`) with one outlined "Read article" pill per available language.
- `/insights/redefining-geo` (+ `/ar`) — founding article; EN + Arabic (RTL)
- `/insights/geo-for-mena-brands` (+ `/ar`) — MENA/GCC Cornerstone article; EN + Arabic (RTL)
- `/api/deploy` — dev-only git push route

**Language-route convention**: language is a **suffix** segment — `/about/zh`, `/about/ar`, `/insights/<slug>/ar`. (A teammate spec repeatedly proposed locale-*prefix* `/zh/about/`, `/ar/about/` — we kept the suffix pattern because the prefix form would break already-indexed URLs. Don't migrate.)

### Server-shell pattern (IMPORTANT)
Pages that need interactivity (modal state) are `"use client"`, but Next.js metadata can only be exported from **server** components. So bilingual/SEO pages are split:
- `page.tsx` — server component, exports `metadata`, renders the content component
- `XxxContent.tsx` — `"use client"`, holds all behavior

When adding metadata to an interactive page, use this split. Don't try to export metadata from a `"use client"` file.

### Modal state lives at the page root
`DiagnosisModal` (the audit-request form) is rendered once per page. Open state is `useState` at the page/content root, passed *down* via `onOpenModal` prop to `<Nav>`, `<Hero>`, `<FinalCta>`, CTA buttons. New CTAs follow this pattern — no context, no global store. The form POSTs to `https://formsubmit.co/ajax/yimei@yy-labs.xyz` (the relay inbox; displayed contact email is `echoliu@camus.one`).

### Theme is centralized in `config/theme.ts`
Single source of truth for colors + fonts. `tailwind.config.ts` and `app/layout.tsx` both import it. `layout.tsx` injects every color as a CSS custom property on `<body>`; section components reference them via inline `style={{ color: "var(--color-accent)" }}` — **this inline-var style is the project idiom, NOT Tailwind color classes**. `app/globals.css` also defines fallback values for the same vars — keep in sync. To add a color: add to `theme.ts` → then `tailwind.config.ts` + `layout.tsx` + `globals.css`.

Palette: text/dark `#26110F` (warm brown-black); tiered backgrounds `bg`/`bg-elevated`/`bg-card`; blue accent `#99BFF2` (Trust); green `#80BF84` (Conversion).

### Fonts are local @font-face (don't switch to next/font or Google Fonts)
`public/fonts/` via `@font-face` in `globals.css`:
- `--font-serif`: Season Serif (display headlines, italic accents) — Latin-only; CJK + Arabic fall back to system fonts
- `--font-sans`: Geist (body/UI)
- `--font-mono`: Geist Mono (eyebrow labels, terminal sections, numerals)

The font stacks (in `layout.tsx` cssVars + `globals.css` fallbacks) append Arabic system fonts (`"Noto Sans Arabic"`, `"Geeza Pro"`, `"Noto Naskh Arabic"`) so Arabic glyphs — absent from Geist/Season Serif — fall through per-glyph. Latin still renders in Geist; only Arabic characters use the fallback. No bundled Arabic font (respects the no-Google-Fonts rule).

## SEO / AI-discoverability system (CAMUS's core product, dogfooded)

This is load-bearing — CAMUS sells this exact infrastructure. Keep it correct.

- **Schema.org JSON-LD** rendered via `<script type="application/ld+json" dangerouslySetInnerHTML>`:
  - `layout.tsx` → site-wide `Organization` (`@id: https://www.camus.one/#organization`) with `slogan`, `address`, `areaServed`, `knowsLanguage` (`["en","zh-CN","ar"]`), `knowsAbout`, `hasOfferCatalog` (5 services), `sameAs`, `foundingLocation`, and `alternateName` including the Arabic "كاموس" + the expanded Arabic GEO term. **Exactly ONE Organization schema per page** — never duplicate it per-route.
  - `app/about/AboutContent.tsx` → `FAQPage` (built from `data/faqs.ts`)
  - `app/insights/*/ArticleContent.tsx` (+ Arabic `ArticleArContent.tsx`) → `Article` + embedded `Speakable`, with `inLanguage`
- **Inline microdata**: `DefinedTerm` (`itemScope itemType="https://schema.org/DefinedTerm"`) wraps CAMUS, GEO, 信息架构, and the Arabic GEO term in page copy.
- **Validate every schema** at https://validator.schema.org/ before merging. ⚠️ Teammate-supplied specs sometimes contain INVALID schema.org (`inLanguage` on Organization, `descriptionInLanguage`, `LanguageString` type are all invalid — we removed them; use `knowsLanguage` instead). Trust the validator, not the spec.
- **OpenGraph + Twitter** via Next.js Metadata API (`layout.tsx` defaults + per-page overrides). Dynamic OG image at `app/opengraph-image.tsx` (1200×630, generated by `next/og`).
- **Per-route `<html lang>` + `dir`**: `middleware.ts` exposes `x-pathname`; `layout.tsx`'s `localeForPath()` sets `lang="ar" dir="rtl"` for any `/ar` route, `lang="zh-CN"` for `/about/zh` (or `/zh/*`), else `lang="en" dir="ltr"`.
- **hreflang + canonical**: bidirectional alternates + self-canonical via `metadata.alternates`. About pages are trilingual (`en`/`zh-CN`/`ar`/`x-default`); article pages bilingual (`en`/`ar`/`x-default`). Mirrored in `app/sitemap.ts` language alternates.
- **`app/sitemap.ts`** (auto `/sitemap.xml`), **`app/robots.ts`** (auto `/robots.txt`, allows all crawlers), **`public/llms.txt`** (AI-crawler index).
- **Search-engine verification files — DO NOT delete** (each un-verifies its property): `public/google63f135264508b52b.html` (Google), `public/BingSiteAuth.xml` (Bing), `public/baidu_verify_codeva-mORdTXNURG.html` (Baidu file method — though Baidu verified via the meta tag in `layout.tsx`'s `verification` block instead).
- **RTL pages**: Arabic content components mirror their LTR siblings but flip directional details — `borderLeft`→`borderRight` accents, `ArrowLeft` mirrored, and Latin/URL runs wrapped in `.force-ltr` (defined in `globals.css`). Arabic uses no italics.
- **FAQ content** is single-sourced in `data/faqs.ts` and consumed by BOTH the footer (visible) and the About-page FAQPage schema. Google requires schema text to match visible text — keep them sourced from one place. FAQ copy uses "CAMUS" (all-caps).

## Monitoring & discoverability docs

- `MONITORING.md` — the playbook (weekly/monthly/quarterly cadences, 15 standard AI queries to test brand citation, KPI targets, dashboard links).
- `CHINA-SEO.md` — Chinese + (extend for) Arabic ecosystem playbook: Baidu/Bing/Toutiao/Sogou submission, Baidu Baike / Zhihu / WeChat source signals, and (MENA) Zawya / LinkedIn MENA. Verification status tracker lives at the top.
- `.github/workflows/site-health.yml` — daily GitHub Action, 11 checks (route 200s, apex 301, sitemap/robots/llms, schema integrity, OG image, GSC file, LinkedIn URL). Emails owner on failure.
- Analytics: `@vercel/analytics` (`<Analytics />` in layout, auto) + GA4 (gated behind `NEXT_PUBLIC_GA_ID` env var — set it in Vercel to activate).

## Conventions

- **Section skeleton**: `useRef` + `useInView({ once: true, margin: "-80px" })` + `fadeUp` variant with `custom={i}` stagger and `ease: [0.22, 1, 0.36, 1]`. Use `SectionLabel`, `SectionTitle`, `Button` from `components/ui/`.
- **Card hover**: `whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}`. Card radius is `rounded-lg` sitewide — don't regress to `rounded-2xl`.
- **Icons**: Lucide React only.
- **Chinese typography**: NO italics (CJK italic looks wrong) — use accent color for emphasis instead. CTA labels on `/about/zh` are translated; the audit modal itself stays English.
- **Arabic / RTL**: NO italics either. The audit modal stays English. The `LanguageToggle` (`components/LanguageToggle.tsx`) takes an `options` array; `ABOUT_LANG_OPTIONS` is the shared EN/中文/العربية set for the three About pages. New translated routes extend these patterns — keep the suffix-URL convention.
- **Anchor text**: internal links should carry keywords ("GEO", "AI Visibility") where natural — e.g. the About CTA says "Read Our GEO Insights" / "阅读 GEO 洞察". Don't keyword-stuff nav labels.

## Things to avoid

- No CMS / DB / backend (intentionally static).
- No new color values in components — add to `config/theme.ts` first (then tailwind config + layout + globals fallback).
- No `rounded-2xl` on cards. No refactoring inline `style={{var(...)}}` into Tailwind color classes. No second icon library. No `next/font`.
- Don't commit `.env*`, `.vercel/`, `node_modules/`, `.claude/`.
- Don't add Schema.org fields without validating them. Don't duplicate the Organization schema per-page.
- Don't delete the search-engine verification files in `public/` (Google / Bing / Baidu).
- Don't migrate language routes from suffix (`/about/ar`) to prefix (`/ar/about`) — breaks indexing.

## See also
- `HANDOFF.md` — accounts/access, open loops, what-to-do-next, session history.
