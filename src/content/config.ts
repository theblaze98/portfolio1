import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		image: z.string().optional(),
		technologies: z.array(z.string()),
		github_url: z.string().url(),
		demo_url: z.string().url().optional(),
		status: z.string(),
		roles: z.array(z.string()),
		featured: z.boolean(),
	}),
})

export const collections = { projects }
