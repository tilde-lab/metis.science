<div class="flow">
	<div class="marquee">
		<ul class="marquee__content">
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Digital materials lab assistant</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Free open-source virtual materials environment</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Highly-scalable cheap scientific simulations in the cloud</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Modular reusable component-based system</span>
			</div>
		</ul>
		<ul aria-hidden="true" class="marquee__content">
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Digital materials lab assistant</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Free open-source virtual materials environment</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Highly-scalable cheap scientific simulations in the cloud</span>
			</div>
			<div class="flow_item">
				<span class="sign">#</span>
				<span>Modular reusable component-based system</span>
			</div>
		</ul>
	</div>
</div>

<style lang="scss">
	.flow {
		padding: 40px 0;
		background: #111;
		color: white;
		border-bottom: 1px solid #adadad;
		border-top: 1px solid #adadad;
		overflow: hidden;
		margin-top: -8px;
		display: flex;
	}
	.flow ul {
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.marquee {
		--gap: 13rem;
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 0 var(--gap);
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		gap: 0 var(--gap);
		min-width: max-content;
		animation: scroll 20s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}

	.flow_item {
		display: flex;
		align-items: center;
		width: max-content;
	}
	.flow_item span {
		font-size: 28px;
		@media (max-width: 1276px) {
			font-size: 22px;
		}
	}
	.flow_item .sign {
		font-size: 40px;
		margin-right: 5px;

		@media (max-width: 1276px) {
			font-size: 22px;
		}
	}

	@media (max-width: 620px) {
		.flow {
			padding-top: 25px;
			padding-bottom: 25px;
		}
		.flow_item span {
			font-size: 18px;
		}
		.marquee__content {
			gap: 0 5rem;
		}
	}
	@media (max-width: 475px) {
		.flow_item span {
			font-size: 14px;
		}
	}
</style>
