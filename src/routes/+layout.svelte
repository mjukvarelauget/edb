<script>
	import '@fontsource/cutive-mono';
	import '@fontsource/pt-mono';
	import '../app.css';
</script>

<div class="container">
	<slot />
	<footer>
		<a href="/">EDB</a>
		|
		<a href="/notes">Notes</a>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
	}

	footer {
		align-self: flex-end;
		width: 100vw;
		background-color: black;
		color: white;
		text-align: right;
		padding: 16px;
	}

	a:visited,
	a:active,
	a {
		color: white;
		text-decoration: none;
	}
</style>
