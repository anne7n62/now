<script lang="ts">
	import WeekGroup from './WeekGroup.svelte';
	import type { WeekGroup as WeekGroupData } from '#lib/types.js';

	let { weeks }: { weeks: WeekGroupData[] } = $props();
</script>

<div class="scroll-mt-28">
	{#each weeks as week (week.key)}
		<WeekGroup {week} />
	{/each}
	<div class="h-[42px] border-y border-ink" aria-hidden="true"></div>
</div>
