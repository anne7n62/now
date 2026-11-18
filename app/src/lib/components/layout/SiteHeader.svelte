<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Logo from '#lib/components/ui/Logo.svelte';

	const links = [
		{ href: resolve('/editorial'), label: 'Editorial' },
		{ href: resolve('/add-event'), label: 'Add Event' }
	];
</script>

<header
	class="sticky top-0 z-30 flex items-center justify-between border-b-2 border-ink bg-white px-(--gutter) py-4"
>
	<Logo />
	<nav aria-label="Main">
		<ul class="flex items-center gap-6 text-button">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
						class="underline-offset-4 hover:underline aria-[current=page]:underline"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
