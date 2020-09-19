<template>
    <div class="card shadow-sm">
        <div class="card-header text-white">{{ stock.name }} <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
            <div class="card-body">
                <div class="input-group" aria-describedby="basic-addon2">
                    <input 
                        type="number"
                        class="form-control shadow-none"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{danger: insufficientQuantity}"
                    >
                    <div class="input-group-append">
                        <button
                            class="btn btn-danger"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                            >{{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
                        </button>
                    </div>
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
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
                ...mapActions({
                    placeSellOrder: 'sellStock'
                }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.stock.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            },
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid #ffcf44;
    }

    .card {
        background-color: #ff6859;
    }

    .btn {
        background-color: #282828;
        color: white;
    }

    .btn:disabled{
        opacity: .7;
    }

    input:focus {
        border-color: #ffcf44;
    }
</style>