<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLButtonAttributes & { children: Snippet } = $props();
</script>

<button
	type="button"
	class="inline-flex shrink-0 cursor-pointer items-center gap-[5px] rounded-full border border-ink bg-butter px-2.5 py-0.5 text-button whitespace-nowrap text-ink-soft transition-colors hover:bg-pink"
	{...rest}
>
	{@render children()}
</button>
