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
  }`);
	return { episodes };
};
