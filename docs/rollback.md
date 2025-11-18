# Rollback Procedure (CMS Integration)

1. Disable revalidation by rotating or clearing `WP_WEBHOOK_SECRET` in the deployment environment.
2. Set `CMS_ENABLED=false` and redeploy to restore legacy content paths.
3. Purge CDN caches as applicable.
4. Investigate logs for `webhook_error` or transform failures.
5. Apply fixes in staging, re-enable flags, and redeploy.
