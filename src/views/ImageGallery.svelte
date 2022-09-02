<section>
	<Grid stack>
		{#each images as image, i}
			<Col col="4">
				<Button on:click={() => setIndex(i)}>
					<img src={image.src} alt={image.alt} />
				</Button>
			</Col>
		{/each}
	</Grid>
</section>

<script lang="ts" context="module">
	import { Button, Col, Grid } from 'svelte-spectre';
</script>

<script lang="ts">
	export let images: { [key: string]: string | number }[] = [];
	export let index: number;
	export let open = false;

	function setIndex(i: number) {
		open = !open;
		index = i;
	}
</script>

<style lang="scss">
	section {
		max-width: 500px;
		margin: auto;
		padding-top: 3rem;
	}
	:global(section button) {
		width: 150px;
		height: 150px !important;
		img {
			max-width: 100%;
		}
	}
</style>
