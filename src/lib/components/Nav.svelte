<script>
	import { navStore, toggleNav } from '$lib/stores/navStore';
	import { slide } from 'svelte/transition';

	// prettier-ignore
	let navItems = [
		{ name: 'Menu', url: '/menu' },
		{ name: 'Reservations', url: 'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us' },
		{ name: 'Contact', url: '/contact' },
		{ name: 'Order Online', url: 'https://www.ubereats.com' }
	];
</script>

<button
	on:click={toggleNav}
	type="button"
	tabindex="0"
	class="absolute top-14 right-8"
	aria-label="menu"
>
	<img src="hamburger.svg" alt="menu icon" />
</button>

{#if $navStore}
	<nav in:slide out:slide class="border-t-2 border-primary">
		<ul class="flex flex-col gap-y-3 ml-8 mt-4">
			{#each navItems as item (item.name)}
				<li>
					<a class="" href={item.url}>{item.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
</style>
