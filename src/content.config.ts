import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['app', 'userscript', 'archive', 'tool']),
    url: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/artworks' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    imageUrl: z.string(),
    date: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, posts, artworks };
