<Spectre>
	<Header />
	<Main>
		<h1>Meet Metis &mdash;<br />your new virtual materials lab</h1>

		<SliderMain {slides} />

		<Hero size="xs" bg={$darkTheme ? 'success' : 'gray'}  center>
			<Container>
				<h2>Metis is a digital lab assistant</h2>
				<p>Metis is the online collaborative system for the X-ray powder diffraction (XRPD) data management. The main aim is to provide the rich web-based graphical user interface (GUI) for (a) simulating the XRPD data, (b) digesting the experiments data, (c) conducting the data analysis, (d) exporting and sharing the data, (e) supporting the new simulation codes and parameter optimization methods.</p>
				<p>The scientific algorithms in the data pipelining have to be implemented. This concerns both the GUI and scientific backend parts. The GUI will be enhanced with the “smart”
Topas data visualizations, and the backend will be able to manage complex multi-level simulation
workflows. Finally, the developed system, being open source, will be advocated for the partner
organizations and XRPD community in general.</p>
			</Container>
		</Hero>

		<ImageGallery {images} bind:index bind:open />
	</Main>
	<Footer />
	<SliderModal slides={images} {index} bind:open />
</Spectre>

<script lang="ts" context="module">
	import { Spectre, Container, Hero } from 'svelte-spectre';
	import { Header, Footer, ImageGallery } from './views/';
	import { Main } from './layouts/';
	import { SliderMain, SliderModal } from '@/views/Sliders';
	import { slides, images } from './config';
	import { darkTheme } from '@/stores/theme';
</script>

<script lang="ts">
	let index: number;
	let open = false;
</script>

<style>
	@import '@slidy/svelte/dist/slidy.css';
	@import './assets/global.css';
</style>
