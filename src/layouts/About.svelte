<div class="about">
    <span class="about_title">about name</span>
    <div class="about_content">
        The Metis name stands for<br /> the Greek mythological deity of wisdom and
        <span class="highlight">deep thought.</span>
    </div>
    <div class="about_bottom">From the solid state physics foundations, Metis accumulates the materials knowledge and derives the materials wisdom.</div>
    <div class="about_plot">
        <img src="assets/img/Vector.png" alt="vector_image" />
    </div>
</div>

<style>
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
	}
	.about_content .highlight {
		clip-path: polygon(20px 25%, 100% 25%, calc(100% - 20px) 100%, 0 100%) !important;
		background: linear-gradient(
			104deg,
			rgba(87, 85, 217, 0) 20px,
			rgb(87, 85, 217) 20px,
			rgb(87, 85, 217) calc(100% - 20px),
			rgba(255, 255, 255, 0) calc(100% - 20px)
		);
		color: white;
		padding: 0 20px;
		padding-top: 10px;
	}
	.about_bottom {
		font-size: 28px;
		position: absolute;
		bottom: 160px;
		right: 149px;
		width: 645px;
	}
	.about_plot {
		width: 657px;
		height: 380px;
		position: absolute;
		bottom: 93px;
		right: -173px;
	}
</style>