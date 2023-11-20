<script lang="ts">
	import Nav from './Nav.svelte';
	let navItems = ['Menu', 'Reservations', 'Order Online', 'Contact'];
	let languages = ['En', 'Fr', 'Vi']; // Vi for Vietnamese
	let selectedLanguage = 'En'; // default language

	function changeLanguage(lang: string) {
		selectedLanguage = lang;
		// use svelte new library
		// Add your code here to change the site's language
	}
</script>

<header>
	<span class="logo">
		<a href="/"><img src="/saigon-logo-small.svg" alt="Saigon Logo" /></a>
	</span>
	<Nav {navItems} />
	<div class="language-selection">
		{#each languages as lang (lang)}
			<button on:click={() => changeLanguage(lang)}>{lang}</button>
		{/each}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background-color: #333;
		color: white;
		padding: 16px 24px;
	}

	.logo {
		width: 200px;
		height: 120px;
	}

	.language-selection {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.language-selection button {
		margin-left: 10px;
	}
</style>
