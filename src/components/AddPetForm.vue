<template>
  <div>
    <h2>Add Pet</h2>
    <form @submit.prevent="submitForm">
      <div v-if="step === 1">
        <label>Type:</label>
        <select v-model="formData.type">
          <option>Perdi</option>
          <option>Encontrei</option>
        </select>
        <label>Pet Type:</label>
        <select v-model="formData.petType">
          <option>Cat</option>
          <option>Dog</option>
          <option>Bird</option>
          <option>Other</option>
        </select>
        <label>Gender:</label>
        <select v-model="formData.gender">
          <option>Male</option>
          <option>Female</option>
        </select>
        <button type="button" @click="nextStep">Next</button>
      </div>
      <div v-else-if="step === 2">
        <label>Upload Photo:</label>
        <input type="file" @change="handleFileUpload" />
        <button type="button" @click="previousStep">Previous</button>
        <button type="button" @click="nextStep">Next</button>
      </div>
      <div v-else-if="step === 3">
        <label>Date:</label>
        <input type="date" v-model="formData.date" />
        <label>Address:</label>
        <input type="text" v-model="formData.address" />
        <button type="button" @click="previousStep">Previous</button>
        <button type="button" @click="nextStep">Next</button>
      </div>
      <div v-else-if="step === 4">
        <label>Description:</label>
        <textarea v-model="formData.description"></textarea>
        <button type="button" @click="previousStep">Previous</button>
        <button type="button" @click="nextStep">Next</button>
      </div>
      <div v-else-if="step === 5">
        <label>Name:</label>
        <input type="text" v-model="formData.name" />
        <label>Telephone:</label>
        <input type="tel" v-model="formData.telephone" />
        <label>Email:</label>
        <input type="email" v-model="formData.email" />
        <button type="button" @click="previousStep">Previous</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      formData: {
        type: '',
        petType: '',
        gender: '',
        date: '',
        address: '',
        description: '',
        name: '',
        telephone: '',
        email: '',
        photos: []
      }
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    },
    handleFileUpload(event) {
      this.formData.photos = Array.from(event.target.files);
    },
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5000/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.$router.push('/pets');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Your styles */
</style>
