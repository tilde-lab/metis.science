<div class="hero_component columns">
    <div class="column col-8">
        <Hero>
            <h1>Metis is your new</h1>
            <h1 class="text-primary">virtual materials lab</h1>
            <Button variant="secondary" size="xl">Download now</Button>
        </Hero>
    </div>
    <div class="column col-4">
        <img src="assets/img/hero.jpg" alt="img" />
    </div>
</div>

<script lang="ts">
	import { Hero, Button } from 'svelte-spectre';
</script>

<style>
    .hero_component {
		width: 100%;
		height: calc(100vh - 145px);
		align-items: center;
		flex-wrap: nowrap;
		margin: 0px;
	}
	.hero_component .col-8 {
		padding-left: 50px;
	}
	.col-8 h1 {
		font-size: 112px;
		margin-bottom: 0px;
	}
	.col-8 h1.text-primary {
		margin-bottom: 48px;
	}

	.col-4 {
		padding: 0px;
	}
	.col-4 img {
		width: 100%;
		height: calc(100vh - 145px);
		margin-bottom: 0px;
	}
</style>