# UI/UX Review Findings

## Navigation & Information Architecture
- **Redundant call-to-action links.** All header and footer navigation items route to `/dashboard`, so users cannot explore differentiated content like pricing, courses, or contact pages before signing up. Align the target paths with their labels or replace them with on-page anchors to maintain trust and clarity in the IA. 【F:app/page.tsx†L11-L22】【F:app/page.tsx†L230-L244】
- **Landing page lacks a semantic `<main>` landmark.** Wrapping the core sections in a `<main>` element would improve screen-reader navigation and align with HTML5 structure expectations. 【F:app/page.tsx†L8-L222】

## Visual Hierarchy & Layout
- **Overuse of the glassmorphism card.** Nearly every panel (hero stats, pricing, dashboard widgets) uses the same `glass-card` styling, so hierarchy relies mostly on size. Introduce varied surface treatments (e.g., solid fills or subtle dividers) and spacing changes to help users scan primary vs. supporting information faster. 【F:app/page.tsx†L39-L71】【F:app/page.tsx†L118-L205】【F:app/dashboard/page.tsx†L11-L146】
- **Hero CTA stack needs clearer differentiation.** Both primary and secondary CTAs share identical sizing and shadow intensity, making them compete for attention. Adjust one CTA to a lighter visual weight (e.g., outline with no elevation) and introduce descriptive helper text beneath the secondary action. 【F:app/page.tsx†L33-L47】

## Color & Contrast
- **Muted body background reduces legibility.** The layered gradients and noise pattern applied to `body` create busy, low-contrast regions behind transparent cards. Consider lightening the backdrop or adding a neutral base color beneath overlays to maintain readability. 【F:app/globals.css†L38-L65】
- **Status badges use uniform tint levels.** Every badge applies `bg-<color>/16` regardless of semantic priority, so warning vs. success messages feel interchangeable. Calibrate opacity per semantic level and verify contrast ratios for uppercase text. 【F:components/common/Badge.tsx†L10-L25】

## Accessibility & Interaction
- **Buttons need visible focus states.** The shared `Button` component includes hover transitions but no `focus-visible` styles, which leaves keyboard users without a clear indicator. Add `focus-visible` outlines that meet contrast guidelines and ensure `type="button"` is set by default to prevent accidental form submissions. 【F:components/common/Button.tsx†L15-L31】
- **Progress bars should expose ARIA attributes.** The current `ProgressBar` renders decorative `div` elements without `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, or `aria-valuemax`. Adding these attributes will let assistive tech convey learning progress accurately. 【F:components/common/ProgressBar.tsx†L15-L28】
- **Repeated uppercase microcopy impacts readability.** The global badge component enforces uppercase text, which can be fatiguing for longer labels like “Join the Waitlist.” Allow sentence case by default and reserve uppercase for short status tags. 【F:components/common/Badge.tsx†L19-L23】

## Content Opportunities
- **Enrich the pricing comparison.** The pricing cards list similar checkmarks without highlighting differentiation (e.g., live support frequency, career services). Consider adding icons, subheadings, or a comparison table to articulate progression between plans. 【F:app/page.tsx†L140-L205】
- **Provide social proof and success metrics.** Incorporating testimonials, partner logos, or graduate outcomes would strengthen credibility alongside the hero stats. Currently, the landing page moves directly from problem statement to pricing without external validation. 【F:app/page.tsx†L24-L222】
