<template>
    <div id="test">{{text}}</div>
</template>

<script>
    export default {
        name: "app.vue",
        data() {
            return {
                text: "初始文本"
            }
        }
    }
</script>

<style scoped>
    #test {
        color: red;
    }
</style>