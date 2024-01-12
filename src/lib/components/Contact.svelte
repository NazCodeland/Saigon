<script lang="ts">
	import locationIcon from '$lib/icons/location.svg';
	import phoneIcon from '$lib/icons/phone.svg';
	import emailIcon from '$lib/icons/email.svg';
	import instagramIcon from '$lib/icons/instagram.svg';

	let name: string = '';
	let email: string = '';
	let message: string = '';
	let isSending: boolean = false;
	let formStatus: string = '';

	async function handleSubmit(event: SubmitEvent) {
		isSending = true;
		formStatus = 'Sending...';

		if (event.target) {
			const formData = new FormData(event.target as HTMLFormElement);
			try {
				const res = await fetch('https://sendgrid-email-worker.jason-f38.workers.dev', {
					method: 'POST',
					body: formData
				});
				console.log('res', res);
				isSending = false;
				formStatus = 'Your message has been sent.';
				//
			} catch (error) {
				console.error(error);
				isSending = false;
				formStatus = 'Something went wrong, please try again.';
			}
		}
	}
</script>

<div class="flex flex-wrap justify-evenly gap-16">
	<ul class="m-auto flex flex-col gap-8 pb-16">
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
	<form on:submit|preventDefault={handleSubmit} class="flex w-full max-w-[400px] flex-col gap-4">
		<p>
			Feel free to use the form below to reach out to us. Please provide your <i>name</i>,
			<i>email</i>, and
			<i>message</i>. We will get back to you as soon as possible.
		</p>
		<hr />
		<label for="name" class="flex flex-col gap-0.5">
			Name
			<input
				id="name"
				type="text"
				name="name"
				required
				class="rounded-md px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			/>
		</label>

		<label for="email" class="flex flex-col gap-0.5">
			Email
			<input
				id="email"
				type="email"
				name="email"
				required
				class=" rounded-md px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			/>
		</label>

		<label for="message" class="flex flex-col gap-0.5">
			Message
			<textarea
				id="message"
				name="message"
				required
				rows="5"
				class="rounded-md border px-3 py-2 font-semibold text-slate-950 outline-none focus:shadow-glow"
			></textarea>
		</label>

		{#if isSending}
			<p>Sending...</p>
		{:else if formStatus === 'Your message has been sent.'}
			<p class="rounded-md bg-green-700 px-4 py-1">{formStatus}</p>
		{:else if formStatus === 'Something went wrong, please try again.'}
			<p class="rounded-md bg-red-600 px-4 py-1">{formStatus}</p>
		{/if}

		<button
			type="submit"
			class="shadow-sm inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium"
		>
			Send Message
		</button>
	</form>
</div>

<style>
</style>
