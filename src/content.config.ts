import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({
    base: "./src/content/writing",
    pattern: "**/*.{md,mdx}"
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    language: z.enum(["zh-Hant", "en"]).default("zh-Hant"),
    draft: z.boolean().default(false),
    cover: z.string().optional()
  })
});

export const collections = { writing };
