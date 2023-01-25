<div class="open_source">
	<img src="assets/img/dots.png" alt="dots" />
	<Grid stack>
		<Col col={!$media.md ? '9' : '12'}>
			{#if !$media.sm}
				<span class="highlight">Metis is free and fully open source.</span>
			{:else}
				<span class="highlight">Metis is free and fully</span><br />
				<span class="highlight">open source.</span>
			{/if}
			<h1 class="text-black">We advocate this code for our partner organizations, synchrotrons, XRPD, and materials science community in general.</h1>
		</Col>
		<div class="p-centered">
			<Col col={!$media.md ? '3' : '12'}>
				<Button variant="secondary" size="xl">Download now</Button>
			</Col>
		</div>
	</Grid>
</div>

<script lang="ts" context="module">
	import { Grid, Col, Button } from 'svelte-spectre';
	import { media } from '@/stores/media';
</script>

<style lang="scss">
	.open_source {
		position: relative;
		padding: 220px 66px;
		font-weight: 500;
	}
	.open_source img {
		position: absolute;
		z-index: -1;
		top: -69px;
		left: 0;
		height: 169px;
		width: 351px;
	}
	.open_source span,
	.open_source h1 {
		font-size: 68px;
	}
	.open_source span {
		line-height: 108%;
	}
	.open_source h1 {
		margin-bottom: 0px;
	}
	.open_source span.highlight {
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
		margin-left: -20px;
	}
	@media (max-width: 1590px) {
		.open_source span,
		.open_source h1 {
			font-size: 42px;
		}
	}
	@media (max-width: 1048px) {
		.open_source span,
		.open_source h1 {
			font-size: 28px;
		}
	}
	@media (max-width: 840px) {
		.open_source {
			padding: 160px 20px;
		}
		.open_source span,
		.open_source h1 {
			font-size: 32px;
		}
		.open_source .p-centered {
			margin-top: 30px;
		}
	}
	@media (max-width: 620px) {
		.open_source {
			padding: 80px 20px;
		}
		.open_source img {
			position: absolute;
			z-index: -1;
			top: -69px;
			left: 0;
			height: 100px;
			width: 250px;
		}
		span.highlight {
			line-height: 136%;
		}
	}
</style>
