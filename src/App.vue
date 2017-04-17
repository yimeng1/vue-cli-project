<template>
  <div id="app">
    <div></div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import inter from './common/interface'
export default {
  name: 'app',
  mounted: function () {
    console.log('aaaa' + inter.LoginUrl)
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
