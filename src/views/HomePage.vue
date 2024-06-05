<template>
  <div>
    <h1>Welcome to HomePage</h1>
    <!-- Other contents of the HomePage -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log('HomePage created');
  },
  mounted() {
    console.log('HomePage mounted');
  },
  updated() {
    console.log('HomePage updated');
  },
  beforeUnmount() {
    console.log('HomePage before unmount');
  }
};
</script>

<style scoped>
/* Your styles */
</style>
