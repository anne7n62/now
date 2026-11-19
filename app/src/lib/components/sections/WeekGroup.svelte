<script lang="ts">
	import WeekHeader from '#lib/components/ui/WeekHeader.svelte';
	import EventRow from '#lib/components/ui/EventRow.svelte';
</script>

<section>
	<WeekHeader />

	<ul class="mx-(--gutter) border-x border-ink bg-white">
		<li class="scroll-mt-28 *:transition-colors *:duration-700 target:*:bg-butter">
			<EventRow />
		</li>
	</ul>
</section>
