<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
</script>

<!-- h-[460px] -->
<header class="relative w-full md:flex md:flex-col md:items-center">
	<Logo />
	<Nav />
	<HeroImage />
</header>

<style>
</style>
