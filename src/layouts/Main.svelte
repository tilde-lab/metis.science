<main>
	<div class="columns">
		<div class="column col-8">
			<Hero />
		</div>
		<div class="column col-4">
			<img src={hero_image} alt="metis"/>
		</div>
	</div>
</main>

<script lang="ts">
	import { Hero } from 'svelte-spectre'
	import hero_image from "@/assets/img/hero.jpg"
</script>

<style>
	main{
		position: absolute;
		width: 100%;
	}
	.columns{
		width: 100%;
	}
</style>
