import { defineCollection, z } from 'astro:content';

const professores = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().default('Professor Pesquisador'),
    role_en: z.string().optional(),
    lattesUrl: z.string().url().or(z.string()),
    email: z.string().optional(),
    avatar: z.string().optional(),
    areas: z.array(z.string()).default([]),
    areas_en: z.array(z.string()).default([]),
    bio_en: z.string().optional(),
    order: z.number().default(99),
  }),
});

const projetos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    period: z.string(),
    coordinator: z.string(),
    funding: z.string().optional().default(''),
    status: z.string().default('Em andamento'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().optional(),
    description_en: z.string().optional(),
  }),
});

export const collections = {
  professores,
  projetos,
};
