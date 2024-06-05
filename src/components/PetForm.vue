<template>
  <div class="container mt-5">
    <h1>{{ isEdit ? 'Edit Pet' : 'Add Pet' }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="pet.name" required />
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <input type="text" class="form-control" id="type" v-model="pet.type" required />
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status</label>
        <input type="text" class="form-control" id="status" v-model="pet.status" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="pet.email" required />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="pet.address" required />
      </div>
      <div class="mb-3">
        <label for="telephone" class="form-label">Telephone</label>
        <input type="tel" class="form-control" id="telephone" v-model="pet.telephone" required />
      </div>
      <button type="submit" class="btn btn-success">{{ isEdit ? 'Update Pet' : 'Add Pet' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PetForm',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    existingPet: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pet: this.existingPet
        ? { ...this.existingPet }
        : {
            name: '',
            type: '',
            status: '',
            email: '',
            address: '',
            telephone: ''
          }
    }
  },
  methods: {
    submitForm () {
      const method = this.isEdit ? 'PUT' : 'POST'
      const url = this.isEdit
        ? `http://localhost:5000/pets/${this.pet.id}`
        : 'http://localhost:5000/pets'

      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.pet)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(() => {
          this.$router.push('/pets')
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error)
        })
    }
  },
  watch: {
    existingPet (newVal) {
      if (newVal) {
        this.pet = { ...newVal }
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
