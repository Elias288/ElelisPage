import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from 'astro/zod'

const posts = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/blogContent" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string().optional()).optional(),
        suggestedPost: z.array(z.string().optional()).optional()
    })
})

export const collections = { posts }