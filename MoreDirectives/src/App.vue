<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Some Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong Text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Some Custome Directives</h1>
                <p v-highlight:background.delayed="'red'">Color This</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color This</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        'local-highlight': {
            bind(el, binding, vnode) {
                // el.style.backgroundColor = 'green';
                // el.style.backgroundColor = binding.value;
                let delay = 0;
                if (binding.modifiers['delayed']) {
                    delay = 2000;
                }
                if (binding.modifiers['blink']) {
                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                            if (binding.arg = 'background') {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        }, binding.value.delay);
                    }, delay);

                } else {
                    setTimeout(() => {
                        if (binding.arg = 'background') {
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }
                    }, delay);
                }
            }
        }
    }
}
</script>

<style scoped>

</style>