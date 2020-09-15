<template>
    <div>
        <h3>Edit the User</h3>
        <h4>Locale: {{ $route.query.locale }}</h4>
        <h5>Analytics: {{ $route.query.q }}</h5>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 600px"></div>
        <h2 id="data">Some data......</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>