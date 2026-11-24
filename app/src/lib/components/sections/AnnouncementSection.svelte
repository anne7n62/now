<script lang="ts">
	import DraggableTags from './DraggableTags.svelte';

	let section = $state<HTMLElement>();
</script>

<section
	bind:this={section}
	aria-labelledby="announcement-title"
	class="relative flex flex-col items-center gap-12 overflow-hidden border-y border-ink bg-sky px-(--gutter) py-24 md:py-[150px]"
>
	<h2 id="announcement-title" class="text-eyebrow text-ink-soft">What we are working on</h2>
	<p class="max-w-[994px] text-center text-h2-accent">
		YOU DID IT! You moved the ovals and got curious. You wanted to know. Thank you. Guess what? On
		June 21 (2027), WE are officially launching. We are not sure exactly how it will happen. Maybe
		something should fall from the sky. Send us a DM on Insta with your ideas. Best idea wins – you
		choose, Friday or Saturday at Northside!!
	</p>

	<DraggableTags bounds={section} />
</section>
