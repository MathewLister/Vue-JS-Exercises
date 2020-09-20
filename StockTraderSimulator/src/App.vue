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
    let ROOT_PATH = 'http://vuejs-stock-trader-app-1.s3-website-us-west-2.amazonaws.com/';

    export default {
        data() {
            return {
                logo: ROOT_PATH + require('./assets/meta.png')
            }
        },
        metaInfo() {
            return {
                meta: [
                    {property: 'og:title', content: 'VueJS Stock Trading Simulator'},
                    {property: 'og:descriptions', content: 'A small app I made with VueJS - Hosted with AWS'},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:image', content:  this.logo},
                ]
            }
        },
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
