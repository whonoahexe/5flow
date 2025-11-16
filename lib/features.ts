export const features = {
  enabled: process.env.CMS_ENABLED === 'true',
  blog: process.env.CMS_FEATURE_BLOG === 'true',
};
