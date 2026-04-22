import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.array(z.string()),
    tech: z.array(z.string()),
    engine: z.enum(['Unity', 'Unreal', 'Custom Engine', 'OpenGL', 'Other']),
    category: z.enum(['Professional', 'School Project', 'Game Jam', 'Tech Demo', 'Personal']),
    teamSize: z.number().optional(),
    duration: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    links: z
      .object({
        play: z.string().url().optional(),
        video: z.string().url().optional(),
        github: z.string().url().optional(),
        site: z.string().url().optional(),
      })
      .default({}),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
