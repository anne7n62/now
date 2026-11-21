<script lang="ts">
	let {
		label,
		active = false,
		onclick
	}: { label: string; active?: boolean; onclick: () => void } = $props();
</script>

<button
	type="button"
	aria-pressed={active}
	{onclick}
	class={[
		'cursor-pointer border border-ink px-2.5 py-0.5 text-filter whitespace-nowrap text-ink-soft transition-colors',
		active ? 'bg-pink' : 'hover:bg-pink/50'
	]}
>
	{label}
</button>
