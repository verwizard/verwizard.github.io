import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1),
    group: z.enum(['control', 'perception']),
    status: z.enum(['active', 'done', 'tool']),
    summary: z.string().min(20).max(400),
    tags: z.array(z.string()).min(1),
    order: z.number().int().positive(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    // 预留：后续嵌入 PID 整定平台、SPNv2 三维可视化等自包含静态工具
    embed: z
      .object({
        src: z.string(),
        title: z.string(),
        height: z.number().int().positive().default(640),
      })
      .optional(),
  }),
});

export const collections = { blog, projects };
