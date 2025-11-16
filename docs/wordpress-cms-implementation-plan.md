# WordPress CMS Integration – Implementation Plan

## 1. Guiding Principles

- Safety-first rollout: preserve existing static content paths until feature stability proven.
- Incremental substitution: migrate content type by type (legal → hero/CTA → navigation → products/solutions → blogs).
- Clear rollback points at the end of each phase.
- Automation for migration & verification; minimize manual copy/paste.
- Observability from day one of dynamic behavior (webhooks, preview, adapter errors).

## 2. Team & Responsibilities (Sample)

| Role                         | Responsibility                                            |
| ---------------------------- | --------------------------------------------------------- |
| Lead Engineer                | Architecture oversight, adapter layer, security endpoints |
| Backend/Integration Engineer | Webhook + migration scripts                               |
| Front-End Engineer           | Page refactors, component data wiring                     |
| DevOps / Infra               | Env vars, secrets, WP hosting, monitoring hooks           |
| QA / Test Engineer           | Test plan, automation (unit/integration)                  |
| Content Ops                  | Migration validation, editorial workflows                 |
| Compliance Reviewer          | Legal page sign-off tests                                 |

## 3. High-Level Timeline (Estimated 6 Weeks)

| Week | Focus                                                                                         |
| ---- | --------------------------------------------------------------------------------------------- |
| 1    | WP environment setup, schema modeling (ACF/GraphQL), adapter scaffolding (legal + hero types) |
| 2    | Legal pages integration + migration script dry-run + webhook endpoint (path revalidation)     |
| 3    | Preview mode + hero & CTA blocks + navigation labels dynamic wiring                           |
| 4    | Product / Solution / Application pages + performance + accessibility checks                   |
| 5    | Blog integration (if flag enabled) + observability enhancements + rate limiting               |
| 6    | Final migration, feature flags cleanup, rollback validation, acceptance criteria sign-off     |

Parallelizable items: Testing framework setup (Week 1-2), Observability scaffolding (Week 2), Performance scripts (Week 4).

## 3.5 Progress Summary

| Epic                                | Status      | Notes                                                                                                          |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| A (Foundation)                      | Planned     | Awaiting WP env + plugins                                                                                      |
| B (Adapters & Types)                | In Progress | Core scaffolding (types, client, transforms, modules) completed; legal adapter moved to WP REST; tests pending |
| C (Legal Migration)                 | In Progress | REST adapter in place; migration script skeleton created; drafts need WP auth; published fallback active       |
| D (Webhook & Revalidation)          | In Progress | Route implemented with HMAC verification and shared secret fallback                                            |
| E (Preview Mode)                    | In Progress | Preview route done; draft fetchers for legal implemented                                                       |
| F (Hero/CTA/Nav)                    | In Progress | Adapters in place; navigation labels wired via server wrapper; hero/CTA pending                                |
| G (Products/Solutions/Applications) | Planned     | Not started                                                                                                    |
| H (Blogs)                           | Planned     | Behind feature flag                                                                                            |
| I (Observability)                   | In Progress | Structured logger added; metrics scripts pending                                                               |
| J (Security)                        | Planned     | HMAC + rate limiting + sanitization tests pending                                                              |
| K (Migration & Verification)        | In Progress | Mapping file scaffolded                                                                                        |
| L (Rollback)                        | In Progress | Feature flags and rollback doc added                                                                           |
| M (Testing)                         | Planned     | To be added with adapter tests                                                                                 |

## 4. Epics & Detailed Tasks

### Epic A: Foundation & Environment

- [ ] A1: Provision WordPress dev & staging instances.
- [ ] A2: Install WPGraphQL, ACF (fields), webhook plugin.
- [ ] A3: Define ACF groups for Legal Page, Hero Section, CTA Block, Navigation Label.
- [ ] A4: Set up WP roles & capabilities (Editor, Compliance Reviewer, Admin).
- [ ] A5: Create initial test content entries.
- [ ] A6: Configure Vercel env vars (`WP_BASE_URL`, `WP_API_TOKEN`, etc.).

### Epic B: Adapter Layer & Types

- [x] B1: Create `lib/cms/types.ts` with interfaces.
- [x] B2: Implement `lib/cms/client.ts` (fetch + auth + retry).
- [x] B3: Implement `lib/cms/transform.ts` (basic sanitizer placeholder; hardening pending).
- [x] B4: Add domain modules: `legal.ts`, `hero.ts`, `cta.ts`, `navigation.ts`.
- [ ] B5: Unit tests for transforms & validation constraints.
- [x] B6: Legal adapter uses WP REST (`/wp-json/wp/v2/pages?slug=<slug>&status=any`) with draft selection.

### Epic C: Legal Pages Migration & Integration

- [x] C1: Build migration script `scripts/migrate/legal-to-wp.ts` (skeleton: file inventory output).
- [ ] C2: Dry-run: generate report (IDs, slugs, note missing alt text).
- [ ] C3: Execute migration in staging; obtain reviewer sign-off.
- [x] C4: Refactor Next.js legal page routes to consume CMS adapter (Privacy wired behind flag).
- [ ] C5: Implement fallback stale notice component.
- [ ] C6: Acceptance test: unauthorized publish blocked (workflow simulation).
- [x] C7: Wire remaining legal routes (imprint, disclaimer, privacy notices, quality) behind feature flag.

### Epic D: Webhook & Revalidation

- [x] D1: Implement `app/api/revalidate/route.ts` with HMAC verification (fallback to shared secret).
- [ ] D2: WP webhook configuration (publish events).
- [x] D3: Logging of webhook events with correlation IDs.
- [ ] D4: Revalidation path mapping table (type → route list).
- [ ] D5: Error retry logic (idempotency key).

### Epic E: Preview Mode

- [x] E1: Implement `app/api/preview/route.ts` token validation.
- [x] E2: Add draft-aware fetchers (`getDraftLegalPage`) (legal only for now).
- [ ] E3: UI preview banner & warnings (accessibility issues, missing alt text).
- [ ] E4: Security tests (invalid token, expired token).

### Epic F: Hero, CTA, Navigation Integration

- [ ] F1: Migrate hero sections (home, product pages where applicable) to CMS.
- [x] F2: Implement CTA block injection via adapter (homepage bottom via `ServerCta`, minimal field mapping).
- [x] F3: Navigation labels dynamic SSR fetch with caching (basic, no-cache for now).
- [ ] F4: Unit tests for ordering & missing label fallback.

### Epic G: Product / Solution / Application Pages

- [ ] G1: Define ACF/GraphQL schema for these types (feature sections, tags).
- [ ] G2: Adapter modules (`product.ts`, `solution.ts`, `application.ts`).
- [ ] G3: Refactor page routes to CMS data; maintain legacy content behind `CMS_ENABLED` flag.
- [ ] G4: Performance tuning (batched queries).
- [ ] G5: Accessibility checks (heading structure).

### Epic H: Blogs (Feature Flag `CMS_FEATURE_BLOG`)

- [ ] H1: Schema mapping for blog posts.
- [ ] H2: Migration script for blog markdown (if migrating now).
- [ ] H3: Listing & detail pages refactor.
- [ ] H4: Pagination & SEO metadata integration.

### Epic I: Observability & Monitoring

- [x] I1: Implement `lib/log.ts` structured logging.
- [ ] I2: Add webhook latency & error metrics output (to console / external sink later).
- [ ] I3: Add performance check script `scripts/perf-check.js`.
- [ ] I4: Add accessibility audit integration (preview only).

### Epic J: Security & Hardening

- [ ] J1: HMAC signature verification utility + tests.
- [ ] J2: Rate limiting for preview route.
- [ ] J3: Sanitize HTML + test suite for tag allowlist.
- [ ] J4: Secret rotation procedure doc.

### Epic K: Migration & Verification

- [ ] K1: Final migration run (legal, hero, CTA, navigation).
- [ ] K2: Verification checklist automation script.
- [x] K3: Generate mapping JSON & store for rollback (placeholder scaffold added).
- [ ] K4: Sign-off meeting notes (attach doc).

### Epic L: Rollback & Contingency

- [x] L1: Implement feature flags (`CMS_ENABLED`, `CMS_FEATURE_BLOG`).
- [x] L2: Document rollback steps in `docs/rollback.md`.
- [ ] L3: Simulate failure & perform rollback in staging.

### Epic M: Testing Infrastructure

- [ ] M1: Jest config (if not present) for CMS modules.
- [ ] M2: MSW setup to mock WP responses.
- [ ] M3: Integration tests for webhook route.
- [ ] M4: Migration script dry-run snapshot tests.
- [ ] M5: Optional Playwright staging preview test scenario.

## 5. Dependency Graph (Simplified)

- Foundation (A) → Adapters (B) → Legal Migration (C) → Webhook (D) → Preview (E) → Content Extensions (F,G,H).
- Observability (I) can begin after D.
- Security (J) depends on D for webhook contexts.
- Migration & Verification (K) relies on each preceding content type completion.
- Rollback (L) requires flags (B/G) present.
- Testing (M) begins with B and expands as new routes added.

## 6. Resource & Effort Estimates (Rough)

| Epic | Effort (Dev Days) |
| ---- | ----------------- |
| A    | 3                 |
| B    | 4                 |
| C    | 4                 |
| D    | 2                 |
| E    | 3                 |
| F    | 3                 |
| G    | 4                 |
| H    | 5 (if in phase)   |
| I    | 2                 |
| J    | 2                 |
| K    | 2                 |
| L    | 1                 |
| M    | 3                 |

Total (without H): ~33 dev days (~6 weeks with parallelism).

## 7. Acceptance Criteria Traceability Matrix (Sample)

| PRD Acceptance                     | Related Tasks                              |
| ---------------------------------- | ------------------------------------------ |
| Hero headline updates within 5 min | F1, D1-D5 (webhook), B2-B4                 |
| Legal publish requires review      | A4 (roles), C4-C6 (workflow tests)         |
| Image >1.5MB rejected              | B3 (transform validation), M2 (unit tests) |
| Preview shows draft content        | E1-E3, M3                                  |
| Audit log export (legal)           | (Phase 2 extension – placeholder)          |
| Stale fallback on CMS outage       | C5, G3 (flag), L2                          |
| Navigation edits update live nav   | F3-F4, D1-D5                               |

## 8. Risk Handling In Implementation

- Layout break risk: incremental swap & visual regression spot checks after each epic (manual QA script commands).
- Webhook storm risk: simple dedupe map keyed by slug+timestamp.
- Transform drift risk: add schema contract test comparing WP field list vs expected transform shape.

## 9. Tooling & Scripts To Create

| Path                             | Purpose                |
| -------------------------------- | ---------------------- |
| `lib/cms/*`                      | Adapter layer          |
| `scripts/migrate/legal-to-wp.ts` | Migration legal pages  |
| `scripts/migrate/mapping.json`   | ID mapping             |
| `scripts/perf-check.js`          | Performance assertions |
| `docs/rollback.md`               | Rollback procedure     |

## 10. Feature Flags Implementation Detail

File: `lib/features.ts`

```ts
export const features = {
  enabled: process.env.CMS_ENABLED === 'true',
  blog: process.env.CMS_FEATURE_BLOG === 'true',
};
```

Usage in route loaders to branch between legacy markdown and CMS fetch.

## 11. Rollout Strategy

1. Enable `CMS_ENABLED=true` in staging; keep false in production week 1-3.
2. After legal + hero stable, enable production flag for those only (navigation still static until validated).
3. Progressive enable blogs last (if in scope).
4. Monitor logs for errors; threshold-based go/no-go for next content type.

## 12. QA Checklist Per Epic Completion

- All unit tests green.
- Webhook events observed in logs.
- Preview loads draft vs published delta.
- Fallback mechanism manually triggered (simulated WP downtime).
- Accessibility warnings surfaced only in preview.

## 13. Performance Validation Steps

- Measure TTFB for legal page after revalidation (< 1s target).
- Bulk publish test: 5 legal pages; ensure revalidation total < 120s.
- Image optimization: confirm transferred size reduction > 40% vs original.

## 14. Monitoring & Alerting (Minimal Viable)

- Log scanning script for `event=webhook_error` count > threshold.
- Manual daily audit of publish latency until stable.
- Future: integrate external monitoring provider.

## 15. Documentation Deliverables

- Developer Quickstart (post Epic B) – how to add new type.
- Migration Playbook (post Epic C).
- Rollback Doc (Epic L).

## 16. Out-of-Scope Explicitly (For This Implementation Phase)

- Multi-language (future localization plan).
- Advanced analytics instrumentation.
- Full audit export pipeline (placeholder tasks only).
- Edge caching layer beyond Next.js defaults.

## 17. Completion Criteria (Project Closure)

- All acceptance criteria tests pass.
- Flags enabled in production for targeted content types.
- Legacy markdown paths removed or behind disabled flag.
- Rollback doc validated in staging dry run.
- Post-mortem / lessons learned doc created.

## 18. Post-Launch Monitoring Period (2 Weeks)

- Track webhook latency & error rate daily.
- Collect editor satisfaction feedback.
- Identify candidate optimizations (GraphQL persisted queries, tag revalidation).

---

Prepared to proceed with code scaffolding based on this plan.
