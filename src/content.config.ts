import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    slugId: z.enum(['audio-video-sync', 'transcript-timing-correction', 'ordered-story-approvals']),
    title: z.string(),
    shortTitle: z.string(),
    subtitle: z.string(),
    employer: z.string(),
    role: z.string(),
    period: z.string(),
    evidenceBadge: z.string(),
    illustrationBadge: z.string(),
    ogImage: z.string(),
    stack: z.array(z.string()),
    cardSummary: z.string(),
    decisionSummary: z.string(),
    calloutHeading: z.string(),
    calloutQuote: z.string(),
  }),
});

export const collections = { work };
