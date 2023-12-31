<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main
	class="m-auto flex max-w-[1230px] flex-col gap-24 p-4 font-restaurant text-base text-theme-text"
>
	<div>
		<Header />
		<Menu />
	</div>

	<div id="hours" class="flex flex-wrap justify-center gap-8">
		<Hours />
		<GoogleMaps />
	</div>

	<Footer />
</main>

<style>
</style>
