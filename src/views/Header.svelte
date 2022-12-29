<header class="p-1">
	<Navbar>
		<div slot="left" class="brand">
			<Logo size="4em" />
			<span>Metis</span>
		</div>
		<div slot="right" class="menu">
			<div class="burger" />
			<span>Menu</span>
		</div>
	</Navbar>
</header>

<script lang="ts" context="module">
	import { Navbar, Icon } from 'svelte-spectre';
	import { Logo } from '@/components/index';
</script>

<style style="scss">
	.brand {
		display: flex;
		align-items: center;
		margin-top: 36px;
		margin-left: 50px;
	}
	span {
		font-size: 48px;
	}
	.menu {
		margin-right: 49px;
		margin-top: 36px;
		display: flex;
		align-items: center;
	}
	.menu span{
		color: white
	}
	.burger {
		width: 48px;
		height: 18px;
		margin-right: 18px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}
	.burger:after,
	.burger:before {
		content: '';
		background: white;
		display: block;
		width: 100%;
		height: 3px;
		transition: transform 0.3s ease-in-out;
	}
	
</style>
