<template>
  <div id="app">
    <div></div>
    <img v-if="$route.path !== '/'" src="../assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
// import inter from './common/interface'
export default {
  name: 'app',
  mounted: function () {
    // inter.LoginUrl
    console.log('aaaa')
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
