<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	let imageHeight: number;
</script>

<header class="md:grid md:items-center" style="height: {imageHeight}px;">
	<Logo />
	<div
		bind:clientHeight={imageHeight}
		class="absolute right-0 top-0 -z-10
		w-full object-contain object-top"
	>
		<img src="hero-image.jpg" class="m-auto md:h-[100vh]" alt="Saigon Logo" />
	</div>
</header>
<Nav />

<style>
</style>
