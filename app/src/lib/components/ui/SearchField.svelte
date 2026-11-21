<script lang="ts">
	import { Search } from '@lucide/svelte';

	let { value = $bindable() }: { value: string } = $props();
</script>

<label
	class="flex w-full items-center gap-2.5 border border-ink px-2.5 py-0.5 focus-within:outline-2 focus-within:outline-ink sm:w-[231px]"
>
	<span class="sr-only">Search events</span>
	<input
		type="search"
		bind:value
		placeholder="Search"
		class="w-full min-w-0 bg-transparent text-filter text-ink-soft placeholder:text-ink-soft focus:outline-none"
	/>
	<Search size={16} aria-hidden="true" class="shrink-0" />
</label>
