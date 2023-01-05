<main>
	<HeroComponent />

	<Flow />

	<About />

	<Central />
</main>

<script lang="ts">
	import { Flow, Logo } from '@/components';
	import HeroComponent from './Hero_Component.svelte';
	import About from './About.svelte'
	import Central from './Central.svelte'
</script>

<style>
	main {
		position: absolute;
		width: 100%;
	}
</style>
