<template>
  <div id="q-app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #q-app {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-image: url('assets/img/background.png');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
