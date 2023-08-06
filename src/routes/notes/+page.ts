import { client } from '../../sanityClient';

export async function load() {
	const notes = await client.fetch(
		`*[_type == "post" && @.author->slug.current == "edb"  ] {
        title,
        'slug': slug.current
      }`
	);
	return { notes };
}
