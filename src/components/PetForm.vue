<template>
  <div class="add-pet">
    <h1>Add Pet</h1>
    <form @submit.prevent="submitForm" class="pet-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="type">Type:</label>
        <select v-model="type" required>
          <option value="Perdi">Perdi</option>
          <option value="Encontrei">Encontrei</option>
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" v-model="address" required />
      </div>
      <div class="form-group">
        <label for="telephone">Telephone:</label>
        <input type="tel" v-model="telephone" required />
      </div>
      <button type="submit" class="submit-btn">Add Pet</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      type: 'Perdi', // Default value for type
      email: '',
      address: '',
      telephone: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5000/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            type: this.type,
            email: this.email,
            address: this.address,
            telephone: this.telephone,
            status: 'no saved' // Default status
          })
        });
        if (response.ok) {
          this.$router.push('/pets');
        } else {
          alert('Failed to add pet');
        }
      } catch (err) {
        alert('There was a problem with the fetch operation');
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.add-pet {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.pet-form {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.submit-btn {
  background-color: #28a745;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.submit-btn:hover {
  background-color: #218838;
}
</style>
