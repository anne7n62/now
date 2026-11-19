<script lang="ts">
	import WeekFilter from '#lib/components/ui/WeekFilter.svelte';
	import TypeFilter from '#lib/components/ui/TypeFilter.svelte';
	import SearchField from '#lib/components/ui/SearchField.svelte';
</script>

<div
	class="flex flex-col gap-3 border-t border-ink bg-sage px-(--gutter) py-3 lg:flex-row lg:items-center lg:justify-between"
>
	<div role="group" aria-labelledby="week-filter-label" class="flex flex-wrap items-center gap-2.5">
		<span id="week-filter-label" class="text-filter">Weekly filters:</span>
		<WeekFilter />
	</div>

	<div class="flex flex-wrap items-center gap-2.5">
		<TypeFilter />
		<SearchField />
	</div>
</div>
