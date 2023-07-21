<script lang="ts">
	import type { EpisodeWithNotes } from '../../../types/podcastType';
	import { PortableText } from '@portabletext/svelte';

	export let data: { episode: EpisodeWithNotes };
	const { notes, coverArt } = data.episode;
	const { title, body } = notes;
</script>

<img class="cover" alt={coverArt.caption} src={coverArt.asset.url} />
<article>
	<h1 class="title">{title}</h1>
	<PortableText value={body} />
</article>

<style>
	article {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 16px;
	}

	.title {
		font-size: 2em;
	}

	.cover {
		width: 100vw;
		height: 80vh;
		object-fit: cover;
		object-position: 50% 10%;
	}
</style>
