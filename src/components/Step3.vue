<template>
  <div>
    <h3>Step 3: Date and Address</h3>
    <div>
      <label for="date">Date:</label>
      <input type="date" v-model="localFormData.date" />
    </div>
    <div>
      <label for="address">Address:</label>
      <input type="text" v-model="localFormData.address" />
    </div>
    <button @click="$emit('previous-step')">Previous</button>
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
