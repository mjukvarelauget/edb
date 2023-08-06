<script lang="ts">
	import type { Note } from '../../types/podcastType';
	export let data: { notes: Note[] };

	const { notes } = data;
</script>

<ul class="container">
	{#each notes as { title, slug }}
		<li>
			<a href={`/notes/${slug}`}>{title}</a>
		</li>
	{/each}
</ul>

<style>
	.container {
		max-width: 700px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
	}

	li {
		font-size: 24px;
	}
</style>
