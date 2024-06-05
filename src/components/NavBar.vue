<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/">Pet Finder</router-link>
      </div>
      <ul class="navbar-menu">
        <li><router-link to="/pets">List Pets</router-link></li>
        <li><router-link to="/add-pet">Add Pet</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="isLoggedIn" @click="logout"><a href="#">Logout</a></li>
        <li v-if="isLoggedIn" class="navbar-user">{{ username }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('user');
    },
    username() {
      const user = JSON.parse(localStorage.getItem('user'));
      return user ? user.username : '';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/');
      window.location.reload(); // Reload the page to ensure the navbar updates
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #4CAF50;
  padding: 1rem;
  color: white;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin: 0;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.navbar-menu a:hover {
  background-color: #45a049;
  border-radius: 4px;
}

.navbar-user {
  margin-left: auto;
  padding-right: 1rem;
  font-weight: bold;
}
</style>
