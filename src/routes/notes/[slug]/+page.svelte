<script lang="ts">
	import Blockquote from '../../../components/Blockquote.svelte';
	import type { Note } from '../../../types/podcastType';
	import { PortableText } from '@portabletext/svelte';

	export let data: { note: Note };
	const { title, body, mainImage, sources } = data.note;
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
	<hr />
	{#if sources.length > 0}
		<h3>Kilder</h3>
		<ul>
			{#each sources as { source, url }}
				<li>
					<a class="link" href={url} target="_blank">
						{source}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</article>

<style>
	article {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 16px;
		font-family: 'PT Mono', sans-serif !important;
	}

	li {
		margin-bottom: 12px;
	}

	.link {
		text-decoration: none;
	}

	.link:visited,
	.link:active {
		color: black;
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
