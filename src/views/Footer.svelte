<footer>
	<Grid stack>
		<Col col="3">
			<div class="white_logo">
				<Logo size="5em" color="light" />
				<h1>Metis</h1>
			</div>
			<div class="theme_switch">
				<Switch bind:value={$darkTheme}>Dark theme</Switch>
			</div>
		</Col>
		<Col col="3">
			<div class="footer_about">
				<h1>About</h1>
				<li><a href="#">Contacts</a></li>
				<li><a href="#">Team</a></li>
				<li><a href="#">Press Kit</a></li>
			</div>
		</Col>
		<Col col="3">
			<div class="footer_product">
				<h1>Product</h1>
				<li><a href="#">Why Metis?</a></li>
				<li><a href="#">Technical Details</a></li>
				<li><a href="https://kit.metis.science">User Interface Kit</a></li>
			</div>
		</Col>
		<Col col="3">
			<div class="footer_legal">
				<h1>Legal</h1>
				<li><a href="#">Terms</a></li>
				<li><a href="#">Privacy</a></li>
				<li><a href="#">Contacts</a></li>
			</div>
		</Col>
	</Grid>
</footer>

<script lang="ts" context="module">
	import { Col, Grid, Switch } from 'svelte-spectre';
	import { Logo } from '@/components/index';

	import { nodeAttribute } from '@/helpers/dom';

	import { darkTheme } from '@/stores/theme';
</script>

<script lang="ts">
	$: nodeAttribute(document.documentElement, 'color-scheme', $darkTheme ? 'dark' : 'light');
</script>

<style lang="scss">
	footer {
		background: #111;
		padding: 80px 50px 50px;
		.white_logo {
			display: flex;
			align-items: center;
			h1 {
				margin-bottom: 0;
			}
		}
		.theme_switch {
			margin: 120px 0 0 30px;
		}
		li {
			list-style: none;
			font-size: 24px;
			margin-bottom: 20px;
		}
		li a,
		li a:hover {
			color: #fff !important;
		}
	}
	// :global(body),
	// :global(html) {
	// 	height: 100%;
	// 	:global(.spectre) {
	// 		min-height: 100%;
	// 		display: grid !important;
	// 		grid-template-rows: auto 1fr auto;
	// 	}
	// }
	// @media (prefers-color-scheme: dark) {
	// 	footer {
	// 		background-color: #343a51;
	// 	}
	// }
	// :global([color-scheme='dark']) {
	// 	footer {
	// 		background-color: #343a51;
	// 	}
	// }
	// :global([color-scheme='light']) {
	// 	footer {
	// 		background-color: #f1f1fc;
	// 	}
	// }
</style>
