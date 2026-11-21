<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { categories } from '#lib/categories.js';
	import type { Category } from '#lib/types.js';

	let { value = $bindable() }: { value: Category | 'all' } = $props();
</script>

<label
	class="relative flex items-center border border-ink focus-within:outline-2 focus-within:outline-ink"
>
	<span class="sr-only">Filter event type</span>
	<select
		bind:value
		class="cursor-pointer appearance-none bg-transparent py-px pr-6 pl-2.5 text-filter text-ink-soft focus:outline-none"
	>
		<option value="all">All event types</option>
		{#each categories as category (category)}
			<option value={category}>{category}</option>
		{/each}
	</select>
	<ChevronDown size={18} aria-hidden="true" class="pointer-events-none absolute right-0.5" />
</label>
