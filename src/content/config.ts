import { defineCollection, z } from 'astro:content';

const professores = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().default('Professor Pesquisador'),
    lattesUrl: z.string().url().or(z.string()),
    email: z.string().optional(),
    avatar: z.string().optional(),
    areas: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const projetos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    coordinator: z.string(),
    funding: z.string().optional().default(''),
    status: z.string().default('Em andamento'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().optional(),
  }),
});

export const collections = {
  professores,
  projetos,
};
