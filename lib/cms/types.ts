export interface CmsMediaAsset {
  id: string;
  url: string;
  altText: string;
  width?: number;
  height?: number;
}

export interface CmsCtaBlock {
  key: string;
  headline: string;
  subhead?: string;
  buttonText: string;
  buttonUrl: string;
  styleVariant?: string;
  backgroundImage?: CmsMediaAsset | null;
}

export interface CmsHeroSection {
  id: string;
  identifier: string;
  title: string;
  subtitle?: string;
  bodyHtml: string;
  media: CmsMediaAsset[];
  cta?: CmsCtaBlock;
  highlightStyle?: 'default' | 'inline-highlight' | 'pattern-overlay';
  sortOrder: number;
}

export interface CmsContentItem {
  id: string;
  title: string;
  subtitle?: string;
  bodyHtml?: string;
  iconKey?: string;
  image?: CmsMediaAsset | null;
  linkUrl?: string;
  sortOrder: number;
}

export interface CmsContentBlock {
  id: string;
  identifier: string;
  title: string;
  bodyHtml?: string;
  items: CmsContentItem[];
  sortOrder: number;
}

export interface CmsLegalPage {
  slug: string;
  title: string;
  effectiveDate: string;
  bodyHtml: string;
  revisionNotes?: string;
  updatedAt: string;
  version: number;
}

export interface CmsNavigationLabel {
  key: string;
  displayText: string;
  tooltipText?: string;
  isActive: boolean;
  sortOrder?: number;
}

export interface CmsBlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  author?: string;
  publishDate?: string;
  bodyHtml: string;
  featureImage?: CmsMediaAsset | null;
  tags?: string[];
  status?: 'draft' | 'published' | 'scheduled';
}
