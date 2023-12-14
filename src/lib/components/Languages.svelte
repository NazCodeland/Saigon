<script lang="ts">
	let languages = ['En', 'Fr', 'Vi']; // Vi for Vietnamese
	let selectedLanguage = 'En'; // default language

	function changeLanguage(lang: string) {
		selectedLanguage = lang;
		// use svelte new library
		// Add your code here to change the site's language
	}
</script>

<div class="flex gap-2 absolute top-2 right-4 text-xs">
	{#each languages as lang (lang)}
		<button class="border border-slate-700 px-2 py-1" on:click={() => changeLanguage(lang)}
			>{lang}</button
		>
	{/each}
</div>

<style>
</style>
