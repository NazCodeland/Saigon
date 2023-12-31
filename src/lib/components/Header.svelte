<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	let imageHeight: number;
</script>

<header class="md:grid md:items-center" style="height: {imageHeight}px;">
	<Logo />

	<!-- hero image -->
	<div bind:clientHeight={imageHeight} class="absolute right-0 top-0 -z-10 w-full">
		<img
			class="m-auto object-contain object-top md:max-h-[100vh]"
			src="hero-image.jpg"
			alt="Saigon Logo"
		/>
	</div>
</header>
<Nav />

<style>
</style>
