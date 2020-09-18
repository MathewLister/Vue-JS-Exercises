<template>
    <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="card shadow-sm" style="width: 18rem;">
                <div class="card-header text-white bg-success">{{ stock.name }} <small>(Price: {{ stock.price }})</small></div>
                <div class="card-body">
                    <div class="col-sm-7 float-left">
                        <input 
                            type="number"
                            class="form-control shadow-none"
                            placeholder="Quantity"
                            v-model.number="quantity"
                            :class="{danger: insufficientFunds}">
                    </div>
                    <div class="float-right">
                        <button
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                            >{{ insufficientFunds ? 'Add Funds' : 'Buy' }}
                        </button>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;   
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .card {
        margin: 12px;
    }

    .danger {
        border: 1px solid red;
    }
</style>