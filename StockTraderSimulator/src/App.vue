<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition mode="out-in" enter-active-class="animate__animated animate__fadeInDown animate__faster">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }    
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
