# CHINA-SEO.md — Chinese AI / Search Visibility Playbook

Pair this with `MONITORING.md`. This is the **Chinese ecosystem-specific** setup that gets CAMUS into Doubao / Wenxin / Kimi / DeepSeek / Baidu / Sogou.

> **Why this file exists**: in June 2026, Doubao searches for `camus.one` and `Camus GEO` returned "no website found" — despite the site being live and reachable from China. Root cause: Chinese search engines hadn't crawled it (we'd only submitted to Google). Chinese AI engines pull from Chinese search indexes. **Without these submissions, Chinese AI literally cannot see you.**

---

## Status tracker

| Platform | Submitted | Verified | Indexed | Notes |
|---|---|---|---|---|
| Google Search Console | ✅ | ✅ | ✅ | Verified via `public/google63f135264508b52b.html` |
| Baidu 资源平台 | ⬜ | ⬜ | ⬜ | **#1 priority** — biggest unlock for Chinese AI |
| ByteDance 头条搜索资源平台 | ⬜ | ⬜ | ⬜ | Direct source for Doubao |
| Sogou 站长平台 | ⬜ | ⬜ | ⬜ | Lower volume but easy |
| Bing Webmaster | ⬜ | ⬜ | ⬜ | Powers Yahoo + Perplexity partial |
| Yandex Webmaster | ⬜ | ⬜ | ⬜ | Optional (Russian + some global) |

Update the boxes as each step completes.

---

## Layer 2 — Search engine submissions

### 1. Baidu 资源平台 (🔴 do this first)

**URL**: https://ziyuan.baidu.com

#### Setup
1. Create or sign in with a Baidu account
2. **添加网站** (Add website) → enter `https://www.camus.one`
3. Choose verification method:

   | Method | How | Best when |
   |---|---|---|
   | **File verification** (recommended) | Baidu gives an HTML file (e.g. `baidu_verify_xxx.html`); upload to `public/` and push | You can ship a commit |
   | **Meta tag** | Baidu gives a `<meta name="baidu-site-verification">` token | Pure env-var deploy via Vercel |
   | **CNAME record** | DNS record added via registrar | You have DNS access |

#### Code wiring (meta-tag flow)

We've pre-wired the verification meta tag via env var. To activate:

1. From Baidu, copy the `content` value of the `baidu-site-verification` meta tag
2. In Vercel: **Settings → Environment Variables**
3. Add: `NEXT_PUBLIC_BAIDU_SITE_VERIFICATION` = `<the token from Baidu>`
4. Apply to Production (and Preview if you want)
5. **Redeploy** (Deployments → ⋯ → Redeploy)
6. Once deployed, click **VERIFY** in Baidu

#### File verification flow (alternative)

1. Download the HTML file from Baidu
2. Send it to me / commit it to `public/` (root of /public folder, exactly as named)
3. Push → deploy → click VERIFY in Baidu

#### After verification
- Submit sitemap: **链接提交 → 自动提交 → sitemap** → paste `https://www.camus.one/sitemap.xml`
- Optional: install Baidu Push JS (we can wire this if you want — pushes URLs to Baidu in real-time as you publish)
- **Wait 3-7 days** for the first crawl. Full coverage in 4-6 weeks.

### 2. ByteDance 头条搜索资源平台 (🟠 directly feeds Doubao)

**URL**: https://zhanzhang.toutiao.com

Doubao = ByteDance's AI. Toutiao Search = ByteDance's web index. **This is the most direct submission for Doubao.**

Setup: same flow as Baidu. Meta-tag verification uses a similar `<meta name="toutiao-site-verification">`. We can add the env-var wiring (`NEXT_PUBLIC_TOUTIAO_SITE_VERIFICATION`) when you're ready to submit — ask and I'll patch.

### 3. Sogou 站长平台

**URL**: https://zhanzhang.sogou.com

Lower-volume than Baidu but the env-var wire (`NEXT_PUBLIC_SOGOU_SITE_VERIFICATION`) is already in place. Same flow.

### 4. Bing Webmaster Tools

**URL**: https://www.bing.com/webmasters

Bing has a one-click **"Import from Google Search Console"** feature. Use it — saves time. Env var: `NEXT_PUBLIC_BING_SITE_VERIFICATION` (uses `msvalidate.01` meta name internally).

---

## Layer 2.5 — Chinese source signals (the harder long-game)

Chinese AI triangulates across multiple authoritative sources. Without third-party corroboration, even a Baidu-indexed brand stays low-trust.

### Baidu Baike (百度百科) — highest leverage

**URL**: https://baike.baidu.com

The Chinese Wikipedia equivalent. AI uses this as **canonical source of truth** for entity definitions.

**To get a CAMUS entry**:
1. Sign up or log in
2. Search "CAMUS" → if no entry, click **创建词条** (Create entry)
3. Submit a draft entry with:
   - Clear definition (CAMUS 是新加坡的企业 GEO 系统架构服务商...)
   - Sections: 公司简介 / 服务范围 / 方法论 / 团队背景
   - References (must include external sources — press, LinkedIn, etc.)
4. **Approval takes 1-3 weeks**. May be rejected if "references insufficient" — this is the #1 reason for rejection. Fix by getting press mentions first (see below).

**Tip**: Baidu Baike is strict about self-promotional content. Submit in an encyclopedic, neutral tone. Avoid marketing copy.

### Zhihu 知乎 — second highest leverage

**URL**: https://www.zhihu.com

Heavy weighting in Chinese AI for "what is X?" queries. The Chinese Quora.

1. Register a **机构号** (Organization account) — requires business license documentation. Cheaper alternative: register a personal account for the founder.
2. Search existing questions like:
   - "什么是 GEO？"
   - "AI 搜索引擎如何选择推荐品牌？"
   - "SEO 和 GEO 有什么区别？"
3. Write substantive answers (500+ Chinese characters) that mention CAMUS organically
4. Build follower count via consistent posting (weekly minimum)

### WeChat Official Account (微信公众号)

**URL**: https://mp.weixin.qq.com

Heavily mined by Chinese AI training corpora.

1. Register a 服务号 or 订阅号 (订阅号 is simpler if no e-commerce needed)
2. Publish Chinese versions of your `/insights` articles
3. WeChat content does NOT directly appear in Baidu, but it leaks into Chinese AI training datasets

### Weibo + LinkedIn

Lower priority but useful for completeness. Weibo for general Chinese visibility; LinkedIn for professional China-tech audience.

---

## Layer 3 — Get Chinese press mentions

Even **one** mention in any of these multiplies AI visibility:

- **36Kr (36氪)** — tech business news, https://36kr.com
- **虎嗅 (Huxiu)** — tech analysis, https://www.huxiu.com
- **InfoQ 中国** — engineering audience, https://www.infoq.cn
- **极客公园 (GeekPark)** — tech/startup, https://www.geekpark.net
- **Chinaz / A5 站长 / SEO 类专业站** — niche but high-trust for our keywords

Approach: pitch a contributed article on "如何让 AI 搜索引擎主动推荐你的品牌" (How to make AI search engines actively recommend your brand) — your own expertise, no payment usually required.

---

## How to verify your work is paying off

### Doubao test (the gold standard)
- Open Doubao app or web
- Search `camus.one` → should describe the actual brand by week 6-8 post-Baidu submission
- Search `企业 GEO 服务商` → CAMUS should be mentioned by month 3-4

### Baidu site: query
- Search `site:www.camus.one` on Baidu
- Should show indexed pages once Baidu crawl completes (~2-4 weeks)

### Baidu Index 百度指数
- https://index.baidu.com — track search volume for "CAMUS" / "Camus GEO" over time
- A flat zero forever = no traction. An uptick = working.

### Add to MONITORING.md weekly ritual
The existing 15 AI queries include 1 Chinese query (`GEO在中国怎么做？`). Once Baidu indexes you, add 3-5 more Chinese queries to the weekly log:
- "什么是 GEO？"
- "新加坡的 GEO 服务商有哪些？"
- "如何让 AI 搜索引擎推荐我的品牌？"
- "Camus 是什么公司？"

---

## Realistic timeline

| What | First effect | Full effect |
|---|---|---|
| Baidu submission + sitemap | 3-7 days (first crawl) | 4-6 weeks (full index) |
| Toutiao submission | 3-7 days | 3-4 weeks |
| Baidu Baike entry approved | 1-3 weeks (approval) | Immediate visibility |
| First Zhihu high-engagement answer | 2-4 weeks | Compounds monthly |
| **Doubao actually cites CAMUS** | **2-3 months minimum** | 6+ months for category dominance |

This is a slow-burn investment. The MONITORING.md weekly ritual is what catches movement.

---

## Maintenance — ongoing

After all platforms are submitted and live:
- **Monthly**: re-check Baidu index page count (should grow), re-run Doubao queries
- **Quarterly**: publish a new article in Chinese, push to WeChat + Zhihu
- **Annually**: refresh Baidu Baike entry with new milestones

---

## When you get the Baidu token

Paste it in chat → I'll either:
- (a) commit the verification HTML file to `public/` if Baidu offers file-based verification, OR
- (b) confirm the exact env var to paste in Vercel for the meta-tag approach

Either path takes <5 minutes once you have the token.
