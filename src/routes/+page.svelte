<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import RestaurantMenu from '$lib/components/RestaurantMenu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
</script>

<main class="m-auto flex max-w-[1230px] flex-col p-4 font-restaurant text-base text-theme-text">
	<div class="h-[clamp(20rem,4.3943rem+78.0287vw,43.75rem)] md:h-[120vh]">
		<HeroImage />
		<Header />
	</div>

	<RestaurantMenu />

	<div id="hours" class="flex flex-wrap justify-center gap-8">
		<Hours />
		<GoogleMaps />
	</div>

	<Footer />
</main>

<style>
</style>
