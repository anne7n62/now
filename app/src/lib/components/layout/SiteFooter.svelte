<script lang="ts">
	import { resolve } from '$app/paths';

	const links = [
		{ href: resolve('/editorial'), label: 'Editorial' },
		{ href: resolve('/manifesto'), label: 'Manifesto' },
		{ href: resolve('/add-event'), label: 'Add Event' }
	];
</script>

<footer class="border-t border-ink">
	<p
		class="flex flex-wrap items-baseline justify-center gap-x-[13px] bg-white px-(--gutter) py-3 text-center"
	>
		<span class="text-h2-accent">We are here now</span>
		<span class="text-h2">LIVE CLOCK</span>
		<!-- TO DO: add live clock -->
	</p>

	<div
		class="flex flex-col gap-10 bg-ink p-(--gutter) text-button text-white sm:flex-row sm:justify-between md:py-12"
	>
		<nav aria-label="Footer">
			<ul class="flex flex-col gap-6">
				{#each links as link (link.href)}
					<li><a href={link.href} class="underline-offset-4 hover:underline">{link.label}</a></li>
				{/each}
			</ul>
		</nav>
		<a
			href="https://www.instagram.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="self-start underline-offset-4 hover:underline"
		>
			Add Us on INSTAGRAM
		</a>
	</div>
</footer>
