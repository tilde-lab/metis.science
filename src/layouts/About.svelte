<div class="about">
	<span class="about_title">about the name</span>
	<div class="about_content">
		The <span class="highlight">Metis</span> name stands for the Greek mythological deity of <span class="highlight">wisdom</span> and
		<span class="highlight star_highlight">deep thought.</span>
	</div>
	<div class="about_bottom">
		From the solid state physics foundations, Metis accumulates the materials <span class="highlight">knowledge</span> and derives the materials
		<span class="highlight">wisdom.</span>
	</div>
	<div class="about_plot">
		<img src="assets/img/grid.png" alt="vector image" />
	</div>
</div>

<style lang="scss">
	.about {
		background: #111;
		padding: 160px 50px 320px;
		position: relative;
		color: white;
		overflow: hidden;
		line-height: 1.1;
	}
	.about_title {
		position: absolute;
		top: 172px;
		left: 50px;
	}
	.about_content {
		width: 1110px;
		font-size: 68px;
		text-indent: 280px;
		@media (max-width: 1440px) {
			font-size: 52px;
		}
		@media (max-width: 1100px) {
			width: 80%;
			font-size: 42px;
			text-indent: 140px;
		}
	}
	.about_content .highlight,
	.about_bottom .highlight {
		clip-path: polygon(20px 25%, 100% 25%, calc(100% - 20px) 100%, 0 100%) !important;
		background: linear-gradient(
			104deg,
			rgba(87, 85, 217, 0) 20px,
			rgb(87, 85, 217) 20px,
			rgb(87, 85, 217) calc(100% - 20px),
			rgba(255, 255, 255, 0) calc(100% - 20px)
		);
		color: white;
		padding: 0 16px;
		padding-top: 10px;
	}
	.about_bottom {
		font-size: 28px;
		position: absolute;
		bottom: 160px;
		right: 149px;
		width: 645px;
		@media (max-width: 1100px) {
			font-size: 24px;
			right: 0px;
		}
	}
	.about_plot {
		width: 657px;
		height: 380px;
		position: absolute;
		bottom: 93px;
		right: -173px;
	}

	@media (max-width: 826px) {
		.about_content .highlight {
			padding-left: 15px;
			padding-right: 15px;
			background: linear-gradient(
				104deg,
				rgba(87, 85, 217, 0) 20px,
				rgb(87, 85, 217) 20px,
				rgb(87, 85, 217) calc(100% - 20px),
				rgba(255, 255, 255, 0) calc(100% - 20px)
			);
		}
		.star_highlight {
			// display: flex;
			max-inline-size: fit-content;
		}
		.about_content {
			width: 100%;
		}
		.about_bottom {
			width: 90%;
			left: 20px;
			right: 20px;
		}
	}
	@media (max-width: 664px) {
		.star_highlight {
			display: flex;
			max-inline-size: fit-content;
		}
	}
	@media (max-width: 768px) {
		.about_plot {
			right: -500px;
		}
		.about_bottom {
			line-height: 1.3;
		}
	}
	@media (max-width: 572px) {
		.star_highlight {
			display: initial;
		}
	}
</style>
