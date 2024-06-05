<template>
  <div class="pet-list">
    <div v-for="pet in pets" :key="pet.id" class="pet-card">
      <h3>{{ pet.name }}</h3>
      <p><strong>Type:</strong> {{ pet.type }}</p>
      <p><strong>Pet Type:</strong> {{ pet.petType }}</p>
      <p><strong>Description:</strong> {{ pet.description }}</p>
      <p><strong>Date:</strong> {{ pet.date }}</p>
      <p><strong>Address:</strong> {{ pet.address }}</p>
      <p><strong>Telephone:</strong> {{ pet.telephone }}</p>
      <p><strong>Email:</strong> {{ pet.email }}</p>
      <p><strong>Gender:</strong> {{ pet.gender }}</p>
      <p><strong>Status:</strong> {{ pet.status }}</p>
      <button @click="toggleStatus(pet)">
        {{ pet.status === 'saved' ? 'Mark as Not Saved' : 'Mark as Saved' }}
      </button>
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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.pets = data;
      } catch (error) {
        console.error('Failed to fetch pets:', error);
      }
    },
    async toggleStatus(pet) {
      try {
        pet.status = pet.status === 'saved' ? 'not saved' : 'saved';
        const response = await fetch(`http://localhost:5000/pets/${pet.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pet)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.fetchPets();
      } catch (error) {
        console.error('Failed to update pet status:', error);
      }
    }
  }
};
</script>

<style scoped>
.pet-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.pet-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: calc(33.333% - 2rem);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pet-card h3 {
  margin-top: 0;
}

.pet-card p {
  margin: 0.5rem 0;
}

.pet-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.pet-card button:hover {
  background-color: #45a049;
}
</style>
