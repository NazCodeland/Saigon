<script lang="ts">
	import Logo from './Logo.svelte';

	// note to future self: the `Nav` component and everything after it, are spaced
	// away from the top of the site by the distance of the `header` element.
	// The `header` element get's it's height from the `hero-image` within it.
	// the `hero-image` height is dynamic.
	// there are 3 variations to the `hero-image` 1) hero-image-phone, 2) hero-image-tablet, 3) hero-image
	// the `hero-image` in all 3 variations take a little bit to load and therefore, there is zero distance
	// between the `nav` component and everything that follows from the top of the site, as the `hero-image` loads
	// the `Logo` component loads faster than the `hero-image`, so, while the `hero-image` is loading
	// the height of the `Logo` component is used instead
	let imageHeight: number;
</script>

<!-- TODO: fix landscape mode -->
<header class="grid select-none items-center" style="height: {imageHeight}px;">
	<Logo />

	<!-- hero image -->
	<div bind:clientHeight={imageHeight} class="absolute right-0 top-0 -z-10 w-full">
		<!--  landscape:h-[86vh]  -->
		<picture>
			<source media="(max-width: 720px)" srcset="hero/hero-image-phone.avif" type="image/avif" />
			<source media="(max-width: 1024px)" srcset="hero/hero-image-tablet.avif" type="image/avif" />
			<source media="(max-width: 720px)" srcset="hero/hero-image-phone.webp" type="image/webp" />
			<source media="(max-width: 1024px)" srcset="hero/hero-image-tablet.webp" type="image/webp" />
			<img
				class="m-auto object-contain object-top md:max-h-[100vh]"
				src="hero/hero-image.webp"
				alt=""
				aria-label="A variety of Vietnamese dishes including a bowl of pho, a plate with spring rolls wrapped in green lettuce, grilled meat topped with chopped green onions, clams in a light broth, and a large salad with mixed greens."
			/>
		</picture>
	</div>
</header>

<style>
</style>
