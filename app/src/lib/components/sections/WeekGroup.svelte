<script lang="ts">
	import WeekHeader from '#lib/components/ui/WeekHeader.svelte';
	import EventRow from '#lib/components/ui/EventRow.svelte';
	import type { WeekGroup } from '#lib/types.js';

	let { week }: { week: WeekGroup } = $props();
</script>

<section aria-labelledby="week-{week.key}">
	<WeekHeader {week} />

	<ul class="mx-(--gutter) border-x border-ink bg-white">
		{#each week.events as event (event.id)}
			<li class="scroll-mt-[calc(var(--header-h)+var(--toolbar-h))] *:transition-colors *:duration-700 target:*:bg-butter">
				<EventRow {event} />
			</li>
		{/each}
	</ul>
</section>
