import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    episodeNumber: z.number(),
    date: z.coerce.date(),
    description: z.string(),
    youtubeId: z.string().optional(),
    spotifyEpisodeId: z.string().optional(),
    duration: z.string().optional(),
    guest: z.string().optional(),
  }),
});

export const collections = { episodes };
