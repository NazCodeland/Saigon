<script lang="ts">
	import { browser } from '$app/environment';

	let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	let currentDay: string;

	if (browser) {
		let date = new Date();
		currentDay = days[date.getDay()].toLowerCase();
	}
</script>

<section
	class="outline outline-1 rounded-md outline-[var(--color-secondary)] p-4 flex flex-col gap-y-4"
	id="#hours"
>
	<h1 class="font-bold text-xl text-center">BUSINESS HOURS</h1>
	<hr class="border border-[var(--color-secondary)] border-1" />
	<div class="flex gap-x-8">
		<ul class="flex flex-col">
			<li class:highlight={'monday' === currentDay} class="pb-1">Monday</li>
			<li class:highlight={'tuesday' === currentDay} class="pb-1">Tuesday</li>
			<li class:highlight={'wednesday' === currentDay} class="pb-1">Wednesday</li>
			<li class:highlight={'thursday' === currentDay} class="pb-1">Thursday</li>
			<li class:highlight={'friday' === currentDay} class="pb-1">Friday</li>
			<li class:highlight={'saturday' === currentDay} class="pb-1">Saturday</li>
			<li class:highlight={'sunday' === currentDay} class="pb-1">Sunday</li>
		</ul>
		<ul class="flex flex-col">
			<li class:highlight={'monday' === currentDay} class="pb-1">Closed</li>
			<li class:highlight={'tuesday' === currentDay} class="pb-1">4:00 pm - 10:00 PM</li>
			<li class:highlight={'wednesday' === currentDay} class="pb-1">4:00 PM - 10:00 PM</li>
			<li class:highlight={'thursday' === currentDay} class="pb-1">4:00 PM - 10:00 PM</li>
			<li class:highlight={'friday' === currentDay} class="pb-1">4:00 PM - 12:00 AM</li>
			<li class:highlight={'saturday' === currentDay} class="pb-1">12:00 PM - 12:00 AM</li>
			<li class:highlight={'sunday' === currentDay} class="pb-1">12:00 PM - 8:00 AM</li>
		</ul>
	</div>
	<p class="text-center">Walk-ins Are Welcome</p>
</section>

<style lang="css">
	.highlight {
		border-top: 1px solid var(--color-secondary);
		border-bottom: 1px solid var(--color-secondary);
	}
</style>
