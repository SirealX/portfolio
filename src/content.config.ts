import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    status: z.enum(["ongoing", "complete", "QA"]),
    description: z.string(),
    features: z.array(z.string()),
    skills: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    logs: z.array(
      z.object({
        date: z.string(),
        event: z.string(),
      }),
    ),
    cta: z.string(),
  }),
});

export const collections = { projects };
