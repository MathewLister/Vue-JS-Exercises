<template>
    <div class="card-deck">
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style scoped>
    .card-deck {
        margin-top: 50px;
    }
</style>