<main>
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

	<Flow />

	<div class="about">
		<span class="about_title">about name</span>
		<div class="about_content">
			The Metis name stands for<br /> the Greek mythological deity of wisdom and
			<span class="highlight">deep thought.</span>
		</div>
		<div class="about_bottom">From the solid state physics foundations, Metis accumulates the materials knowledge and derives the materials wisdom.</div>
		<div class="about_plot">
			<img src="assets/img/Vector.png" alt="vector_image" />
		</div>
	</div>

	<div class="central">
		<div class="central_dots">
			<img src="assets/img/dots.png" alt="dots" />
		</div>
		<div class="central_inner">
			<div class="central_title">Metis is the browser-based online collaborative system for the materials data management.</div>
			<div class="central_text">
				The X-ray powder diffraction (XRPD) data, phase identification, and ab initio (first-principles) modeling is supported.
			</div>
			<Logo />
		</div>
	</div>
</main>

<script lang="ts">
	import { Hero, Button } from 'svelte-spectre';
	import { Flow, Logo } from '@/components';
</script>

<style>
	main {
		position: absolute;
		width: 100%;
	}
	.hero_component {
		width: 100%;
		height: calc(100vh - 143px);
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
		height: calc(100vh - 143px);
		margin-bottom: 0px;
	}

	.about {
		background: #111;
		padding: 160px 50px 320px;
		position: relative;
		color: white;
		overflow: hidden;
		line-height: 1.1;
	}
	.about_title {
		position: absolute;
		top: 172px;
		left: 50px;
	}
	.about_content {
		width: 1110px;
		font-size: 68px;
		text-indent: 280px;
	}
	.about_content .highlight {
		clip-path: polygon(20px 25%, 100% 25%, calc(100% - 20px) 100%, 0 100%) !important;
		background: linear-gradient(
			104deg,
			rgba(87, 85, 217, 0) 20px,
			rgb(87, 85, 217) 20px,
			rgb(87, 85, 217) calc(100% - 20px),
			rgba(255, 255, 255, 0) calc(100% - 20px)
		);
		color: white;
		padding: 0 20px;
		padding-top: 10px;
	}
	.about_bottom {
		font-size: 28px;
		position: absolute;
		bottom: 160px;
		right: 149px;
		width: 645px;
	}
	.about_plot {
		width: 657px;
		height: 380px;
		position: absolute;
		bottom: 93px;
		right: -173px;
	}

	.central {
		position: relative;
		padding: 180px 0;
		text-align: center;
	}
	.central .central_dots {
		position: absolute;
		z-index: -1;
		top: -69px;
		left: 0;
		height: 169px;
		width: 351px;
	}
	.central .central_inner {
		width: 1676px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		flex-direction: column;
		line-height: 1.1;
	}
	.central .central_title {
		margin-bottom: 40px;
		font-size: 68px;
	}
	.central .central_text {
		width: 1058px;
		margin-bottom: 60px;
		font-size: 36px;
	}
</style>
