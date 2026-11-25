<script lang="ts">
	import WeekFilter from '#lib/components/ui/WeekFilter.svelte';
	import TypeFilter from '#lib/components/ui/TypeFilter.svelte';
	import SearchField from '#lib/components/ui/SearchField.svelte';
	import type { Category, WeekGroup } from '#lib/types.js';

	let {
		allWeeks,
		selectedWeek = $bindable(),
		selectedCategory = $bindable(),
		search = $bindable(),
		height = $bindable(0)
	}: {
		allWeeks: WeekGroup[];
		selectedWeek: number | null;
		selectedCategory: Category | 'all';
		search: string;
		height?: number;
	} = $props();
</script>

<!-- /***/ WEEK FILTERS **/ -->
<div
	bind:clientHeight={height} class="sticky top-(--header-h) z-20 flex flex-col gap-3 border-t border-ink bg-sage px-(--gutter) py-3 lg:flex-row lg:items-center lg:justify-between"
>
	<div role="group" aria-labelledby="week-filter-label" class="flex flex-wrap items-center gap-2.5">
		<span id="week-filter-label" class="text-filter">Weekly filters:</span>

		<WeekFilter
			label="All weeks"
			active={selectedWeek === null}
			onclick={() => (selectedWeek = null)}
		/>
		{#each allWeeks as week (week.key)}
			<WeekFilter
				label="Week {week.week}"
				active={selectedWeek === week.week}
				onclick={() => (selectedWeek = week.week)}
			/>
		{/each}
	</div>

	<div class="flex flex-wrap items-center gap-2.5">
		<TypeFilter bind:value={selectedCategory} />
		<SearchField bind:value={search} />
	</div>
</div>
