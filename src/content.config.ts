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
    draft: z.boolean().default(false),
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
    draft: z.boolean().default(false),
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
    artType: z.enum(['2d', '3d', 'live2d']).default('2d'),
    modelUrl: z.string().optional(),
    live2dConfig: z.record(z.any()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const techArt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/tech-art' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['shader', 'pipeline', 'procedural', 'material']),
    tags: z.array(z.string()),
    coverUrl: z.string().optional(),
    shaderType: z.string().optional(),
    order: z.number().default(0),
    date: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts, artworks, techArt };
