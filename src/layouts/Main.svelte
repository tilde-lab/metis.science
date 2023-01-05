<main>
	<HeroComponent />

	<Flow />

	<About />

	<Central />

	<Goal />
</main>

<script lang="ts">
	import { Flow } from '@/components';
	import HeroComponent from './Hero_Component.svelte';
	import About from './About.svelte'
	import Central from './Central.svelte'
	import Goal from './Goal.svelte'
</script>

<style>
	main {
		position: absolute;
		width: 100%;
	}
</style>
