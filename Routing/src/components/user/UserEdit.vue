<template>
    <div>
        <h3>Edit the User</h3>
        <h4>Locale: {{ $route.query.locale }}</h4>
        <h5>Analytics: {{ $route.query.q }}</h5>
        <hr>
        <button class="btn btn-primary">Confirm</button>
        <div style="height: 600px"></div>
        <h2 id="data">Some data......</h2>
    </div>
</template>