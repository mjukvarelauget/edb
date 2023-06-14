import { client } from '../sanityClient';
import type { Episode } from '../types/podcastType';

export const load = async () => {
	const episodes: Episode[] = await client.fetch(`*[_type == 'episode'] {
    ...,
    file {
      ...,
      asset -> {...},
    },
    coverArt {
      ...,
      asset -> {...},
    }
  } | order(_createdAt desc)`);

	const podcast = await client.fetch(
		`*[_type == 'podcast' && slug.current == 'edb-er-dyrt-og-vanskelig'][0]{
      ...,
      externalLinks[] {
        ...,
        icon {
          asset -> {...}
        }
      }
    }`
	);

	return { episodes, podcast };
};
