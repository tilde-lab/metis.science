<div class="backend" id="metis-backend">
	<Grid stack>
		{#if !$media.sm}
			<Col col="10">
				<div class="backend_title">scientific backend</div>
				<div class="backend_text">
					The scientific backend is written in Python and able to manage complex multi-level simulation workflows via the AiiDA workflow manager. It
					orchestrates scientific codes TOPAS, FullProf, VASP, Quantum Espresso, CRYSTAL, etc. in the clouds of well-known commodity providers.
				</div>
			</Col>
			<Col col="2">
				<img class="backend_code_img" src="assets/img/code.webp" alt="code" />
			</Col>
		{:else}
			<Col col="12">
				<img class="backend_code_img" src="assets/img/code.webp" alt="code" />
			</Col>
			<Col col="12">
				<div class="backend_title">scientific backend</div>
				<div class="backend_text">
					The scientific backend is written in Python and able to manage complex multi-level simulation workflows via the AiiDA workflow manager. It
					orchestrates scientific codes TOPAS, FullProf, VASP, Quantum Espresso, CRYSTAL, etc. in the clouds of well-known commodity providers.
				</div>
			</Col>
		{/if}
	</Grid>
	<Grid stack>
		<Col col={!$media.sm ? '6' : '12'}>
			<div class="backend_techs">
				<div class="backend_row">
					<img src="assets/img/backend/tech1.svg" alt="tech_stack" />
					<img src="assets/img/backend/tech2.svg" alt="tech_stack" />
				</div>
				<div class="backend_row">
					<img src="assets/img/backend/tech3.png" alt="tech_stack" />
					<img src="assets/img/backend/tech4.png" alt="tech_stack" />
				</div>
				<div class="backend_row">
					<img src="assets/img/backend/tech5.svg" alt="tech_stack" />
					<img src="assets/img/backend/tech6.png" alt="tech_stack" />
				</div>
			</div>
		</Col>
		<Col col={!$media.sm ? '6' : '12'}>
			<div class="backend_bottom">
				<div class="backend_description">
					The scientific backend supports Microsoft Azure, Hetzner, Upcloud, and Google Cloud. All the scientific logic is encapsulated here. Download
					and deploy it at your own web-server.
				</div>
				<Button variant="primary" size="xl">Download now</Button>
			</div>
		</Col>
	</Grid>
</div>

<script lang="ts" context="module">
	import { Grid, Col, Button } from 'svelte-spectre';
	import { media } from '@/stores/media';
</script>

<style lang="scss">
	.backend {
		padding: 160px 50px 200px;
		color: white;
		position: relative;
		background: #111;
		overflow: hidden;
	}
	.backend_title {
		position: absolute;
		top: 171px;
		left: 50px;
	}
	.backend_text {
		text-indent: 310px;
		width: 1386px;
		margin-bottom: 177px;
		font-size: 36px;
		line-height: 134%;
	}
	.backend_code_img {
		position: absolute;
		top: 160px;
		right: -300px;
		height: 354px;
		width: auto;
		object-fit: contain;
		z-index: 1;
	}
	.backend_techs {
		margin-right: 100px;
		margin-left: -50px;
	}
	.backend_row {
		display: flex;
		padding: 54px 0 54px 50px;
		justify-content: flex-end;
		border-bottom: 1px solid #adadad;
		height: 150px;
	}
	.backend_row img + img {
		margin-left: 72px;
	}
	.backend_row:nth-child(1) {
		border-top: 1px solid #adadad;
	}
	.backend_row:last-child {
		justify-content: flex-start;
	}
	.backend_bottom {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
	}
	.backend_description {
		margin-bottom: 60px;
		font-size: 28px;
		line-height: 136%;
	}
	@media (max-width: 1770px) {
		.backend_text {
			width: 94%;
		}
	}
	@media (max-width: 1440px) {
		.backend_techs {
			margin-right: 20px;
		}
		.backend_row img + img {
			margin-left: 20px;
		}
		.backend_row:nth-child(2) img {
			width: 50%;
			height: 100%;
		}
		.backend_row:last-child {
			justify-content: flex-end;
		}
		.backend_row:nth-child(3) img {
			width: 50%;
			height: 100%;
		}
	}
	@media (max-width: 1160px) {
		.backend_text {
			margin-top: 10px;
			text-indent: 180px;
			font-size: 24px;
			width: 80%;
		}
		.backend_code_img {
			right: -400px;
		}
	}
	@media (max-width: 1024px) {
		.backend_row:nth-child(2) img {
			width: 50%;
			height: 80%;
		}
		.backend_row:nth-child(3) img {
			width: 50%;
			height: 80%;
		}
		.backend_bottom {
			margin-left: 40px;
		}
	}
	@media (max-width: 620px) {
		.backend {
			padding-top: 0px;
		}
		.backend_code_img {
			position: relative;
			top: 0;
			right: -300px;
			height: 354px;
			width: auto;
			object-fit: contain;
			z-index: 1;
		}
		.backend_title {
			position: relative;
			top: 0;
			left: 0;
			margin-top: 40px;
		}
		.backend_text {
			margin-top: 10px;
			text-indent: 0;
			width: 100%;
		}
		.backend_techs {
			margin-left: -20px;
			margin-right: -20px;
		}
		.backend_bottom {
			margin-top: 30px;
			margin-left: -20px;
			margin-right: -20px;
		}
	}
</style>
