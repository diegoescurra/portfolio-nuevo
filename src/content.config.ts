import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const projects = defineCollection({
    loader: glob({
        base: './src/content/projects',
        pattern: '**/*.md',
    }),

    schema: ({ image }) =>
        z.object({
            title: z.string(),
            slug: z.string(),
            subtitle: z.string(),
            description: z.string(),

            category: z.string(),
            client: z.string(),
            year: z.number(),

            role: z.string(),

            website: z.url().optional(),
            repository: z.url().optional(),

            cover: image(),
            coverAlt: z.string(),
            coverPosition: z.string().default('center'),

            showcase: z.array(z.object({
                title: z.string(),
                description: z.string(),
                image: image().optional(),
                imageAlt: z.string().optional(),
                imageLayout: z.enum(['landscape', 'portrait']).default('landscape'),
            })).default([]),

            stack: z.array(z.object({
                name: z.string(),
                category: z.enum(['development', 'deployment', 'integration', 'functionality', 'content', 'infrastructure']),
            })).default([]),
            highlights: z.array(z.string()).default([]),
            challenge: z.array(z.string()).optional(),
            decision: z.object({
                title: z.string(),
                description: z.string(),
            }).optional(),
            result: z.array(z.string()).optional(),
            quote: z.string().optional(),
            quoteTitle: z.string().optional(),
            quoteAuthor: z.string().optional(),
            quoteAuthorRole: z.string().optional(),
            featured: z.boolean().default(false),
            order: z.number(),

            status: z
                .enum(["active", "archived", "development"])
                .default("active"),

            commercial: z.boolean().default(true),
            technical: z.boolean().default(true),
        }),
})

export const collections = {
    projects,
}
