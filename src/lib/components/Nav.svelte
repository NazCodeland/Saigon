<script>
	export let navItems = ['Menu', 'Reservations', 'Contact', 'Order Online'];
	let navLinkUrls = [
		'/menu',
		'https://www.tbdine.com/book/restaurant/saigon-restaurant?idApp=70479&language=en-us',
		'https://www.ubereats.com',
		'/contact'
	];
</script>

<nav>
	<ul>
		{#each navItems as item, index (item)}
			<li>
				<a href={navLinkUrls[index]}>{item}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav ul {
		display: flex;
		list-style-type: none;
		column-gap: 8px;
	}

	nav li a {
		color: white;
		text-decoration: none;
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
