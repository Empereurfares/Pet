<template>
  <div>
    <step1 v-if="currentStep === 1" v-model:formData="formData" @next-step="updateFormData" />
    <step2 v-if="currentStep === 2" v-model:formData="formData" @previous-step="previousStep" @next-step="updateFormData" />
    <step3 v-if="currentStep === 3" v-model:formData="formData" @previous-step="previousStep" @next-step="updateFormData" />
    <step4 v-if="currentStep === 4" v-model:formData="formData" @previous-step="previousStep" @next-step="updateFormData" />
    <step5 v-if="currentStep === 5" v-model:formData="formData" @previous-step="previousStep" @submit-form="submitForm" />
  </div>
</template>

<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
import Step4 from './Step4.vue';
import Step5 from './Step5.vue';

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  data() {
    return {
      currentStep: 1,
      formData: {
        name: '',
        type: 'Perdi',
        description: '',
        date: '',
        gender: ''
      }
    };
  },
  methods: {
    updateFormData(updatedData) {
      this.formData = { ...this.formData, ...updatedData };
      this.currentStep++;
    },
    previousStep() {
      this.currentStep--;
    },
    async submitForm(updatedData) {
      this.formData = { ...this.formData, ...updatedData };
      try {
        await fetch('http://localhost:3000/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
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
