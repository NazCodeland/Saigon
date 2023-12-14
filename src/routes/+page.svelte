<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import RestaurantMenu from '$lib/components/RestaurantMenu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="flex flex-col gap-y-32 max-w-[1230px] items-center">
	<!-- <HeroImage /> -->
	<Header />
	<GoogleMaps />
	<Hours />
	<RestaurantMenu />
	<Footer />
</main>
