<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	let imageHeight: number;
</script>

<!-- TODO: fix landscape mode -->
<header class="grid items-center" style="height: {imageHeight}px;">
	<Logo />

	<!-- hero image -->
	<div bind:clientHeight={imageHeight} class="absolute right-0 top-0 -z-10 w-full">
		<!--  landscape:h-[86vh]  -->
		<picture>
			<source media="(max-width: 640px)" srcset="hero-image-phone.jpg" />
			<source media="(max-width: 1024px)" srcset="hero-image-tablet.jpg" />
			<img
				class="m-auto object-contain object-top md:max-h-[100vh]"
				src="hero-image.jpg"
				alt="A variety of Vietnamese dishes including a bowl of pho, a plate with spring rolls wrapped in green lettuce, grilled meat topped with chopped green onions, clams in a light broth, and a large salad with mixed greens."
			/>
		</picture>
	</div>
</header>
<Nav />

<style>
</style>
