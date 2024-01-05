<script lang="ts">
	import locationIcon from '$lib/icons/location.svg';
	import phoneIcon from '$lib/icons/phone.svg';
	import emailIcon from '$lib/icons/email.svg';
	import instagramIcon from '$lib/icons/instagram.svg';
</script>

<ul class="flex flex-col gap-8">
	<li>
		<address>
			<a
				class="flex items-center gap-8"
				href="https://maps.google.com/?q=85+Clarence+St,+Ottawa+ON+K1N+5P5"
				target="_blank"><img src={locationIcon} alt="" />85 Clarence St, Ottawa ON K1N 5P5</a
			>
		</address>
	</li>
	<li>
		<a class="flex items-center gap-8" href="tel:6136958887">
			<img src={phoneIcon} alt="" /> 613-695-8887</a
		>
	</li>
	<li>
		<a class="flex items-center gap-8" href="mailto:info@saigonottawa.com">
			<img src={emailIcon} alt="" /> info@saigonottawa.com</a
		>
	</li>
	<li>
		<a
			class="flex items-center gap-8"
			href="https://www.instagram.com/saigonottawa/"
			target="_blank"
			rel="noopener"
		>
			<img src={instagramIcon} alt="" /> @saigonottawa
		</a>
	</li>
</ul>

<style>
</style>
