import { defineCollection, z } from 'astro:content';

const timelineCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
    type: z.enum(['work', 'project', 'education', 'achievement', 'personal']),
    company: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  timeline: timelineCollection,
  blog: blogCollection,
}; 