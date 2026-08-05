import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['de', 'en']).default('de'),
    // Klammert die Sprachversionen eines Artikels zusammen. Slugs sind pro
    // Sprache uebersetzt, deshalb laufen hreflang und Sitemap ueber diesen Key.
    translationKey: z.string().optional(),
    author: z.string().default('Slowcraft'),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
