<script lang="ts">
	import { navStore } from '$lib/stores/navStore';
	// import { toggleNav } from '$lib/stores/navStore';

	import { slide } from 'svelte/transition';

	type NavItem = {
		name: string;
		url: string;
	};

	// prettier-ignore
	let navItems: NavItem[] = [
		{ name: 'Menu', url: '/#menu' },
		{ name: 'Reservations', url: 'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us' },
		{ name: 'Contact', url: '/#contact' },
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

<!-- customer decided to go with open navigation in all viewport sizes
leaving this here for future use-case if needed -->

<!-- hamburger icon button -->
<!-- <button
	on:click={toggleNav}
	type="button"
	tabindex="0"
	class="absolute right-4 top-16 md:hidden"
	aria-label="menu"
>
	<img src="hamburger.svg" alt="" aria-label="menu icon" />
</button> -->

{#if $navStore}
	<nav
		in:slide
		out:slide
		class="border-theme-primary bg-theme-background w-full select-none border-t-2 shadow-md md:bg-transparent"
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
