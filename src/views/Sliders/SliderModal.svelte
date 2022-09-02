<Modal bind:open size="fs">
	{#key index}
		<Slidy {slides} {index} snap="center" />
	{/key}
</Modal>

<script lang="ts" context="module">
	import { Modal } from 'svelte-spectre';
	import { Slidy, type Slide } from '@slidy/svelte';
</script>

<script lang="ts">
	export let slides: Slide[] = [];
	export let index: number = 3;
	export let open = false;
</script>

<style lang="scss">
	section {
		--slidy-slide-width: 30%;
	}
	.slide {
		width: 100%;
		height: 100%;
		padding: 1rem;
		border: 1px solid $primary-color;
		border-radius: 1rem;
	}
</style>
