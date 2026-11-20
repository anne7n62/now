<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import CategoryTag from '#lib/components/ui/CategoryTag.svelte';
	import PillButton from '#lib/components/ui/PillButton.svelte';

	import { formatDay } from '#lib/utils/dates.js';
	import type { CalendarEvent } from '#lib/types.js';

	let { event }: { event: CalendarEvent } = $props();

	//state til at toggle event
	let isOpen = $state(false);
</script>

<article class="flex border-b border-ink bg-paper">
	<div class="w-[72px] shrink-0 border-r border-ink p-3 text-ink-soft md:w-[89px]">
		<p class="text-details">{formatDay(event.date)}</p>
		<p class="text-meta">{event.time}</p>
	</div>

	<div class="flex min-w-0 flex-1 flex-col px-4 py-2.5 md:px-6">
		<div class="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-6">
			<div class="flex min-w-0 flex-col items-start gap-[7px]">
				<h3 class="text-h3">{event.title}</h3>
				<div class="flex flex-wrap gap-1.5">
					<CategoryTag category={event.category} />
				</div>
				{#if isOpen}
					<div id="event-{event.id}-details" class="mt-4 flex flex-col gap-3 pb-2">
						<p class="text-button">{event.venue}, {event.city}</p>
						{#if event.description}
							<p>{event.description}</p>
						{/if}
						<a href={event.url} target="_blank" rel="noopener noreferrer" class="underline">
							Go to event website
						</a>
					</div>
				{/if}
			</div>

			<PillButton
				aria-expanded={isOpen}
				aria-controls="event-{event.id}-details"
				onclick={() => (isOpen = !isOpen)}
			>
				{isOpen ? 'less details' : 'more details'}
				<ChevronDown size={14} aria-hidden="true" class={[isOpen && 'rotate-180']} />
			</PillButton>
		</div>
	</div>
</article>
