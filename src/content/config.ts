import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    github_url: z.string().url(),
    demo_url: z.string().url().optional(),
    featured: z.boolean()
  })
})

export const collections = { projects }
