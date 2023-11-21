<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		place-items: center;

		/* border: 2px solid blue; */
		padding: 8px;
	}
</style>
