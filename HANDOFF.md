# CAMUS — Project Handoff

Context transfer for a new Claude account / collaborator picking up this project.
Pair this with `CLAUDE.md` (architecture + conventions) and `MONITORING.md` (ongoing monitoring).

---

## 0. First 10 minutes (new collaborator checklist)

1. Clone the repo: `git clone https://github.com/Petitshit/Camus-AI.git`
2. `cd Camus-AI && npm install`
3. `npm run dev` → open http://localhost:3000
4. Read `CLAUDE.md` (auto-loads in Claude Code) → then this file → then `MONITORING.md`
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
| **Google Search Console** | Indexing/sitemap | Verified for `www.camus.one` via HTML file `public/google63f135264508b52b.html`. Sitemap submitted. |
| **Google Analytics 4** | Traffic | Code is wired but **NOT active** — needs `NEXT_PUBLIC_GA_ID` (G-XXXXXXXXXX) set in Vercel env vars, then redeploy. |
| **Bing Webmaster / Baidu 资源平台** | China + broader indexing | NOT set up yet. Recommended (Baidu feeds Chinese AI engines). |

---

## 3. Open loops / TODO (in rough priority order)

### Needs info from the human owner
- [ ] **Founder + team `Person` schemas** — spec wants them on the Organization schema, but we need real names + job titles + alumni + LinkedIn URLs. Placeholders were intentionally skipped (invalid schema). Add to `layout.tsx` `organizationSchema` as `founder` / `employee` once provided.
- [ ] **Zhihu / WeChat / Weibo URLs** for `sameAs` — Chinese social profiles. Skipped because URLs were unverified. Add to `layout.tsx` `sameAs` array when confirmed real.
- [ ] **GA4 Measurement ID** → set `NEXT_PUBLIC_GA_ID` in Vercel env vars to activate analytics.

### Doable now (no new info)
- [ ] **Bing Webmaster Tools** + **Baidu 资源平台** setup + sitemap submission (mirror the GSC process). High value for Chinese AI discoverability.
- [ ] **Apex redirect 301 vs 307** — currently 301 (good). If it ever reverts to 307, fix via Vercel domain settings (redirect type) — the `next.config.ts` redirect is a backup layer.
- [ ] **More Insights articles** — `/insights` is built as a series. Add via `data/insights.ts` (index metadata) + a new `app/insights/<slug>/` folder (server shell + ArticleContent + Article schema + version meta). Copy the `redefining-geo` article as a template.
- [ ] **Per-article OG images** — currently one site-wide OG image. Could add `app/insights/<slug>/opengraph-image.tsx` per article.

### Decisions the owner has made (don't re-litigate without asking)
- **URL structure**: Chinese About is `/about/zh` (NOT `/zh/about/`). A teammate spec kept proposing `/zh/about/`; owner chose to keep `/about/zh`. Migrating would break indexing.
- **English /about content**: kept as the "Camus GEO Standard / Camus Solution" structure. A spec proposed rewriting it to mirror the Chinese page (What is GEO / Approach / Team / Services / Trust / Contact). Owner chose to KEEP current English content. → The two language pages are therefore NOT literal translations (fine for SEO, slightly weaker for strict AI entity-matching).
- **Skipped on /about/zh**: the "no blockchain/DeFi/Web3/crypto/NFT" trust clarifier, and a static Contact section. Owner chose to skip both.

---

## 4. Recurring rituals (see MONITORING.md for detail)

- **Weekly (~15 min)**: GSC quick check + run the 15 AI queries across ChatGPT/Claude/Perplexity/Doubao/DeepSeek, log citation results in a Google Sheet.
- **Monthly (~30 min)**: Bing + Baidu, social-preview check, schema re-validation, competitor scan, Core Web Vitals.
- **Quarterly (~1 hr)**: month-over-month trends, content-gap analysis → pick next articles.
- **Passive**: daily GitHub Action emails on any site-health regression.

---

## 5. Session history (what was built, May 2026)

Chronological, so a new Claude understands how the codebase got here:

1. **About rewrite** (PR #2) — new hero, "Camus GEO Standard" section + table, kept the 3 differentiators as "Camus Solution".
2. **Insights + FAQ + base schema** (PR #2 cont.) — new `/insights` section + first article; footer redesigned with collapsible FAQ panel + GEO-vs-SEO table; removed `/contact` page (duplicated the audit modal); email → `echoliu@camus.one`; Organization + FAQPage + Article + DefinedTerm schemas added.
3. **Sitemap/robots/llms/redirect** (PR #2 cont.) — `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, apex→www 301.
4. **GSC verification** — `public/google63f135264508b52b.html` pushed; sitemap submitted to Google Search Console.
5. **OpenGraph metadata** (PR #3) — site-wide OG/Twitter, dynamic OG image, per-page metadata via server-shell split.
6. **Monitoring system** (PR #4) — `MONITORING.md`, daily GitHub Action, Vercel Analytics + GA4 wiring.
7. **Chinese About page** (PR #5) — `/about/zh` + `LanguageToggle` component + hreflang.
8. **Expanded Organization schema** (PR #6) — `hasOfferCatalog` (5 services), `address`, `areaServed`, `slogan`, expanded `knowsAbout`, Chinese keywords, inline DefinedTerm for GEO + 信息架构.
9. **Bilingual entity signaling** (PR #7) — aligned titles, per-route `<html lang>` via `middleware.ts`, keyword-rich anchors. (Initially included invalid `inLanguage`/`descriptionInLanguage`/`LanguageString` from a spec.)
10. **Schema validator fix** (PR #8) — removed the invalid fields, replaced `inLanguage`→`knowsLanguage`, dropped `descriptionInLanguage`. Schema.org Validator now clean.

---

## 6. Gotchas learned (avoid repeating)

- **Validate teammate-supplied schemas.** Specs contained invalid schema.org (`inLanguage` on Organization, `descriptionInLanguage`, `LanguageString`). Always run https://validator.schema.org/ before merging schema changes.
- **PR-merge race**: don't merge while still pushing to the branch (see CLAUDE.md). PR #7→#8 recovery was caused by this.
- **Vercel preview URLs require auth** if previews are private — the owner may see a 401 wall. Either get Vercel access or verify on production after merge.
- **Cold starts**: first request after idle can be ~5s; warm is ~0.3s. Not a code bug.
- **`CLAUDE.md` location**: keep it INSIDE `camus-website/` (the git repo + the folder Claude opens) so it travels and auto-loads. (There's an older copy in the parent `宰由 Claude/` folder, outside the repo.)
