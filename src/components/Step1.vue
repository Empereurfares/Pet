<template>
  <div>
    <h3>Step 1: Pet Information</h3>
    <div>
      <label for="type">Type:</label>
      <select v-model="localFormData.type">
        <option>Perdi</option>
        <option>Encontrei</option>
      </select>
    </div>
    <div>
      <label for="petType">Pet Type:</label>
      <select v-model="localFormData.petType">
        <option>Cat</option>
        <option>Dog</option>
        <option>Bird</option>
        <option>Other</option>
      </select>
    </div>
    <div>
      <label for="gender">Gender:</label>
      <select v-model="localFormData.gender">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <button @click="$emit('next-step')">Next</button>
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
