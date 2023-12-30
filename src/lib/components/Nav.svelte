<script lang="ts">
	import { browser } from '$app/environment';
	import { navStore, toggleNav } from '$lib/stores/navStore';
	import { slide } from 'svelte/transition';

	// prettier-ignore
	let navItems = [
		{ name: 'Menu', url: '/#menu' },
		{ name: 'Reservations', url: 'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us' },
		{ name: 'Contact', url: '#contact' },
		{ name: 'Order Online', url: 'https://www.ubereats.com/store/saigon-restaurant/nApsyLBYUdWMrTVkXtkPfQ?diningMode=DELIVERY' }
	];

	let innerWidth: number;
	let outerWidth: number;
	$: {
		if (innerWidth >= 808 || outerWidth >= 808) {
			navStore.set(true);
			console.log('innerWidth', innerWidth);
		}
	}
</script>

<svelte:window bind:innerWidth bind:outerWidth />

<!-- hamburger icon button -->
<button
	on:click={toggleNav}
	type="button"
	tabindex="0"
	class="md:hidden absolute top-12 right-0"
	aria-label="menu"
>
	<img src="hamburger.svg" alt="menu icon" />
</button>

{#if $navStore}
	<nav
		in:slide
		out:slide
		class="border-t-2 border-theme-primary md:border-none md:shadow-none shadow-md select-none"
	>
		<ul class="flex flex-col md:flex-row md:justify-evenly items-center md:gap-8 gap-2 p-4">
			{#each navItems as item (item.name)}
				<li class="whitespace-nowrap bg-theme-background px-1 py-0.5">
					<a class="" href={item.url}>{item.name.toUpperCase()}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
</style>
