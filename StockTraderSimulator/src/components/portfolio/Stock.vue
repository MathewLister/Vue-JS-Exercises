<template>
    <div class="col-sm-6 col-md-4">
        <div class="shadow-sm card" style="width: 18rem;">
            <div class="card-header text-white bg-success">{{ stock.name }} <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small></div>
            <div class="card-body">
                <div class="col-sm-7 float-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity">
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                        >Sell
                    </button>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
                ...mapActions([
                    'sellStock'
                ]),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.stock.quantity
                };
                this.sellStock();
            },
        }
    }
</script>

<style scoped>
    .card {
        margin: 12px;
    }
</style>