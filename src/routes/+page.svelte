<script lang="ts">
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<!-- prettier-ignore -->
<main class="m-auto flex max-w-[1230px] flex-col gap-32 p-4 font-restaurant text-base text-theme-text">
	
	<section>
		<Header />
		<Nav />
	</section>

	<Menu />

	<!-- hours & location -->
	<section class="grid gap-8 rounded-md md:gap-16" id="hours">
		<h2
			class="text-center text-3xl font-bold selection:bg-[#FFFF00]
			selection:text-theme-background"
		>
			Hours & Location
		</h2>
		<div class="flex flex-wrap justify-center gap-8">
			<Hours />
			<GoogleMaps />
		</div>
	</section>

	<!-- contact section -->
	<section class="grid gap-8 rounded-md md:gap-16" id="contact">
		<h2
			class=" text-center text-3xl font-bold selection:bg-[#FFFF00]
			selection:text-theme-background"
		>
			Contact
		</h2>
		<Contact />
	</section>

	<Footer />
</main>

<style>
</style>
