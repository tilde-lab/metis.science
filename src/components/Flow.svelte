<div class="flow">
	<div class="flow_wrapper">
		<div class="flow_item">
			<span class="sign">#</span>	
			<span>Metis is a digital materials lab assistant.</span>	
		</div>
		<div class="flow_item">
			<span class="sign">#</span>	
			<span>Metis is a digital materials lab assistant.</span>	
		</div>
		<div class="flow_item">
			<span class="sign">#</span>	
			<span>Metis is a digital materials lab assistant.</span>	
		</div>
		<div class="flow_item">
			<span class="sign">#</span>	
			<span>Metis is a digital materials lab assistant.</span>	
		</div>
	</div>
</div>

<script lang="ts" context="module">
</script>

<script lang="ts">
</script>

<style lang="scss">

	.flow {
		padding: 48px 0;
		background: #111;
		color: white;
		border-bottom: 1px solid #adadad;
		border-top: 1px solid #adadad;
		overflow: hidden;
		margin-top: -3px;
		display: flex;
	}
	.flow_wrapper{
		height: 100%;
		width: 200vw;
		display: flex;
		animation: running-anim 10s forwards infinite linear;
		@keyframes running-anim {
            from {
                transform: translateX(0)
			}
            to {
                transform: translateX(-39.5vw)
			}
		}
	}

	.flow_item{
		display: flex;
		align-items: center;
		margin-right: 180px;
		width: max-content;
	}
	.flow_item span{
		font-size: 28px;
	}
	.flow_item .sign{
		font-size: 40px;
		margin-right: 5px;
	}
</style>
