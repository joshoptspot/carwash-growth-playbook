import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const episodes = (await getCollection('episodes')).sort(
    (a, b) => b.data.episodeNumber - a.data.episodeNumber
  );

  return rss({
    title: 'The Car Wash Growth Playbook',
    description:
      'Car wash marketing ideas, strategies, and operator growth playbooks. An OptSpot podcast hosted by Josh Taylor.',
    site: context.site!,
    items: episodes.map((ep) => ({
      title: ep.data.title,
      pubDate: ep.data.date,
      description: ep.data.description,
      link: `/episodes/${ep.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
