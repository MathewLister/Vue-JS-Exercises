<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
                <h1>CSS Animations With Vue JS</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alet alert-info" v-if="show">This is some info</div>
                </transition>
                <br><br>
                <transition name="slide">
                    <div class="alet alert-info" v-if="show">This is some info</div>
                </transition>
                <br><br>
                <transition  
                    enter-active-class="animate__animated animate__backInLeft"
                    leave-active-class="animate__animated animate__backOutRight"
                    >
                    <div class="alet alert-info" v-if="show">This is some info</div>
                </transition>
                <br><br>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alet alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alet alert-warning" v-if="!show" key="warning">This is some warning</div>
                </transition>
                <br><br>
                <h1>JavaScript Animations With Vue JS</h1>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
            }
        },
        methods: {
            beforeEnter(el) {
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    } 
                }, 20);
            },
            afterEnter(el) {

            },
            enterCancelled(el) {
                
            },
            beforeLeave(el) {
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    } 
                }, 20);
            },
            leaveCancelled(el) {

            }
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } to {
            transform: translate(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        } to {
            transform: translate(20px);
        }
    }
</style>
