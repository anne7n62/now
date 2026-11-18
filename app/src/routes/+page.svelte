<script lang="ts">
	import { events } from "#lib/events.js";



</script>

<ul>
	{#each events as event (event.id)}
		<li>
			<h2>{event.title}</h2>
			<p>{event.category} · {event.date} kl. {event.time}</p>
			<p>{event.venue}, {event.city}</p>
		</li>
        {#if event.description}
	<p>{event.description}</p>
{/if}
	{/each}
</ul>