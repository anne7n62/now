<script lang="ts">
	// import { ChevronDown } from '@lucide/svelte';
	import CategoryTag from '#lib/components/ui/CategoryTag.svelte';
	// import StatusTag from '#lib/components/ui/StatusTag.svelte';
	// import PillButton from '#lib/components/ui/PillButton.svelte';
</script>

<article class="flex border-b border-ink bg-paper">
	<div class="w-[72px] shrink-0 border-r border-ink p-3 text-ink-soft md:w-[89px]">
		<p class="text-details">startdat</p>
		<p class="text-meta">startdate</p>
	</div>

	<div class="flex min-w-0 flex-1 flex-col px-4 py-2.5 md:px-6">
		<div class="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-6">
			<div class="flex min-w-0 flex-col items-start gap-[7px]">
				<h3 class="text-h3">title</h3>
				<div class="flex flex-wrap gap-1.5">
					<CategoryTag />

					<!-- <StatusTag /> -->
				</div>
			</div>

			<!-- <PillButton>
				<ChevronDown size={14} aria-hidden="true" />
			</PillButton> -->
		</div>
	</div>
</article>
