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
	nav {
		background-color: #333;
	}

	nav ul {
		display: flex;
		justify-content: end;
		list-style-type: none;
	}

	nav li {
		padding-left: 2rem;
	}

	nav li a {
		color: white;
		padding: 14px 16px;
		text-decoration: none;
	}

	a::before {
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
	}
</style>
