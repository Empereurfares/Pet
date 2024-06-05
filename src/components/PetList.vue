<template>
  <div class="pet-list">
    <h1>List of Pets</h1>
    <div v-if="pets.length" class="pet-cards">
      <div v-for="pet in pets" :key="pet.id" class="pet-card">
        <h2>{{ pet.name }}</h2>
        <p><strong>Type:</strong> {{ pet.type }}</p>
        <p><strong>Email:</strong> {{ pet.email }}</p>
        <p><strong>Address:</strong> {{ pet.address }}</p>
        <p><strong>Telephone:</strong> {{ pet.telephone }}</p>
        <p><strong>Status:</strong> {{ pet.status }}</p>
        <button @click="markAsSaved(pet)">Mark as Saved</button>
      </div>
    </div>
    <div v-else>
      <p>No pets found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pets: []
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await fetch('http://localhost:5000/pets');
        this.pets = await response.json();
      } catch (err) {
        console.error('Failed to fetch pets:', err);
      }
    },
    async markAsSaved(pet) {
      try {
        pet.status = 'saved';
        await fetch(`http://localhost:5000/pets/${pet.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pet)
        });
        this.fetchPets(); // Refresh the list
      } catch (err) {
        console.error('Failed to update pet status:', err);
      }
    }
  }
};
</script>

<style scoped>
.pet-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
.pet-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.pet-card {
  flex: 1 1 calc(33.333% - 1rem);
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.pet-card h2 {
  margin-top: 0;
}
.pet-card p {
  margin: 0.5rem 0;
}
.pet-card button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.pet-card button:hover {
  background-color: #0056b3;
}
</style>
