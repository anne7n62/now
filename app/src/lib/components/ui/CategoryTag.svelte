<script lang="ts">
	import type { Category } from '#lib/types.js';
	let { category }: { category: Category } = $props();
</script>

<span
	class="inline-flex items-center rounded-full border border-ink px-2.5 py-0.5 text-filter text-ink-soft"
>
	{category}
</span>
