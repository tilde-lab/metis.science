<main class="py-2 mt-2 text-center">
	<Container>
		<slot />
	</Container>
</main>

<script lang="ts" context="module">
	import { Container } from 'svelte-spectre';
</script>

<style lang="scss">
	main {
		text-align: center;
	}
</style>
