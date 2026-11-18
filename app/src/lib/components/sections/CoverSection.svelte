<script>
	const graphicButtons = [
		{
			//TO DO: Scroll til dagens event
			src: '/images/on-this-day.svg',
			alt: 'On this day',
			width: 216,
			height: 94
		},
		{
			// TODO: link til big plans
			src: '/images/big-plans.svg',
			alt: 'Big plans',
			width: 334,
			height: 96
		}
	];
</script>

<section>
	<div>
		<h1 class="text-h1">
			Aarhus <span class="font-serif font-normal">event calendar</span>
			<br />
			What happening?
		</h1>

		{#each graphicButtons as button (button.src)}
			<a href={button.href} class="block transition-transform hover:-rotate-2">
				<img
					src={button.src}
					alt={button.alt}
					width={button.width}
					height={button.height}
					class="h-auto max-w-full"
				/>
			</a>
		{/each}
	</div>
</section>
