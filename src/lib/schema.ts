import { SITE } from '../consts';

export interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}

/** 全站通用的 WebSite + Person 结构化数据 */
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: SITE.title,
        url: SITE.url,
        description: SITE.description,
        inLanguage: 'zh-CN',
      },
      {
        '@type': 'Person',
        name: SITE.author,
        url: SITE.url,
        email: SITE.email,
        sameAs: [
          `https://github.com/${SITE.github}`,
          `https://blog.csdn.net/${SITE.csdn}`,
        ],
      },
    ],
  };
}

export function blogPostingSchema(input: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'zh-CN',
    author: {
      '@type': 'Person',
      name: SITE.author,
      url: SITE.url,
    },
  };
}

/** 序列化并把 < 转义，避免 JSON-LD 里的字符串提前闭合 script 标签 */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
