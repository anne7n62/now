<script lang="ts">
	let { city = 'Aarhus' }: { city?: string } = $props();

	let now = $state(new Date());

	const formatter = new Intl.DateTimeFormat('da-DK', {
		timeZone: 'Europe/Copenhagen',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});

	/** "13.11.2026 15.47" */
	const formatted = $derived.by(() => {
		const p = Object.fromEntries(formatter.formatToParts(now).map((x) => [x.type, x.value]));
		return `${p.day}.${p.month}.${p.year} ${p.hour}.${p.minute}`;
	});

	$effect(() => {
		now = new Date(); // opdater straks i browseren (serverens tid kan være forældet)
		const id = setInterval(() => (now = new Date()), 10_000);
		return () => clearInterval(id);
	});
</script>

<time datetime={now.toISOString()} class="text-h2 uppercase">
	{city}
	{formatted}
</time>
