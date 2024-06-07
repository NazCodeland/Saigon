<script lang="ts">
	import { browser } from '$app/environment';

	enum DayOfWeek {
		Sunday = 'Sunday',
		Monday = 'Monday',
		Tuesday = 'Tuesday',
		Wednesday = 'Wednesday',
		Thursday = 'Thursday',
		Friday = 'Friday',
		Saturday = 'Saturday'
	}

	let days: DayOfWeek[] = [
		DayOfWeek.Sunday,
		DayOfWeek.Monday,
		DayOfWeek.Tuesday,
		DayOfWeek.Wednesday,
		DayOfWeek.Thursday,
		DayOfWeek.Friday,
		DayOfWeek.Saturday
	];

	let currentDay: DayOfWeek;

	if (browser) {
		let date = new Date();
		currentDay = days[date.getDay()];
	}
</script>

<section
	class="flex w-full max-w-[360px] flex-col gap-4 rounded-md p-4 outline outline-1 outline-[var(--theme-color-primary)]"
>
	<h1 class=" text-center font-bold">BUSINESS HOURS</h1>
	<hr class="border border-[var(--theme-color-primary)]" />
	<div class="flex justify-between">
		<ul class="">
			<li class:highlight={DayOfWeek.Monday === currentDay} class="pb-1">{DayOfWeek.Monday}</li>
			<li class:highlight={DayOfWeek.Tuesday === currentDay} class="pb-1">{DayOfWeek.Tuesday}</li>
			<li class:highlight={DayOfWeek.Wednesday === currentDay} class="pb-1">
				{DayOfWeek.Wednesday}
			</li>
			<li class:highlight={DayOfWeek.Thursday === currentDay} class="pb-1">{DayOfWeek.Thursday}</li>
			<li class:highlight={DayOfWeek.Friday === currentDay} class="pb-1">{DayOfWeek.Friday}</li>
			<li class:highlight={DayOfWeek.Saturday === currentDay} class="pb-1">{DayOfWeek.Saturday}</li>
			<li class:highlight={DayOfWeek.Sunday === currentDay} class="pb-1">{DayOfWeek.Sunday}</li>
		</ul>
		<ul>
			<li class:highlight={DayOfWeek.Monday === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={DayOfWeek.Tuesday === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={DayOfWeek.Wednesday === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={DayOfWeek.Thursday === currentDay} class="pb-1">4:00 pm - 9:00 pm</li>
			<li class:highlight={DayOfWeek.Friday === currentDay} class="pb-1">12:00 pm - 11:00 pm</li>
			<li class:highlight={DayOfWeek.Saturday === currentDay} class="pb-1">12:00 pm - 11:00 pm</li>
			<li class:highlight={DayOfWeek.Sunday === currentDay} class="pb-1">12:00 pm - 8:00 pm</li>
		</ul>
	</div>
	<p class="text-center">Walk-ins Are Welcome</p>
</section>

<style lang="css">
	.highlight {
		color: var(--theme-color-secondary);
	}
</style>
