<script lang="ts">
	import '@fontsource-variable/instrument-sans';
	import '@fontsource/instrument-serif';
	import './layout.css';
	import SiteHeader from '#lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '#lib/components/layout/SiteFooter.svelte';
	// import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>NOW Aarhus - event calendar</title>
</svelte:head>

<SiteHeader />

{@render children()}

<SiteFooter />
