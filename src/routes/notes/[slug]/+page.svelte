<script lang="ts">
	import Blockquote from '../../../components/Blockquote.svelte';
	import type { EpisodeWithNotes } from '../../../types/podcastType';
	import { PortableText } from '@portabletext/svelte';

	export let data: { episode: EpisodeWithNotes };
	const { notes } = data.episode;
	const { title, body, mainImage } = notes;
</script>

<img class="cover" alt={mainImage.caption} src={mainImage.asset.url} />
<article class="test">
	<h1 class="title">{title}</h1>
	<PortableText
		components={{
			block: {
				blockquote: Blockquote
			}
		}}
		value={body}
	/>
</article>

<style>
	article {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 16px;
		font-family: 'PT Mono', sans-serif !important;
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
