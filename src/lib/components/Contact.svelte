<script>
	import locationIcon from '$lib/icons/location.svg';
	import phoneIcon from '$lib/icons/phone.svg';
	import emailIcon from '$lib/icons/email.svg';
	import instagramIcon from '$lib/icons/instagram.svg';

	let name = '';
	let email = '';
	let message = '';

	const handleSubmit = () => {
		// Handle form submission logic here
		alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
	};
</script>

<div class=" flex flex-wrap content-start justify-center gap-32">
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
			<a class="flex items-center gap-8" href="mailto:email@example.com">
				<img src={emailIcon} alt="" /> email@example.com</a
			>
		</li>
		<li class="flex items-center gap-8 px-[18px]">
			<a href="https://www.instagram.com/saigonottawa/" target="_blank" rel="noopener">
				<img src={instagramIcon} alt="" />
			</a>
		</li>
	</ul>

	<form
		id="contact"
		class="flex w-full max-w-[400px] flex-col gap-4"
		on:submit|preventDefault={handleSubmit}
	>
		<label for="name" class="flex flex-col gap-0.5">
			Name
			<input
				id="name"
				type="text"
				bind:value={name}
				required
				class="rounded-md px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			/>
		</label>

		<label for="email" class="flex flex-col gap-0.5">
			Email
			<input
				id="email"
				type="email"
				bind:value={email}
				required
				class=" rounded-md px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			/>
		</label>

		<label for="message" class="flex flex-col gap-0.5">
			Message
			<textarea
				id="message"
				bind:value={message}
				required
				rows="5"
				class="rounded-md border px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			></textarea>
		</label>

		<button
			type="submit"
			class="shadow-sm inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium"
		>
			Send
		</button>
	</form>
</div>

<style>
</style>
