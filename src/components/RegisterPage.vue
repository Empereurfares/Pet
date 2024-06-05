<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Failed to register');
        }

        const data = await response.json();
        console.log('Registration successful:', data);
        this.$router.push('/login');
      } catch (error) {
        console.error('Error:', error);
        this.error = 'Failed to register. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
