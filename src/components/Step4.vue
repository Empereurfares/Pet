<template>
  <div>
    <h3>Step 4: Description</h3>
    <div>
      <label for="description">Description:</label>
      <textarea v-model="localFormData.description"></textarea>
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
