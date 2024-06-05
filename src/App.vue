<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  created() {
    console.log('App created');
  },
  mounted() {
    console.log('App mounted');
  },
  updated() {
    console.log('App updated');
  },
  beforeUnmount() {
    console.log('App before unmount');
  }
};
</script>

<style>
/* Your styles */
</style>
