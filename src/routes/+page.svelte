<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import RestaurantMenu from '$lib/components/RestaurantMenu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main
	class="m-auto flex max-w-[1230px] flex-col gap-y-32 bg-theme-background p-4 font-restaurant text-base text-theme-text"
>
	<Header />
	<RestaurantMenu />

	<div id="hours" class="flex flex-wrap justify-center gap-8">
		<Hours />
		<GoogleMaps />
	</div>

	<Footer />
</main>

<style>
</style>
