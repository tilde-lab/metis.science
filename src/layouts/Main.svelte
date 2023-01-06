<main>
	<HeroComponent />

	<Flow />

	<About />

	<Central />

	<Goal />

	<ApiGuide />

	<OpenSource />

	<Backend />
</main>

<script lang="ts">
	import { Flow } from '@/components';
	import HeroComponent from './Hero_Component.svelte';
	import About from './About.svelte';
	import Central from './Central.svelte';
	import Goal from './Goal.svelte';
	import ApiGuide from './ApiGuide.svelte';
	import OpenSource from './OpenSource.svelte';
	import Backend from './Backend.svelte'
</script>

<style>
	main {
		position: absolute;
		width: 100%;
	}
</style>
