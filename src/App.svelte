<Spectre>
	<Header />
	<Main />
	<Footer />
</Spectre>

<script lang="ts" context="module">
	import { Spectre } from 'svelte-spectre';
	import { Header, Footer } from './views/';
	import { Main } from './layouts/';
</script>

<style>
	@import '@slidy/svelte/dist/slidy.css';
	@import './assets/fonts/Exo2_64_Latin-ext.css';
	@import './assets/global.css';
</style>
