<script>
	import Hours from '$lib/components/Hours.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<main
	class="m-auto flex max-w-[1230px] flex-col gap-32 p-4 font-restaurant text-base text-theme-text"
>
	<div>
		<!-- <Header /> -->
		<!-- <Menu /> -->
	</div>

	<section class="grid gap-16 rounded-md" id="hours">
		<h2
			class="text-center text-3xl font-bold selection:bg-[#FFFF00]
			selection:text-theme-background"
		>
			Hour & Location
		</h2>
		<div class="flex flex-wrap justify-center gap-8">
			<Hours />
			<GoogleMaps />
		</div>
	</section>

	<section class="grid gap-16 rounded-md" id="contact">
		<h2
			class=" text-center text-3xl font-bold selection:bg-[#FFFF00]
			selection:text-theme-background"
		>
			<!-- Contact -->
		</h2>
		<!-- <Contact /> -->
	</section>

	<!-- <Footer /> -->
</main>

<style>
</style>
