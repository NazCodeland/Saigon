<script lang="ts">
	import Languages from '$lib/components/Languages.svelte';
	import Nav from './Nav.svelte';
	let navItems = ['Menu', 'Reservations', 'Order Online', 'Contact'];
</script>

<header>
	<span class="logo">
		<a href="/"><img src="/saigon-logo-small.svg" alt="Saigon Logo" /></a>
	</span>
	<Languages />
	<Nav {navItems} />
</header>

<style>
	header {
		display: flex;
		row-gap: 16px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background-color: #333;
		padding: 24px;
	}

	.logo {
		width: 200px;
		height: 120px;
	}
</style>
