<template>
    <div v-if="pet">
      <h1>{{ pet.name }}</h1>
      <p>Type: {{ pet.type }}</p>
      <p>Status: {{ pet.status }}</p>
      <p>Email: {{ pet.email }}</p>
      <p>Address: {{ pet.address }}</p>
      <p>Telephone: {{ pet.telephone }}</p>
    </div>
  </template>

<script>
export default {
  name: 'PetDetails',
  data () {
    return {
      pet: null
    }
  },
  created () {
    this.fetchPet()
  },
  methods: {
    fetchPet () {
      const id = this.$route.params.id
      fetch(`http://localhost:5000/pets/${id}`)
        .then(response => response.json())
        .then(data => {
          this.pet = data
        })
    }
  }
}
</script>

  <style scoped>
  /* Add your styles here */
  </style>
