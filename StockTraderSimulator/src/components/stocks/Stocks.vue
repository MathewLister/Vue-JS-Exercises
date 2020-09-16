<template>
    <div class="row">
        <app-stock v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Apple', price: 200 },
                { id: 3, name: 'Google', price: 231 },
                { id: 4, name: 'Amazon', price: 46 },
            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>