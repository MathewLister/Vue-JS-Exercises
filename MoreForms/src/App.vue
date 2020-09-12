<template>
    <div class="container">
        <form v-if="displayForm">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Signup</h1>
                    <hr>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            class="form-control"
                            v-model="userData.name">
                    </div>
                    <div class="form-group">
                        <label for="email">E-Mail</label>
                        <input 
                            type="text" 
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="email">Password</label>
                        <input 
                            type="text" 
                            id="password"
                            class="form-control"
                            v-model="userData.password">
                    </div>
                    <label for="saveData">Save Data?</label>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8  col-md-6 form-group">
                            <label for="saveData">
                                <input 
                                    type="radio" 
                                    name="" id="saveData"
                                    value="true"
                                    v-model="saveData"
                                    v-on:change="formRadio"> Yes
                            </label>
                            <label for="saveData">
                                <input 
                                    type="radio" 
                                    name="" id="saveData"
                                    value="false"
                                    v-model="saveData"> No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div v-if="!displayForm" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data Summary</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.name }}</p>
                        <p>E-Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.saveData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userData: {
                    name: '',
                    email: '',
                    password: ''
                },
                saveData: false,
                displayForm: true
            }
        },
        methods: {
            formRadio() {
                this.displayForm = false;
            }
        }
    }
</script>

<style>
</style>
