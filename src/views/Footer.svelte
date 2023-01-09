<footer class="py-2 mt-2 bg-primary">
	Hello
	<!-- <Container>
		<Grid>
			<Col>
			<span class="py-2" style="line-height: 2em;">
				Developed by <a href="https://tilde.pro" target="_blank">Tilde MI</a> for <a href="https://www.basf.com" target="_blank">BASF SE</a> with the BSD open-source license.
			</span>
			</Col>
			<Col col="auto">
				<Switch bind:value={$darkTheme}>Dark theme</Switch>
			</Col>
		</Grid>
	</Container> -->
</footer>

<script lang="ts" context="module">
	// import { Col, Grid, Container, Switch } from 'svelte-spectre';
	// import { nodeAttribute } from '@/helpers/dom';
	// import { darkTheme } from '@/stores/theme';
</script>

<script lang="ts">
	// $: nodeAttribute(document.documentElement, 'color-scheme', $darkTheme ? 'dark' : 'light');
</script>

<style lang="scss">
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
