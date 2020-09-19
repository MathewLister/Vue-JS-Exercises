<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <h6>You may save or load you data</h6>
        <h6>Click 'End Day' to being a new day</h6>
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