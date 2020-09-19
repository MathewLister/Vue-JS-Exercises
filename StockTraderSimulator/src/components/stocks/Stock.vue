<template>
    <div class="card shadow-sm">
        <div class="card-header text-white">{{ stock.name }} <small>(Price: {{ stock.price }})</small>
            <div class="card-body">
                <div class="input-group" aria-describedby="basic-addon2">
                    <input 
                        type="number"
                        class="form-control shadow-none"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{danger: insufficientFunds}">
                    <div class="input-group-append">
                    <button
                        type="button"
                        class="btn"
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
    .danger {
        border: 1px solid red;
    }

    .card {
        background-color: #1eb980;
    }

    .btn {
        background-color: #282828;
        color: white;
    }

    .btn:disabled{
        opacity: .7;
    }

    input:focus {
        border-color: #045d56;
    }
</style>