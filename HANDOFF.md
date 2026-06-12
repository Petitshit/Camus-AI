# CAMUS — Project Handoff

Context transfer for a new Claude account / collaborator picking up this project.
Pair this with `CLAUDE.md` (architecture + conventions), `MONITORING.md` (ongoing monitoring), and `CHINA-SEO.md` (China + MENA discoverability).

---

## 0. First 10 minutes (new collaborator checklist)

1. Clone the repo: `git clone https://github.com/Petitshit/Camus-AI.git`
2. `cd Camus-AI && npm install`
3. `npm run dev` → open http://localhost:3000
4. Read `CLAUDE.md` (auto-loads in Claude Code) → then this file → then `MONITORING.md` + `CHINA-SEO.md`
5. Confirm access to the accounts in §2 below.

---

## 1. What this project is

The marketing website for **CAMUS**, an enterprise GEO (Generative Engine Optimization) firm in Singapore. The site is also a live demo of CAMUS's product — it carries full Schema.org / hreflang / AI-discoverability markup. See `CLAUDE.md` for the full architecture.

**Production**: https://www.camus.one
**Repo**: https://github.com/Petitshit/Camus-AI (GitHub owner: `Petitshit`)
**Contact email shown on site**: `echoliu@camus.one`
**Form relay inbox**: `yimei@yy-labs.xyz` (FormSubmit.co)

---

## 2. Accounts & access (the human owner manages these)

| Service | Purpose | Status / Notes |
|---|---|---|
| **GitHub** (`Petitshit/Camus-AI`) | Source of truth | Owner has access. New collaborator needs push access or fork. Auth via `gh auth login` (browser flow). |
| **Vercel** | Hosting / deploys | Set up under a teammate's account (the site owner did NOT have direct Vercel access as of last session). Domains `camus.one` + `www.camus.one` configured; `www` is primary; apex 301→www. **To change domains/redirects/env vars you need Vercel dashboard access** — ask the teammate who owns it. |
| **Domain registrar** | DNS for camus.one | Bought via Cloudflare/Namecheap/GoDaddy-class registrar (not Vercel). DNS records point at Vercel. |
| **Google Search Console** | Indexing/sitemap | ✅ Verified (`public/google63f135264508b52b.html`). Sitemap submitted. |
| **Bing Webmaster Tools** | Indexing (Bing/Yahoo/DuckDuckGo/Perplexity) | ✅ Verified (`public/BingSiteAuth.xml`). Submit sitemap + use "Import from GSC". |
| **Baidu 资源平台** | China indexing (feeds Doubao/Wenxin/Kimi) | ⏳ Meta-tag verification deployed (`baidu-site-verification` in `layout.tsx`). Baidu's verifier returned a transient "can't reach server" once — retry the VERIFY button; site is reachable from China (confirmed via itdog.cn). File `public/baidu_verify_codeva-mORdTXNURG.html` is a backup method. |
| **ByteDance 头条搜索 / Sogou** | China indexing | ⬜ Not yet. Toutiao directly feeds Doubao — highest-value remaining China submission. `layout.tsx` `verification` block has env-var slots ready (`NEXT_PUBLIC_*_SITE_VERIFICATION`). |
| **Google Analytics 4** | Traffic | Code wired but **NOT active** — set `NEXT_PUBLIC_GA_ID` (G-XXXXXXXXXX) in Vercel env vars, then redeploy. |

---

## 3. Open loops / TODO (in rough priority order)

### Needs info from the human owner
- [ ] **Founder + team `Person` schemas** — spec wants them on the Organization schema, but we need real names + job titles + alumni + LinkedIn URLs. Placeholders were intentionally skipped (invalid schema). Add to `layout.tsx` `organizationSchema` as `founder` / `employee` once provided.
- [ ] **Zhihu / WeChat / Weibo URLs** for `sameAs` — owner confirmed **no Zhihu presence yet**, so it was NOT added. Add to `layout.tsx` `sameAs` when real profiles exist.
- [ ] **GA4 Measurement ID** → set `NEXT_PUBLIC_GA_ID` in Vercel env vars to activate analytics.
- [ ] **⚠️ Arabic proofreading** — the Arabic on `/about/ar` and `/insights/redefining-geo/ar` came from the teammate's spec (trustworthy). BUT the **MENA Cornerstone** article (`/insights/geo-for-mena-brands/ar`) Arabic is **machine-authored** (translated from the English by Claude). An Arabic speaker should proofread it.

### Doable now (no new info)
- [ ] **Baidu retry** — click VERIFY again (transient failure last time). Then submit sitemap in Baidu.
- [ ] **ByteDance 头条搜索资源平台** submission (directly feeds Doubao) — get the verification token, drop it in the `layout.tsx` `verification` block or `public/`. Then **Sogou**. See `CHINA-SEO.md`.
- [ ] **MENA external signals** (per the strategy memo, `CHINA-SEO.md` equivalent for MENA): Zawya company profile (high Google-AI citation weight in the Gulf), LinkedIn MENA activity, distribute the MENA Cornerstone as a LinkedIn Article in Arabic. Trust platforms differ from China — NOT Zhihu/WeChat.
- [ ] **More Insights articles** — pattern is established (2 articles now). Add via `data/insights.ts` + `app/insights/<slug>/` (+ `/ar`). Copy `geo-for-mena-brands` (bilingual) or `redefining-geo` as a template.
- [ ] **Per-article OG images** — currently one site-wide OG image. Could add `app/insights/<slug>/opengraph-image.tsx` per article.

### Decisions the owner has made (don't re-litigate without asking)
- **URL structure**: language is a **suffix** — `/about/zh`, `/about/ar`, `/insights/<slug>/ar`. Teammate specs repeatedly proposed locale-*prefix* (`/zh/about/`, `/ar/about/`); owner kept the suffix form. Migrating would break already-indexed URLs.
- **English /about content**: kept as the "Camus GEO Standard / Camus Solution" structure (NOT rewritten to mirror the zh/ar "What is GEO / Methodology / Team / Services / Trust" structure). So the language pages are not literal translations — fine for SEO, intentional.
- **Crypto/Web3 disclaimer**: SKIPPED on `/about/zh`, but INCLUDED on `/about/ar` (it was in the Arabic source content and the owner chose to keep it). The articles carry zero crypto mentions.
- **MENA strategy** (from teammate memo): English-primary, Arabic-auxiliary bilingual approach; always expand "GEO" in Arabic (bare "GEO" reads as جغرافيا/geography); Singapore positioned as a neutral trusted APAC hub; relationship-driven tone; avoid religion/politics/alcohol references.

---

## 4. Recurring rituals (see MONITORING.md for detail)

- **Weekly (~15 min)**: GSC quick check + run the 15 AI queries across ChatGPT/Claude/Perplexity/Doubao/DeepSeek, log citation results in a Google Sheet.
- **Monthly (~30 min)**: Bing + Baidu, social-preview check, schema re-validation, competitor scan, Core Web Vitals.
- **Quarterly (~1 hr)**: month-over-month trends, content-gap analysis → pick next articles.
- **Passive**: daily GitHub Action emails on any site-health regression.

---

## 5. Session history (what was built, May–Jun 2026)

Chronological, so a new Claude understands how the codebase got here:

1. **About rewrite** (PR #2) — new hero, "Camus GEO Standard" section + table, kept the 3 differentiators as "Camus Solution".
2. **Insights + FAQ + base schema** (PR #2 cont.) — new `/insights` section + first article; footer redesigned with collapsible FAQ panel + GEO-vs-SEO table; removed `/contact` page; email → `echoliu@camus.one`; Organization + FAQPage + Article + DefinedTerm schemas.
3. **Sitemap/robots/llms/redirect** (PR #2 cont.) — `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, apex→www 301.
4. **GSC verification** — `public/google63f135264508b52b.html`; sitemap submitted to Google Search Console.
5. **OpenGraph metadata** (PR #3) — site-wide OG/Twitter, dynamic OG image, per-page metadata via server-shell split.
6. **Monitoring system** (PR #4) — `MONITORING.md`, daily GitHub Action, Vercel Analytics + GA4 wiring.
7. **Chinese About page** (PR #5) — `/about/zh` + `LanguageToggle` + hreflang.
8. **Expanded Organization schema** (PR #6) — `hasOfferCatalog` (5 services), `address`, `areaServed`, `slogan`, expanded `knowsAbout`, Chinese keywords, inline DefinedTerm.
9. **Bilingual entity signaling** (PR #7) — aligned titles, per-route `<html lang>` via `middleware.ts`, keyword-rich anchors. (Initially carried invalid `inLanguage`/`descriptionInLanguage`/`LanguageString` from a spec.)
10. **Schema validator fix** (PR #8) — replaced `inLanguage`→`knowsLanguage`, dropped `descriptionInLanguage`/`LanguageString`. Validator clean.
11. **China-SEO groundwork** (PR #10) — `CHINA-SEO.md` playbook + `verification` env-var slots in `layout.tsx` for Baidu/Bing/Sogou/Yandex.
12. **Bing + Baidu verification** (direct-to-main) — `public/BingSiteAuth.xml` (Bing ✅), `public/baidu_verify_*.html` + hardcoded `baidu-site-verification` meta tag (Baidu retry pending).
13. **Arabic /about + founding article** (PR #11) — `/about/ar` (RTL) + `/insights/redefining-geo/ar`; RTL infra (`dir` via `localeForPath`, Arabic font fallbacks); trilingual hreflang; `knowsLanguage` += `ar`; Arabic `alternateName`; 3-way `LanguageToggle`.
14. **Insights pill CTAs + MENA Cornerstone** (PR #12) — index shows one card per article with per-language "Read article" pills (no badges); NEW bilingual article `/insights/geo-for-mena-brands` (+ `/ar`) targeting Saudi/UAE/Qatar.
15. **Handoff docs refresh** (this PR) — brought `CLAUDE.md` + `HANDOFF.md` current (supersedes the stale PR #9).

---

## 6. Gotchas learned (avoid repeating)

- **Validate teammate-supplied schemas.** Specs repeatedly contained invalid schema.org (`inLanguage` on Organization, `descriptionInLanguage`, `LanguageString`). Always run https://validator.schema.org/ before merging.
- **PR-merge race (happened 3×)**: merging a PR while commits are still being pushed snapshots only what's on the branch at that instant. PR #7→#8, then PR #11→#12, then PR #9 went stale the same way. **Confirm the latest commit hash is in the PR before merging**, or wait for "that's the last commit." Recovery is a 30-sec cherry-pick onto a fresh branch — nothing is ever lost.
- **PDF/Pages Arabic extraction**: `pdftotext -enc UTF-8` recovers clean logical-order Arabic where manual stream parsing gives garbage (CID fonts). `.pages` files only render page 1 in their preview.jpg — render the PDF with `pdftoppm` to read all pages.
- **"GEO" in Arabic** reads as جغرافيا (geography) to Arabic AI — always expand the term in Arabic copy + register the Arabic descriptor in `alternateName`.
- **Vercel preview URLs require auth** if previews are private — the owner may hit a 401 wall. Verify on production after merge, or get Vercel access.
- **Cold starts**: first request after idle ~5s; warm ~0.3s. Not a code bug.
- **`CLAUDE.md` location**: keep it INSIDE `camus-website/` so it travels + auto-loads. (An older copy exists in the parent `宰由 Claude/` folder, outside the repo.)
