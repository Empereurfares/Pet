<template>
  <div>
    <h3>Step 2: Photos</h3>
    <div>
      <label>Upload Photos:</label>
      <input type="file" @change="handleFileUpload" multiple />
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
  methods: {
    handleFileUpload(event) {
      const files = event.target.files;
      this.localFormData.photos = Array.from(files);
      this.$emit('update:formData', this.localFormData);
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
