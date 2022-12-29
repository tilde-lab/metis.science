<Spectre>
	<Header />
	<Main/>
	<!-- <Footer />
	<SliderModal slides={images} {index} bind:open /> -->
</Spectre>

<script lang="ts" context="module">
	import { Spectre, Container, Hero } from 'svelte-spectre';
	import { Header, Footer, ImageGallery } from './views/';
	import { Main } from './layouts/';
	import { SliderMain, SliderModal } from '@/views/Sliders';
	import { slides, images } from './config';
	import { darkTheme } from '@/stores/theme';
</script>

<style>
	@import '@slidy/svelte/dist/slidy.css';
	@import './assets/global.css';
</style>
