import { client } from '../../../sanityClient';
import type { Note } from '../../../types/podcastType';

export async function load({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const note: Note = await client.fetch(`*[_type == 'post' && slug.current == '${slug}'][0] {
      ...,
      mainImage {
        ..., 
        asset -> {...},
      },
      sources[] -> {...}
    
  }`);
  
	return { note };
}
