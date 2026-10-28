import rss from '@astrojs/rss';
import type { APIContext, APIRoute } from 'astro';
import { SITE } from '../consts';
import { getPublishedPosts } from './posts';

export const buildFeed: APIRoute = async (context: APIContext) => {
  const site = context.site;
  if (!site) {
    throw new Error('astro.config.mjs 缺少 site，RSS 无法生成绝对链接');
  }

  const posts = await getPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site,
    trailingSlash: true,
    customData: '<language>zh-CN</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: new URL(`/blog/${post.id}/`, site).href,
    })),
  });
};
