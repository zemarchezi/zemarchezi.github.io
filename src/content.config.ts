import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    code: z.string(),
    name: z.string(),
    semester: z.string(),
    summary: z.string(),
    lectureCount: z.number().optional(),
    assignmentCount: z.number().optional(),
    status: z.string().optional(),
    materials: z
      .array(
        z.object({
          title: z.string(),
          type: z.enum(['slide', 'note', 'assignment', 'other']),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { courses };
