<script lang="ts">
	import WeekGroup from './WeekGroup.svelte';
	import type { WeekGroup as WeekGroupData } from '#lib/types.js';

	let { weeks }: { weeks: WeekGroupData[] } = $props();
</script>

<div class="scroll-mt-[calc(var(--header-h)+var(--toolbar-h))]">
	{#each weeks as week (week.key)}
		<WeekGroup {week} />
	{:else}
		<p class="mx-(--gutter) border-x border-t border-ink bg-white px-4 py-6 text-center">
			No events match your filters.
		</p>
	{/each}
	<div class="h-[42px] border-y border-ink" aria-hidden="true"></div>
</div>
