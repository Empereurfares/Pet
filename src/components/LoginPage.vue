<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:5000/users');
        const users = await response.json();
        const user = users.find(u => u.username === this.username && u.password === this.password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.$router.push('/');
          window.location.reload(); // Reload the page to ensure the navbar updates
        } else {
          alert('Invalid username or password');
        }
      } catch (err) {
        alert('An error occurred. Please try again.');
      }
    }
  }
};
</script>
