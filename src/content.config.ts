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

            stack: z.array(z.string()),
            highlights: z.array(z.string()),

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