<Slidy {slides} let:item {index} snap="center" axis="y" clamp={1} --slidy-slide-width="50%" navigation={false} arrows={false} counter={false} animation={flip}>
	<figure>
		<img src={item.src} alt={getCapt(item)} title={getCapt(item)} width={item.width} />
		<figcaption>{item.caption || ""}</figcaption>
	</figure>
</Slidy>

<script lang="ts" context="module">
	import { Slidy, type Slide } from '@slidy/svelte';
	import { bounce } from '@slidy/easing';
	import { flip } from '@slidy/animation';
</script>

<script lang="ts">
	export let slides: Slide[] = [];
	export let index = 1;

	function getCapt(item) {
		return item.caption || 'Stable Diffusion Neural Art';
	}
</script>

<style lang="scss">
	.slide {
		width: 100%;
		height: 100%;
		//padding: 1rem;
		border: 1px solid #000;
		border-radius: 10px;
	}
</style>
