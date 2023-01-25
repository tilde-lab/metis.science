<div class="goal" id="metis-features">
	<Grid stack>
		<Col col={!$media.lg ? '6' : '12'}>
			<h1>Metis provides the rich web-based graphical user interface (GUI) for</h1>
		</Col>
		<Col col={!$media.lg ? '6' : '12'}>
			<ul class="mb-9">
				{#each menus as item, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li class="menu {active_tab == index && 'active'}" on:click={() => activeTab(index)}>
						<h1>{item.text}</h1>
					</li>
					{#if active_tab == index}
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={item.img} alt="Metis GUI" />
					{/if}
				{/each}
			</ul>
			<h2 class="goal_bottom_text">The new simulation codes and parameter optimization methods can be easily added.</h2>
		</Col>
	</Grid>
</div>

<script lang="ts" context="module">
	import { Grid, Col } from 'svelte-spectre';
</script>

<script lang="ts">
	import { media } from '@/stores/media';

	const menus = [
		{ text: `cheap on-demand cloud simulations`, img: 'assets/img/screenshots/cloud-runs.png' },
		{ text: `digesting the experiments data`, img: 'assets/img/screenshots/all-data.png' },
		{ text: `getting the data from various sources`, img: 'assets/img/screenshots/optimade-search.png' },
		{ text: `exporting and sharing the data across your lab`, img: 'assets/img/screenshots/content-organizer.png' },
	];

	let active_tab = 0;

	const activeTab = (index) => {
		active_tab = index;
	};
</script>

<style lang="scss">
	.goal {
		position: relative;
		background: #111;
		padding: 160px 0 160px 50px;
		color: white;
	}
	.goal h1 {
		font-size: 48px;
	}
	.goal .menu {
		display: flex;
		align-items: center;
		counter-increment: section;
		cursor: pointer;
		background: transparent !important;
	}
	.menu:not(.menu-nav) {
		box-shadow: none !important;
	}
	.goal .menu.active h1 {
		background: #5755d9;
	}
	.goal .menu h1 {
		border-bottom: 1px solid #adadad;
		padding: 36px 0 36px 6px;
		font-size: 36px;
		width: 100%;
	}
	.goal .menu:nth-child(1) h1 {
		border-top: 1px solid #adadad;
	}
	.goal .menu::before {
		content: '(' counter(section, lower-roman) ') ';
		font-size: 22px;
		width: 52px;
	}
	.goal img {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 46%;
		height: 520px;
		z-index: 1;
		transition: all 0.3s ease-in-out;
		box-shadow: 50px -50px 0 0 #5755d9;
	}
	.goal_bottom_text {
		margin-left: 77px;
		font-size: 24px;
		width: 100%;
		font-weight: 300;
		width: 80%;
	}
	@media (max-width: 1750px) {
		.goal h1 {
			font-size: 38px;
		}
		.goal .menu h1 {
			font-size: 28px;
		}
	}
	@media (max-width: 1580px) {
		.goal img {
			width: 45%;
			height: 409px;
		}
	}
	@media (max-width: 1580px) {
		.goal {
			padding: 80px 0 80px 20px;
		}
		.goal h1 {
			font-size: 28px;
		}
		.goal .menu h1 {
			font-size: 22px;
		}
	}
	@media (max-width: 960px) {
		.goal img {
			position: relative;
			width: 100%;
			height: 400px;
			z-index: 1;
			transition: all 0.3s ease-in-out;
			box-shadow: none;
			padding-left: 48px;
		}
	}
	@media (max-width: 620px) {
		.goal img {
			height: 260px;
		}
		.goal h1 {
			font-size: 22px;
		}
		.goal .menu h1 {
			font-size: 18px;
		}
		.goal_bottom_text {
			font-size: 18px;
		}
	}
</style>
