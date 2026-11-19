<script lang="ts">
	import AnnouncementSection from '#lib/components/sections/AnnouncementSection.svelte';
	import CoverSection from '#lib/components/sections/CoverSection.svelte';
	import CalendarToolbar from '#lib/components/sections/CalendarToolbar.svelte';
	import WeekCalendar from '#lib/components/sections/WeekCalendar.svelte';
</script>

<CoverSection />

<section aria-label="Event calendar">
	<CalendarToolbar />
	<WeekCalendar />
</section>

<AnnouncementSection />
