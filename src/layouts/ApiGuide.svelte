<div class="api_guide">
	<div class="api_header bg-primary">
		All these operations can be also done programmatically via the <a href="https://github.com/tilde-lab/metis-client">Metis API</a>.
	</div>
	<div class="api_body">
		<Slidy
			{slides}
			{index}
			let:item
			snap="center"
			axis="y"
			--slidy-slide-gap="7%"
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
	</div>
</div>

<script lang="ts">
	import { Slidy, type Slide } from '@slidy/svelte';

	const slides: Slide[] = [
		{ src: 'assets/img/stable_diffusion/04696e1a-eb5d-43b9-bb1d-d2ee117f4430.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/1b9a004a-db27-45e4-b762-0fa21bc97277.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/4603a846-4daf-4018-aa74-e3ab567a69fc.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/b64f151d-e194-497a-9b70-e15ffdd8730d.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/c2179403-954f-4f5d-82a4-3dfdeaba9597.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/c5cf0499-9d89-4739-9eb5-7f7b8f753f9e.webp', width: 400, height: 400 },
		{ src: 'assets/img/stable_diffusion/d5f83ae7-f990-4f0c-96d5-c98eb55a0890.webp', width: 400, height: 400 },
	];
	const index = Math.floor(Math.random() * slides.length);
</script>

<style lang="scss">
	@import '@slidy/svelte/dist/slidy.css';

	a {
		color: #fff !important;
		text-decoration: underline !important;
	}
	.api_guide {
		position: relative;
		overflow: hidden;
	}
	.api_header {
		padding: 28px 50px;
		text-align: center;
		font-size: 28px;
		color: white;
	}
	.api_body {
		padding-top: 90px;
		width: 100%;
	}
	.api_body img {
		border: 20px solid #5755d9;
	}
	@media (max-width: 1024px) {
		.api_header {
			font-size: 24px;
		}
	}
	@media (max-width: 620px) {
		.api_header {
			font-size: 18px;
		}
		.api_body {
			padding-top: 40px;
		}
	}
</style>
