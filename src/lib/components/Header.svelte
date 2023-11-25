<script lang="ts">
	import Languages from '$lib/components/Languages.svelte';
	import Menu from './Menu.svelte';
</script>

<header class="pb-60 z-10">
	<div class="flex mt-36">
		<img
			class="flex-shrink max-w-[170px] max-h-[100px]"
			src="/saigon-logo-small.svg"
			alt="Saigon Logo"
		/>

		<Menu />
	</div>
	<!--  -->
	<div class="absolute top-2 right-2 text-xs">
		<Languages />
	</div>
</header>

<style>
</style>
