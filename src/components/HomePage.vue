<template>
  <div>
    <h1>Welcome to Pet Finder</h1>
    <nav>
      <ul>
        <li><router-link to="/pets">List Pets</router-link></li>
        <li><router-link to="/add-pet">Add Pet</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Add your styles here */
</style>
