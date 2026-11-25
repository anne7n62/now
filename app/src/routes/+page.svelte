<script lang="ts">
	import { events } from '#lib/events.js';
	import { getUpcomingWeeks } from '#lib/utils/dates.js';
	import type { CalendarEvent, Category } from '#lib/types.js';

	import AnnouncementSection from '#lib/components/sections/AnnouncementSection.svelte';
	import CoverSection from '#lib/components/sections/CoverSection.svelte';
	import CalendarToolbar from '#lib/components/sections/CalendarToolbar.svelte';
	import WeekCalendar from '#lib/components/sections/WeekCalendar.svelte';

	//alle uger, filteres aldrig og skal bruge af uge-knapperne i toolbar
	const allWeeks = getUpcomingWeeks(events);

	// State for filtre. null = "all weeks", 'all' = "all categories".
	let selectedWeek = $state<number | null>(null);
	let selectedCategory = $state<Category | 'all'>('all');
	let search = $state('');

	//find højde på toolbar
	  let toolbarH = $state(0);

	//
	function matches(event: CalendarEvent) {
		if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;

		const query = search.trim().toLowerCase();
		if (!query) return true;

		const text = `${event.title} ${event.venue} ${event.city} ${event.description}`;
		return text.toLowerCase().includes(query);
	}

	// Valgt uge - genberegnes hver gang selectedWeek skifter (derived genberegner og opdatere værdi automatisk)
	const weeks = $derived(
		allWeeks
			.filter((week) => selectedWeek === null || week.week === selectedWeek)
			.map((week) => ({ ...week, events: week.events.filter(matches) }))
			.filter((week) => week.events.length > 0)
	);
</script>

<CoverSection />

<section id="calendar" aria-label="Event calendar" class="scroll-mt-(--header-h)" style="--toolbar-h: {toolbarH}px">
	<CalendarToolbar {allWeeks} bind:selectedWeek bind:selectedCategory bind:search bind:height={toolbarH} />
	<WeekCalendar {weeks} />
</section>

<AnnouncementSection />
