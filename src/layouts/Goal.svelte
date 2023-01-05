<div class="goal">
    <Grid stack>
        <Col col="6">
            <h1>Metis provides the rich web-based graphical user interface (GUI) for</h1>
        </Col>
        <Col col="6">
            world
            <!-- <Menu items={menu}> </Menu> -->
        </Col>
    </Grid>
</div>

<script>
    import { Grid, Col, Menu } from 'svelte-spectre'

    const menu = [
            { text: `cheap on-demand cloud simulations` },
            { text: `digesting the experiments data` },
            { text: `analyzing and comparing the data` },
            { text: `exporting and sharing the data across your lab` }
        ]
</script>

<style>
    .goal {
        background: #111;
        padding: 160px 0 160px 50px;
        color: white;
    }
    .goal h1{
        font-size: 48px;
    }
</style>