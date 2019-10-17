<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-success">Middle</button>
      <button type="button" class="btn btn-danger">Right</button>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
