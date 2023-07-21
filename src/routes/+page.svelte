<script lang="ts">
	import type { Episode, Podcast } from '../types/podcastType';

	export let data: { episodes: Episode[]; podcast: Podcast };
	const { episodes, podcast } = data;

	let active = 0;
	const setActive = (i: number) => {
		active = i;
	};
</script>

<main class="container">
	<h1>{podcast.title}</h1>
	<h2>{podcast.subtitle}</h2>
	<div class="wrapper">
		<div class="player">
			<div class="active">
				<img src={episodes[active].coverArt.asset.url} alt="" />
				<div>
					<p class="title">{episodes[active].title}</p>
					<audio src={episodes[active].file.asset.url} class="audio" controls />
				</div>
			</div>
			{#each episodes as episode, i}
				<button class="track" on:click={() => setActive(i)}>
					<div class={active === i ? 'active-track' : 'inactive-track'} />
					<span>{i + 1}. {episode.title}</span>
				</button>
			{/each}
		</div>
	</div>
</main>
<footer class="footer">
	{#each podcast.externalLinks as { href, icon, label }}
		<a {href} target="_blank" class="social">
			<img height={24} src={icon.asset.url} alt={label} />
		</a>
	{/each}
</footer>

<style>
	.container {
		width: 100vw;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		height: 100%;
		margin-top: 64px;
		width: 600px;
	}
	@media only screen and (max-width: 736px) {
		.wrapper {
			width: calc(100vw - 20px);
		}
	}

	.track {
		border: none;
		border-bottom: 1px solid grey;
		text-align: left;
		background: transparent;
		display: flex;
		padding: 8px 0;
	}
	.track:hover {
		background-color: lightgrey;
		cursor: pointer;
	}

	.active-track {
		width: 4px;
		height: 1em;
		background-color: #fadfa3;
		margin-right: 4px;
	}

	.title {
		margin: 20px 20px 0;
	}

	.inactive-track {
		width: 4px;
		height: 1em;
		margin-right: 4px;
	}

	.player {
		display: flex;
		flex-direction: column;
		border: 1px solid lightgray;
		flex-grow: 1;
	}

	.active {
		display: flex;
		width: 100%;
		flex-grow: 1;
	}
	.active > img {
		height: 92px;
		width: 92px;
	}

	.active > div {
		padding: 4px 8px;
		flex-grow: 1;
	}

	.audio {
		width: 100%;
		flex-grow: 1;
		min-width: 100px;
	}
	audio::-webkit-media-controls-play-button,
	audio::-webkit-media-controls-panel {
		background-color: white;
	}

	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 8px;
	}

	.social {
		display: flex;
		align-items: center;
		margin: 8px;
	}
</style>
