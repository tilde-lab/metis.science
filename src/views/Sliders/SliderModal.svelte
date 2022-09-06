<Modal bind:open size="lg">
	{#key index}
		<Slidy {slides} {index} snap="center" --slidy-slide-width="100%" let:item>
			<Figure cover src={item.src}>
				{item.caption}
			</Figure>
		</Slidy>
	{/key}
</Modal>

<script lang="ts" context="module">
	import { Figure, Modal } from 'svelte-spectre';
	import { Slidy, type Slide } from '@slidy/svelte';
</script>

<script lang="ts">
	export let slides: Slide[] = [];
	export let index: number = 3;
	export let open = false;
</script>
