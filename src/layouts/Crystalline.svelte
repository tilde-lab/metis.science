<div class="crystalline">
	<div class="pots">
		<img src="assets/img/grid.png" alt="vector drawing" />
	</div>
	<div class="title">crystalline structures</div>
	<div class="content">
		With Metis, you log in, search the crystalline structures in the various online public databases, and import them for the later XRPD or
		electronic-structure cloud simulations.
	</div>
	<div class="bottom_content">
		The crystalline structures are then stored in the centralized database in a single unified format and can be data-mined, e.g. attributed to the standard
		material phases known.
	</div>
	<img src="assets/img/crystalline_structure.webp" alt="crystalline structure" class="crystalline_img" />
</div>

<style lang="scss">
	.crystalline {
		background: #111;
		padding: 160px 50px 390px;
		position: relative;
		color: white;
		overflow: hidden;
		position: relative;
	}
	.crystalline .pots {
		position: absolute;
		width: 845px;
		height: 456px;
		right: -620px;
		top: 8px;
		display: flex;
		align-items: center;
	}
	.crystalline .title {
		position: absolute;
		top: 173px;
		left: 50px;
		font-size: 20px;
		font-weight: 300;
		line-height: 24px;
	}
	.crystalline .content {
		width: 85%;
		text-indent: 280px;
		margin-bottom: 48px;
		font-size: 48px;
		font-weight: 500;
		line-height: 116%;
	}
	.bottom_content {
		font-size: 28px;
		line-height: 136%;
		width: 73%;
	}
	.crystalline img.crystalline_img {
		width: 100%;
		height: 271px;
		object-fit: cover;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	@media (max-width: 1440px) {
		.crystalline .content {
			font-size: 32px;
			padding-top: 6px;
		}
		.bottom_content {
			font-size: 24px;
		}
	}
	@media (max-width: 620px) {
		.crystalline .title {
			position: relative;
			top: 0;
			left: 0;
			margin-bottom: 40px;
			font-size: 14px;
		}
		.crystalline .content {
			text-indent: 0px;
			width: 100%;
			font-size: 22px;
		}
		.bottom_content {
			width: 100%;
			font-size: 18px;
		}
	}
</style>
