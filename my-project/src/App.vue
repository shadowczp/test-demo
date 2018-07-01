<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/a">Go to Foo</router-link>
    <router-link to="/b">Go to Bar</router-link>
    <button @click="forward">测试一下跳转</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      forward(){
        this.$router.push('/a5456')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
