import type { CollectionEntry } from 'astro:content';

export function postUrl(post: CollectionEntry<'blog'>): string {
  return `/blog/${post.id}/`;
}
