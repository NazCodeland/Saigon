<script lang="ts">
	import externalLink from '$lib/icons/externalLink.svg';
	let date: Date = new Date();
	let currentYear: number = date.getFullYear();
</script>

<footer class="ml-auto text-sm">
	<span>
		&copy; {currentYear} <strong>Saigon Ottawa</strong>
	</span>
	<span>
		| Site by
		<a
			class="inline-flex items-center border-b border-[#6095F5] hover:text-[#6095F5]"
			href="http://NazCodeland.dev"
			rel="noopener noreferrer"
			target="_blank"
		>
			NazCodeland

			<img src={externalLink} alt="" aria-label="external link icon" />
		</a>
	</span>
</footer>
