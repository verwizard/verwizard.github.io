import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => (import.meta.env.PROD ? !post.data.draft : true))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 列表按发布时间降序，index-1 是更新的一篇，index+1 是更早的一篇 */
export async function getPostNeighbors(id: string): Promise<{
  newer: Post | null;
  older: Post | null;
}> {
  const posts = await getPublishedPosts();
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) return { newer: null, older: null };

  return {
    newer: index > 0 ? posts[index - 1]! : null,
    older: index < posts.length - 1 ? posts[index + 1]! : null,
  };
}
