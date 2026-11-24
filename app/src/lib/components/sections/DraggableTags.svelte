<script lang="ts">
	import { onMount } from 'svelte';
	import DraggableTag from '#lib/components/ui/DraggableTag.svelte';

	let { bounds }: { bounds?: HTMLElement } = $props();

	// Positioner (% af sektionen) og rotation aflæst fra Figma
	const tags = [
		{ label: 'Try to drag me', left: 14, top: 22, rotate: -8 },
		{ label: 'Stay tuned!', left: 43, top: 41, rotate: 13.8 },
		{ label: 'Don’t be a stranger', left: 62, top: 16, rotate: 14.66 },
		{ label: 'Coming soon', left: 12, top: 59, rotate: -12.98 },
		{ label: 'Coming soon', left: 59, top: 66, rotate: -14.01 }
	];

	const refs: HTMLElement[] = $state([]);

	onMount(() => {
		let instances: { kill: () => void }[] = [];

		// GSAP indlæses kun i browseren
		(async () => {
			const { gsap } = await import('gsap');
			const { Draggable } = await import('gsap/Draggable');
			gsap.registerPlugin(Draggable);
			instances = Draggable.create(refs, { bounds, zIndexBoost: true });
		})();

		return () => instances.forEach((d) => d.kill());
	});
</script>

<div class="pointer-events-none absolute inset-0" aria-hidden="true">
	{#each tags as tag, i (i)}
		<div class="pointer-events-auto absolute" style:left="{tag.left}%" style:top="{tag.top}%">
			<DraggableTag label={tag.label} rotate={tag.rotate} bind:ref={refs[i]} />
		</div>
	{/each}
</div>
