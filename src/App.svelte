<Spectre>
	<Header />
	<Main>
		<h1>Hello metis-science!</h1>
		<SliderMain {slides} />
		<ImageGallery {images} bind:index bind:open />
	</Main>
	<Footer />
	<SliderModal slides={images} {index} bind:open />
</Spectre>

<script lang="ts" context="module">
	import { Spectre } from 'svelte-spectre';
	import { Header, Footer, ImageGallery } from './views/';
	import { Main } from './layouts/';
	import { SliderMain, SliderModal } from '@/views/Sliders';
	import { slides, images } from './config';
</script>

<script lang="ts">
	let index: number;
	let open = false;
</script>
