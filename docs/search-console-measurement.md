# Search Console measurement and iteration

This is NiveshCheck's operating routine for organic search. It is designed to improve discoverability without turning the directory into a broker-ranking or recommendation site.

## Baseline: 8 August 2026

Search Console property: `sc-domain:niveshcheck.in`

| Metric | Current value | Interpretation |
| --- | ---: | --- |
| Web clicks | 48 | Early traffic; do not over-interpret individual queries yet. |
| Web impressions | 3,243 | Google is beginning to test the site for relevant searches. |
| Average CTR | 1.5% | A baseline, not yet an optimisation target by itself. |
| Average position | 14.8 | Many impressions are near the first-page boundary. |
| Indexed pages | 36 | Indexing is still in an early stage. |
| Discovered, currently not indexed | 80 | Prioritise crawlable, useful canonical pages and allow time for recrawling. |
| Submitted sitemap | Success; 116 URLs discovered; last read 7 August 2026 | This crawl predates the 350-listing expansion and guide release. |

The performance report currently shows data from 23 July–6 August 2026, despite the three-month selector, because the property is new.

## What the initial data says

- The broad neutral directory page (`/brokers`) has the largest early impression volume.
- Legacy ranking and category URLs still receive most clicks and impressions. They permanently redirect to neutral pages; keep those redirects in place and measure whether their equity transfers over time.
- Direct broker pages have started to receive impressions, which supports continuing the source-backed listing approach.
- The redirect-error examples reported by Search Console were first detected on 24–25 July. Current production checks on 8 August confirm that the listed URLs resolve through permanent redirects to an HTTP 200 destination. Do not submit a validation request until Search Console has had time to recrawl the latest deployment.

## Every 14 days: 20-minute review

Use the last 28 days and compare it with the preceding 28 days. Record the following in a dated note or issue:

1. Total clicks, impressions, CTR, and average position.
2. Top 20 queries, sorted by impressions.
3. Top 20 pages, sorted by impressions.
4. Page-indexing totals, sitemap last-read date, and any new exclusion reason.
5. Manual actions, security issues, and Core Web Vitals status.

## Decisions from the report

| Signal | Decision | Guardrail |
| --- | --- | --- |
| A neutral verification query has 100+ impressions over 28 days and average position 8–20 | Improve the matching existing guide or directory page with a clearer answer, source links, and a visible FAQ. | Do not create a near-duplicate page for one query variant. |
| A broker-name query repeatedly appears | Improve that broker's evidence-first detail page only with record-backed information. | Do not add claims about products, pricing, safety, or suitability without a documented source standard. |
| A city page has impressions and at least five source-backed records | Improve its internal links and neutral description. | Keep thin city pages `noindex`. |
| A ranking/category query appears | Let the existing permanent redirect consolidate to a neutral page. | Do not revive "best", active-client, discount, full-service, or F&O pages until a verifiable data standard exists. |
| A page has high impressions, position 1–10, and CTR materially below the site's comparable pages | Review its title and description for clarity and accuracy. | Avoid clickbait or a recommendation claim. |
| "Discovered – currently not indexed" stays high after two sitemap reads following a release | Inspect representative URLs and internal linking; improve only pages with distinct source-backed value. | Do not mass-request indexing or manufacture pages merely to increase URL count. |

## Release checks

After each material content release:

1. Confirm the production URL returns one canonical HTTP 200 response, or one permanent redirect to its intended canonical destination.
2. Confirm the URL is included in `sitemap.xml` only if it is intended to be indexable.
3. Wait for the next sitemap read before judging indexing impact.
4. Inspect a small representative set of new URLs in Search Console only when there is an actual indexing concern.

## Current next review

Review Search Console on or after **22 August 2026**. By then, check whether the sitemap's discovered-page count reflects the 350-listing directory and the four guide pages published on 8 August 2026.
