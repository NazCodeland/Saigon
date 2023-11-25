<script lang="ts">
	let languages = ['En', 'Fr', 'Vi']; // Vi for Vietnamese
	let selectedLanguage = 'En'; // default language

	function changeLanguage(lang: string) {
		selectedLanguage = lang;
		// use svelte new library
		// Add your code here to change the site's language
	}
</script>

<div class="flex gap-2">
	{#each languages as lang (lang)}
		<button class="border-2 px-1" on:click={() => changeLanguage(lang)}>{lang}</button>
	{/each}
</div>

<style>
</style>
