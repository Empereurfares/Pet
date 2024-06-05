<template>
  <div>
    <h3>Step 5: Contact Information</h3>
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="localFormData.name" />
    </div>
    <div>
      <label for="telephone">Telephone:</label>
      <input type="text" v-model="localFormData.telephone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="localFormData.email" />
    </div>
    <button @click="$emit('previous-step')">Previous</button>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  props: ['formData'],
  data() {
    return {
      localFormData: { ...this.formData }
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit-form', this.localFormData);
    }
  },
  watch: {
    localFormData: {
      handler(newValue) {
        this.$emit('update:formData', newValue);
      },
      deep: true
    }
  }
};
</script>
