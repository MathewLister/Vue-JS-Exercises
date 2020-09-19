<template>
    <div class="portfolio-overview">
        <h1>Trade or View Your Portfolio</h1>
        <h6>You can save or load your data</h6>
        <h6>Click 'End Day' to get the next days stock prices</h6>
        <hr>
        <p>You Funds: {{ funds | currency }}</p>
    </div>    
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

<style scoped>
    .portfolio-overview {
        margin-top: 50px;
    }
</style>