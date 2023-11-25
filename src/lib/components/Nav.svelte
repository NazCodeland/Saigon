<script>
	let navItems = ['Menu', 'Reservations', 'Contact', 'Order Online'];
	let navLinkUrls = [
		'/menu',
		'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us',
		'https://www.ubereats.com',
		'/contact'
	];
</script>

<!-- <nav class="absolute left-4 top-24 border-t-2 border-[var(--color-primary)] w-[286px]"> -->
<nav>
	<ul class="flex flex-col gap-y-2">
		{#each navItems as item, index (item)}
			<li>
				<a class="text-gray-50 font-semibold" href={navLinkUrls[index]}>{item.toUpperCase()}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: relative;
	}
	ul::before {
		content: '';
		display: block;
		position: absolute;
		left: -2px;
		background-color: var(--color-primary);
		inline-size: 3px;
		block-size: 160px;
	}
	/* a::before {
		content: '';
		display: none;
		background-color: orange;
		width: 20px;
		height: 20px;
		position: relative;
		left: -10px;
		bottom: -5px;
	}

	a:hover::before {
		display: block;
	} */
</style>
