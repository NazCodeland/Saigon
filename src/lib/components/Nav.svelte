<script lang="ts">
	import { navStore, toggleNav } from '$lib/stores/navStore';
	import { slide } from 'svelte/transition';

	// prettier-ignore
	// { name: 'Contact', url: 'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us' },
	let navItems = [
		{ name: 'Menu', url: '/#menu' },
		{ name: 'Reservations', url: 'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us' },
		{ name: 'Order Online', url: 'https://www.ubereats.com/store/saigon-restaurant/nApsyLBYUdWMrTVkXtkPfQ?diningMode=DELIVERY' }
	];

	let innerWidth: number;
	let outerWidth: number;
	$: {
		if (innerWidth >= 808 || outerWidth >= 808) {
			navStore.set(true);
		}
	}
</script>

<svelte:window bind:innerWidth bind:outerWidth />

<!-- hamburger icon button -->
<!-- <button
	on:click={toggleNav}
	type="button"
	tabindex="0"
	class="absolute right-4 top-16 md:hidden"
	aria-label="menu"
>
	<img src="hamburger.svg" alt="menu icon" />
</button> -->

{#if $navStore}
	<nav
		in:slide
		out:slide
		class=" shadow-md w-full select-none border-t-2 border-theme-primary md:bg-transparent"
	>
		<ul class=" flex flex-row flex-wrap items-center justify-evenly gap-2 py-4">
			{#each navItems as item (item.name)}
				<li class="whitespace-nowrap px-1 py-0.5 text-xs md:text-lg">
					<a class="" href={item.url}>{item.name.toUpperCase()}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
</style>
