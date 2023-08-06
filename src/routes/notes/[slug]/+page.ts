import { client } from '../../../sanityClient';
import type { EpisodeWithNotes } from '../../../types/podcastType';

export async function load({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const episode: EpisodeWithNotes =
		await client.fetch(`*[_type == 'episode' && slug.current == '${slug}'][0] {
    ...,
    file {
      ...,
      asset -> {...},
    },
		notes -> {
      ...,
      mainImage {
        ..., 
        asset -> {...},
      }
    },
    coverArt {
      ...,
      asset -> {...},
    }
  }`);
	console.log(episode);
	return { episode };
}
