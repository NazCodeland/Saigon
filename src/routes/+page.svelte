<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import RestaurantMenu from '$lib/components/RestaurantMenu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<main class="flex flex-col gap-y-32 max-w-[1230px] m-auto">
	<!-- <HeroImage /> -->
	<Header />
	<RestaurantMenu />

	<div id="hours" class="flex gap-8 justify-center flex-wrap">
		<Hours />
		<GoogleMaps />
	</div>

	<!-- <Newsletter /> -->
	<Footer />
</main>
