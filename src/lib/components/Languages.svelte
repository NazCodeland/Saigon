<script lang="ts">
	let languages = ['En', 'Fr', 'Vi']; // Vi for Vietnamese
	let selectedLanguage = 'En'; // default language

	function changeLanguage(lang: string) {
		selectedLanguage = lang;
		// use svelte new library
		// Add your code here to change the site's language
	}
</script>

<div class="language-selection">
	{#each languages as lang (lang)}
		<button on:click={() => changeLanguage(lang)}>{lang}</button>
	{/each}
</div>

<style>
	.language-selection {
		position: absolute;
		top: 8px;
		right: 8px;

		display: flex;
		column-gap: 4px;
	}

	.language-selection > button {
		padding-inline: 2px;
	}
</style>
