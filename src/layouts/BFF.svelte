<div class="bff">
	<Grid stack>
		<Col col={!$media.sm ? '6' : '12'}>
			<div class="bff_box">
				<div class="bff_title">backend-for-frontend</div>
				<div class="bff_content">
					The Metis backend-for-frontend (BFF) deals with the user-related logics: accounts, access, permissions, etc. All the user and data
					management is encapsulated here. Download and deploy it at your own web-server.
				</div>
				<div class="bff_bottom_box">
					<div class="bff_bottom">
						<img src="assets/img/node.png" alt="node" />
						<Logo size="4em" />
					</div>
					<Button variant="secondary" size="xl">Download now</Button>
				</div>
			</div>
		</Col>
		<Col col={!$media.sm ? '6' : '12'}>
			<CodeEditor {code} lang="js" loc {...$$restProps} />
		</Col>
	</Grid>
</div>

<script lang="ts">
	import { Grid, Col, Button } from 'svelte-spectre';
	import { Logo } from '@/components/index';
	import CodeEditor from 'svelte-code-editor';
	import { media } from '@/stores/media';

	let code = `/**
 * @api {post} /v0/calculations Submit a new calculation
 * @apiName SubmitCalculation
 * @apiGroup Calculations
 * @apiSuccess (202) reqId response sent to a separate event stream.
 */
async function post(req, res, next) {

		const reqId = req.id,
			engine = req.body.engine,
			input = req.body.input || {},
			workflow = req.body.workflow;

		if (req.session.calculations.data.length > 15) {
			return next({
				status: StatusCodes.PAYMENT_REQUIRED,
				error: 'Sorry, computing resources quota exceeded',
			});
		}`;
</script>

<style lang="scss">
	.bff {
		padding: 146px 50px 220px;
	}
	.bff_box {
		position: relative;
	}
	.bff_title {
		position: absolute;
		top: 11px;
		left: 0;
		font-weight: 300;
		font-size: 20px;
		line-height: 24px;
	}
	.bff_content {
		text-indent: 308px;
		margin-bottom: 80px;
		font-size: 36px;
		line-height: 134%;
	}
	.bff_bottom_box {
		display: flex;
		align-items: flex-end;
	}
	.bff_bottom {
		padding: 30px 0;
		display: flex;
		align-items: center;
		width: 461px;
		border-top: 1px solid #cdcdcd;
		border-bottom: 1px solid #cdcdcd;
		margin-right: 154px;
	}
	.bff_bottom img {
		width: auto;
		object-fit: contain;
		height: 40px;
		margin-right: 70px;
	}
	@media (max-width: 1440px) {
		.bff_content {
			font-size: 28px;
		}
	}
	@media (max-width: 1280px) {
		.bff_content {
			text-indent: 230px;
		}
		.bff_bottom {
			width: 80%;
			margin-right: 20px;
		}
	}
	@media (max-width: 1024px) {
		.bff_bottom_box {
			align-items: center;
			flex-direction: column;
		}
		.bff_bottom {
			margin-bottom: 40px;
		}
	}
	@media (max-width: 768px) {
		.bff_bottom img {
			margin-right: 10px;
		}
		.bff_content {
			font-size: 24px;
			padding-top: 6px;
		}
	}
	@media (max-width: 425px) {
		.bff_title {
			position: relative;
			margin-bottom: 20px;
		}
		.bff_content {
			text-indent: 0;
		}
	}
</style>
