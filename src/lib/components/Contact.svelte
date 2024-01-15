<script lang="ts">
	import locationIcon from '$lib/icons/location.svg';
	import phoneIcon from '$lib/icons/phone.svg';
	import emailIcon from '$lib/icons/email.svg';
	import instagramIcon from '$lib/icons/instagram.svg';

	let formStatus = {
		isSending: false,
		message: '',
		color: ''
	};

	async function handleSubmit(event: SubmitEvent) {
		formStatus.isSending = true;
		formStatus.message = 'Sending...';

		if (event.target) {
			const formData = new FormData(event.target as HTMLFormElement);
			let emailResponseBody;
			try {
				const emailResponse = await fetch('https://sendgrid-email-worker.jason-f38.workers.dev', {
					method: 'POST',
					body: formData
				});
				emailResponseBody = await emailResponse.json();
				formStatus.isSending = false;
				formStatus.message = emailResponseBody.message;
				formStatus.color = 'bg-green-700';

				//
			} catch (error) {
				console.error('Error occurred within handleSubmit:', error);
				formStatus.isSending = false;
				formStatus.message =
					emailResponseBody?.message || 'An unexpected error occurred, please try again.';
				formStatus.color = 'bg-red-600';
			}
		}
	}
</script>

<div class="flex flex-wrap items-center justify-evenly gap-16">
	<ul class="flex flex-col gap-8 pb-16">
		<li>
			<address>
				<a
					class="flex items-center gap-8"
					href="https://maps.google.com/?q=85+Clarence+St,+Ottawa+ON+K1N+5P5"
					target="_blank"
				>
					<img src={locationIcon} alt="" aria-label="location icon" />85 Clarence St, Ottawa ON K1N
					5P5
				</a>
			</address>
		</li>
		<li>
			<a class="flex items-center gap-8" href="tel:6136958887">
				<img src={phoneIcon} alt="" aria-label="phone icon" /> 613-695-8887</a
			>
		</li>
		<li>
			<a class="flex items-center gap-8" href="mailto:info@saigonottawa.com">
				<img src={emailIcon} alt="" aria-label="email icon" /> info@saigonottawa.com</a
			>
		</li>
		<li>
			<a
				class="flex items-center gap-8"
				href="https://www.instagram.com/saigonottawa/"
				target="_blank"
				rel="noopener"
			>
				<img src={instagramIcon} alt="" aria-label="instagram icon" /> @saigonottawa
			</a>
		</li>
	</ul>

	<form on:submit|preventDefault={handleSubmit} class="flex w-full max-w-[400px] flex-col gap-4">
		<p>
			Feel free to use the form below to reach out to us. Please provide your <i>name</i>,
			<i>email</i>, and your
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

		{#if formStatus.isSending}
			<p>Sending...</p>
		{:else}
			<p class="rounded-md {formStatus.color} px-4 py-1">{formStatus.message}</p>
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
