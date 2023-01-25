<div class="visualize">
	<Grid stack>
		<Col col={!$media.sm ? '5' : '12'}>
			<Slidy
				{slides}
				{index}
				let:item
				snap="center"
				axis="y"
				--slidy-slide-width="100%"
				loop={true}
				navigation={false}
				arrows={false}
				counter={false}
				autoplay={true}
			>
				<figure>
					<img width={item.width} height={item.height} src={item.src} alt="Stable Diffusion Neural Art" title="Stable Diffusion Neural Art" />
				</figure>
			</Slidy>
		</Col>
		<Col col={!$media.sm ? '7' : '12'}>
			<div class="visualize_text">
				<div class="visualize_box">
					<div class="title">online GUI app</div>
					<div class="context">
						The Metis GUI visualizes crystal structures and X-ray patterns as you expect it. It is built on a modular components <a
							href="https://kit.metis.science">user interface kit</a
						>. All the human interactions are encapsulated here. Download and deploy it at your own web-server.
					</div>
				</div>
				<div class="visualize_bottom_box">
					<div class="visualize_bottom">
						<img src="assets/img/svelte.svg" alt="svelte" />
						<Logo size="4em" />
					</div>
					<Button variant="secondary" size="xl">Download now</Button>
				</div>
			</div>
		</Col>
	</Grid>
	<img src="assets/img/dots.png" alt="dots" class="dots" />
</div>

<script lang="ts" context="module">
	import { Grid, Col, Button } from 'svelte-spectre';
	import { Slidy, type Slide } from '@slidy/svelte';
	import { Logo } from '@/components/index';
	import { media } from '@/stores/media';

	const slides: Slide[] = [
		{ src: 'assets/img/stable_diffusion/db1dcbd0-440f-46c5-aa91-fc0e60d8d265.webp', width: 420, height: 800 },
		{ src: 'assets/img/stable_diffusion/ce62dfd6-6735-43bc-9e57-214f3fd8a6e5.webp', width: 420, height: 800 },
		{ src: 'assets/img/stable_diffusion/c98769d8-ba7a-4ce9-bf48-f9109868bddb.webp', width: 420, height: 800 },
		{ src: 'assets/img/stable_diffusion/266f65d5-7d12-4642-8cc2-0cd16e925367.webp', width: 420, height: 800 },
		{ src: 'assets/img/stable_diffusion/4aa1edac-bc4b-4e06-9183-ff10cad4fedc.webp', width: 420, height: 800 },
		{ src: 'assets/img/stable_diffusion/2a4d23ad-5470-4f59-8dbe-a869ef5df317.webp', width: 420, height: 800 },
	];
	let index: number = Math.floor(Math.random() * slides.length);
</script>

<style lang="scss">
	@import '@slidy/svelte/dist/slidy.css';

	.visualize {
		position: relative;
	}
	.visualize figure img {
		width: 100%;
		margin-top: 50px;
		box-shadow: 50px -50px 0 0 #5755d9;
	}
	.visualize_text {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-left: 120px;
		padding-right: 80px;
	}
	.visualize_box {
		position: relative;
	}
	.visualize_text .title {
		position: absolute;
		top: 11px;
		left: 0;
		font-size: 20px;
		line-height: 24px;
		font-weight: 300;
	}
	.visualize_text .context {
		text-indent: 308px;
		margin-bottom: 80px;
		font-size: 36px;
		line-height: 134%;
	}
	.visualize_text .context a,
	.visualize_text .context a:hover {
		border-bottom: 2px solid #5755d9;
		text-decoration: none;
	}
	.visualize_bottom_box {
		display: flex;
		align-items: flex-end;
	}
	.visualize_bottom {
		padding: 30px 0;
		display: flex;
		align-items: center;
		width: 461px;
		border-top: 1px solid #cdcdcd;
		border-bottom: 1px solid #cdcdcd;
		margin-right: 154px;
	}
	.visualize_bottom img {
		width: auto;
		object-fit: contain;
		height: 40px;
		margin-right: 70px;
	}
	img.dots {
		position: absolute;
		z-index: -1;
		bottom: -69px;
		left: 0;
		height: 169px;
		width: 351px;
	}
	@media (max-width: 1264px) {
		.visualize_bottom {
			width: 80%;
			margin-right: 20px;
		}
		.visualize_text .context {
			text-indent: 140px;
			font-size: 28px;
		}
	}
	@media (max-width: 1024px) {
		.visualize_text {
			padding-left: 60px;
			padding-right: 40px;
		}
		.visualize_bottom_box {
			align-items: center;
			flex-direction: column;
		}
		.visualize_bottom {
			margin-bottom: 40px;
		}
	}
	@media (max-width: 425px) {
		.visualize_box .title {
			position: relative;
			top: 0;
			margin-bottom: 20px;
		}
		.visualize_box .context {
			text-indent: 0px;
		}
	}
</style>
