<Slidy --slidy-slide-width="50%" {slides} let:item {index} snap="center" navigation={false} arrows={false} counter={false}>
	<div class="slide">
		<h2>{item.header}</h2>
		<p>{item.text}</p>
	</div>
</Slidy>

<script lang="ts" context="module">
	import { Slidy, type Slide } from '@slidy/svelte';
</script>

<script lang="ts">
	export let slides: Slide[] = [];
	export let index = 1;
</script>

<style lang="scss">
	.slide {
		width: 100%;
		height: 100%;
		padding: 1rem;
		border: 1px solid $primary-color;
		border-radius: 1rem;
	}
</style>
