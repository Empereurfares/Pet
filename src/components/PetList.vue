<template>
  <div class="container mt-5">
    <h1 class="mb-4">Pets</h1>
    <div class="row">
      <div class="col-md-4" v-for="pet in pets" :key="pet.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ pet.name }}</h5>
            <p class="card-text"><strong>Type:</strong> {{ pet.type }}</p>
            <p class="card-text"><strong>Status:</strong> {{ pet.status }}</p>
            <p class="card-text"><strong>Email:</strong> {{ pet.email }}</p>
            <p class="card-text"><strong>Address:</strong> {{ pet.address }}</p>
            <p class="card-text"><strong>Telephone:</strong> {{ pet.telephone }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary" @click="editPet(pet)">Edit</button>
              <button class="btn btn-danger" @click="deletePet(pet.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetList',
  data () {
    return {
      pets: []
    }
  },
  created () {
    this.fetchPets()
  },
  methods: {
    fetchPets () {
      fetch('http://localhost:5000/pets')
        .then(response => response.json())
        .then(data => {
          this.pets = data
        })
    },
    editPet (pet) {
      this.$router.push({
        path: `/edit-pet/${pet.id}`,
        query: { ...pet }
      })
    },
    deletePet (id) {
      fetch(`http://localhost:5000/pets/${id}`, {
        method: 'DELETE'
      }).then(() => {
        this.fetchPets()
      })
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
