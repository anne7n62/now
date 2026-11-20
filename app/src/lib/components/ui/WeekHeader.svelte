<script lang="ts">
	import type { WeekGroup } from '#lib/types.js';
	let { week }: { week: WeekGroup } = $props();
</script>

<h2
	id="week-{week.key}"
	class="border-y border-ink bg-pink px-(--gutter) py-3 font-serif text-[22px] leading-4"
>
	Week {week.week}
</h2>
