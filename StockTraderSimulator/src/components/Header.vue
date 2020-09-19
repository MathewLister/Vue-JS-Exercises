<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" data-toggle="collapse" data-target="#navbarSupportedContent" to="/">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li" data-toggle="collapse" data-target="#navbarSupportedContent"><a class="nav-link">Portfolio</a></router-link>
                    <router-link to="/stocks" class="nav-item" activeClass="active" tag="li" data-toggle="collapse" data-target="#navbarSupportedContent"><a class="nav-link">Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item"><a style="cursor: pointer;" @click="endDay" class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent">End Day</a></li>
                    <li class="nav-item dropdown">
                        <a 
                        class="nav-link dropdown-toggle" 
                        href="#" id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" data-toggle="collapse" data-target="#navbarSupportedContent" @click.prevent="saveData">Save Data</a>
                        <a class="dropdown-item" data-toggle="collapse" data-target="#navbarSupportedContent" @click.prevent="loadData">Load Data</a>
                        </div>
                    </li>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
            </div>  
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
                ...mapActions({
                    randomizeStocks: 'randomizeStocks',
                    fetchData: 'loadData'
                }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        },
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }

    .dropdown-item {
        color: #282828;
    }

    nav {
        background-color: #282828;
        color: white;
    }

    .dropdown-item:hover {
        color: #282828;
    }
</style>