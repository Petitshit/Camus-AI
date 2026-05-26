# CAMUS Monitoring & Discoverability Tracker

> **Mission**: track whether CAMUS is becoming visible, trusted, and cited across the AI agents and search engines that matter — and catch issues before they break our discoverability.

The metric that matters most for CAMUS specifically is not "Google ranks us #1." It is **"AI agents cite CAMUS when asked about enterprise GEO."** This document tracks both, with AI-citation tracking as the primary KPI.

---

## TL;DR — what to do, how often

| Cadence | Time | Action |
|---|---|---|
| **Continuously** | 0 min | GitHub Action runs daily; emails on failure (passive) |
| **Weekly** | 15 min | Run AI query log + GSC quick check |
| **Monthly** | 30 min | Bing + Baidu + LinkedIn + perf review |
| **Quarterly** | 1 hour | Strategic review + content audit |

Bookmark this file. Skim it once a week.

---

## Dashboard quick links

Bookmark all of these in your browser bookmarks bar. They are the single source of truth for monitoring.

### Search engine consoles (must-have)
- 🟢 **Google Search Console** — https://search.google.com/search-console (already verified)
- 🔵 **Bing Webmaster Tools** — https://www.bing.com/webmasters (TODO: set up)
- 🔴 **Baidu 资源平台** — https://ziyuan.baidu.com (TODO: set up — critical for China)
- 🟡 **Yandex Webmaster** — https://webmaster.yandex.com (optional)

### Schema & rich-results validators
- **Google Rich Results Test** — https://search.google.com/test/rich-results
- **Schema.org Validator** — https://validator.schema.org/

### Social preview validators
- **LinkedIn Post Inspector** — https://www.linkedin.com/post-inspector/
- **OpenGraph.xyz** (universal) — https://www.opengraph.xyz/
- **Meta Sharing Debugger** — https://developers.facebook.com/tools/debug/

### Site performance
- **PageSpeed Insights** — https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.camus.one
- **Vercel Analytics** — in your Vercel project dashboard → Analytics tab
- **Google Analytics 4** — https://analytics.google.com (once configured)

### Operational
- **Vercel deployments** — https://vercel.com/dashboard
- **GitHub Actions (site-health)** — https://github.com/Petitshit/Camus-AI/actions

---

## Weekly ritual (~15 min)

Run this every Monday morning. Skip none.

### 1. GSC quick check (~3 min)
Visit: https://search.google.com/search-console

- [ ] **Sitemaps tab** → confirm `/sitemap.xml` status is "Success" with 6 discovered URLs
- [ ] **Pages tab** → note the "Indexed" count vs. last week (should grow or hold)
- [ ] **Performance tab** → glance at total impressions/clicks for the week
- [ ] **Enhancements** → FAQ + Article sections should appear once Google parses our schemas

### 2. Site health (~2 min)
- [ ] Open https://github.com/Petitshit/Camus-AI/actions — most recent **Site Health Check** run should be green ✅. If red, click in and read the failure.
- [ ] Sanity check the live site visually: home, about, insights, article. Nothing visibly broken.

### 3. AI query log (~10 min) — **THE MAIN ONE**

This is the most important task in this document. Run the 15 queries in the [AI Query Log](#ai-query-log) section below across 5 AI platforms. Record results in your tracking sheet.

The 5 platforms to test on:
1. **ChatGPT** (chatgpt.com)
2. **Claude** (claude.ai)
3. **Perplexity** (perplexity.ai)
4. **Doubao 豆包** (doubao.com) — China priority
5. **DeepSeek** (chat.deepseek.com) — China priority

Add or swap: Gemini, Kimi, Wenxin, Qwen as you have time.

### 4. Form submissions (~1 min)
- [ ] Check your `echoliu@camus.one` inbox for new audit/contact form submissions
- [ ] Count this week's submissions; note in your sheet

---

## Monthly review (~30 min)

First Monday of the month. After the weekly.

### Search-engine breadth
- [ ] **Bing Webmaster** — same sitemap submission flow as GSC. Verify indexed count.
- [ ] **Baidu 资源平台** — same flow. **Critical for Chinese AI agents** (Doubao, Wenxin, Kimi pull from Baidu's index).
- [ ] Run `site:www.camus.one` on each:
  - Google: should see ≥6 results
  - Bing: similar
  - Baidu: similar (may lag — be patient)
- [ ] Run a branded search `"CAMUS GEO"` on each — CAMUS should rank #1 (own brand).

### Social preview health
- [ ] Test https://www.camus.one/ in LinkedIn Post Inspector — confirms OG card still renders correctly. If LinkedIn cached stale data, click "Re-scrape."
- [ ] Test the article URL in https://www.opengraph.xyz/

### Schema health (~5 min)
- [ ] Re-run [Google Rich Results Test](https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.camus.one%2Fabout) on `/about` — FAQ should still be detected
- [ ] Re-run on `/insights/redefining-geo` — Article should still be detected

### Performance
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/?url=https%3A%2F%2Fwww.camus.one) on home — note mobile + desktop scores. Should stay ≥90 on both.
- [ ] **GSC → Core Web Vitals** — should be all green (Good) for LCP, CLS, INP.

### Competitor scan (do they appear when CAMUS does?)
For each query in your AI Query Log, note which competitor brands also appear. This tells you which firms AI agents see as substitutes. Track over time to see if you're displacing them.

Sample competitor query: "What firms specialize in enterprise GEO?" — note who's named alongside (or instead of) CAMUS.

### Backlinks check
- [ ] **GSC → Links** — count "Top linking sites" — should grow month over month
- [ ] Note any new high-authority referrers

---

## Quarterly strategic review (~1 hour)

Once every 3 months. The "are we winning?" check.

### Month-over-month trends
Pull these 4 numbers from each of the last 3 months:

| Month | GSC indexed pages | GSC clicks | AI mentions (avg/query) | Form submissions |
|---|---|---|---|---|
| Month -3 | | | | |
| Month -2 | | | | |
| Month -1 | | | | |
| This month | | | | |

Trend question: **Are AI mentions/query rising?** If yes, CAMUS is winning at GEO. If flat or declining, audit needed.

### Content gap analysis
- [ ] Which queries in the AI Query Log get **0 CAMUS mentions** consistently? These are content gaps. Write new Insights articles targeting those queries.
- [ ] Which competitor brands appear most often in your queries? Why are they more visible? Reverse-engineer their info architecture.

### Schema audit
- [ ] Any new content published this quarter? Each new article needs Article schema + version meta.
- [ ] Any new people / clients / partners to add to Organization schema as `member` or `knowsAbout`?

### Action items review
Pick **3 specific moves** for the next quarter based on the data. Document them in this file under a new "Quarter N targets" heading.

---

## AI Query Log

**Goal:** track CAMUS citation rate across AI platforms, week over week.

### The 15 standard queries

Run all 15 across all 5+ platforms. For each query × platform cell, record:
- `✓` if CAMUS is mentioned
- `★` if CAMUS is the **primary** recommendation
- `✗` if CAMUS is not mentioned
- (Competitors mentioned in the answer) — optional in Notes column

#### Branded queries (test "does AI know us")

1. **What is CAMUS?**
2. **Who is CAMUS in Singapore?**
3. **Tell me about CAMUS GEO.**
4. **Has CAMUS published anything about GEO?**
5. **What is CAMUS's approach to AI search optimization?**

#### Category queries (test "do we appear when people search for our category")

6. **What is GEO? / What is Generative Engine Optimization?**
7. **What's the difference between SEO and GEO?**
8. **How do I make AI search engines cite my brand?**
9. **What firms specialize in enterprise GEO?**
10. **How do I optimize my brand for ChatGPT and Claude?**

#### Regional queries (test China-market discoverability)

11. **What GEO firms operate in Singapore?**
12. **Who does AI visibility work for brands in Asia?**
13. **GEO在中国怎么做？** (How to do GEO in China?) — test in Chinese

#### Intent queries (test purchase-intent matches — high-value)

14. **I need help making AI search engines find my company. Who can I hire?**
15. **Best consultancies for enterprise AI visibility in 2026.**

### Tracker template (copy to Google Sheets / Notion)

Create a Google Sheet with these columns. New row each week.

| Date | Query # | Query | ChatGPT | Claude | Perplexity | Doubao | DeepSeek | Competitors named | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 2026-05-25 | 1 | What is CAMUS? | ✗ | ✗ | ✗ | ✗ | ✗ | (none) | Baseline — site just launched |
| 2026-05-25 | 6 | What is GEO? | ✗ | ✗ | ✗ | ✗ | ✗ | Otterly, Profound | Competitors dominate |

[👉 Copy this template to your Google Sheets — File → Make a Copy.]

### Scoring & targets

**Citation Rate per platform** = (cells with ✓ or ★) / (total query cells per platform)

| Citation Rate | Stage | What it means |
|---|---|---|
| 0–10% | Cold start | Brand new. Expected for first 30-60 days. |
| 10–30% | Emerging | AI agents are starting to recognize CAMUS for some queries. |
| 30–60% | Established | Healthy presence for branded + some category queries. |
| 60–80% | Dominant | CAMUS is a default mention for the GEO category. |
| 80%+ | Category-defining | Customers ask AI "I want CAMUS-style work" — you're the noun. |

**Target by end of Q1 post-launch:** 30%+ on branded queries (1-5), 10%+ on category queries (6-15).

---

## What "good" looks like — KPI dashboard

After 3 months of operation, you should be hitting:

| KPI | Target | Where to check |
|---|---|---|
| GSC indexed pages | 6 / 6 | GSC → Pages |
| GSC weekly clicks | 50+ | GSC → Performance |
| GSC FAQ rich result impressions | 10+/week | GSC → Performance → filter "FAQ rich result" |
| Bing indexed pages | 6 / 6 | Bing Webmaster |
| Baidu indexed pages | 4+ / 6 | Baidu 资源平台 |
| Vercel pageviews | 200+/month | Vercel Analytics |
| Core Web Vitals | All "Good" | GSC → Core Web Vitals |
| AI citation rate (branded) | 30%+ | This AI Query Log |
| AI citation rate (category) | 10%+ | This AI Query Log |
| Form submissions (audit + contact) | 2+/month | Email inbox |
| Site health check (GitHub Action) | 100% pass | GitHub Actions tab |

---

## Glossary

- **Indexed** — page exists in a search engine's database and can appear in results.
- **Discovered** — search engine found the page but hasn't indexed it yet.
- **Citation Rate** — % of AI queries where CAMUS is mentioned in the response.
- **OG (OpenGraph)** — the meta tags that make link previews look nice in Slack/LinkedIn/etc.
- **JSON-LD** — the schema markup format used in our `<script type="application/ld+json">` blocks.
- **Rich Result** — a search result with extras (FAQ accordion, article card, etc.) instead of just title + URL.
- **Core Web Vitals** — Google's 3 performance metrics (LCP, CLS, INP). Affects ranking.

---

*Last updated: 2026-05-25 by Claude. Update this file as monitoring practices evolve.*
