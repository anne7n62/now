<script lang="ts">
	let {
		label,
		rotate = 0,
		ref = $bindable()
	}: { label: string; rotate?: number; ref?: HTMLElement } = $props();
</script>

<div
	bind:this={ref}
	class="flex w-40 cursor-grab touch-none items-center justify-center rounded-[50px] border-2 border-ink bg-white px-2.5 py-3 text-center text-sm font-bold text-ink-soft uppercase select-none active:cursor-grabbing md:w-[324px] md:py-[26px] md:text-eyebrow"
	style:rotate="{rotate}deg"
>
	{label}
</div>
