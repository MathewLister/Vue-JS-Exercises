<template>
    <div class="col-sm-6 col-md-4">
        <div class="shadow-sm card" style="width: 18rem;">
            <div class="card-header text-white bg-success">Name</div>
            <div class="card-body">
                <h5 class="card-title">Card title
                    <small>(Price: $128.00)</small>
                </h5>
                <div class="col-sm-7 float-left">
                    <input 
                        type="number"
                        class="form-control"
                        placenolder="Quantity">
                </div>
                <div class="float-right">
                    <a href="#" class="btn btn-success">Buy</a>
                </div>    
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        margin: 12px;
    }
</style>