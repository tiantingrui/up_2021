<template>
    <div class="container">
        <h1>{{msg}}</h1>
        <img src="./img/logo.jpg" width="200" height="160" alt="">
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            msg: 'hello vue'
        }
    }
}
</script>

<style scoped>
    .container {
        width: 600px;
        height: 100px;
        background-color: aqua;
    }
</style>