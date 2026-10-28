import type { APIRoute } from 'astro';
import { buildFeed } from '../lib/feed';

// 兼容旧 Jekyll 时代的订阅地址，与 /rss.xml 输出同一份内容
export const GET: APIRoute = buildFeed;
