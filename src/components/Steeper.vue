<template>
  <div>
    <step1 v-if="currentStep === 1" :formData="formData" @next-step="nextStep" />
    <step2 v-if="currentStep === 2" :formData="formData" @previous-step="previousStep" @next-step="nextStep" />
    <step3 v-if="currentStep === 3" :formData="formData" @previous-step="previousStep" @next-step="nextStep" />
    <step4 v-if="currentStep === 4" :formData="formData" @previous-step="previousStep" @next-step="nextStep" />
    <step5 v-if="currentStep === 5" :formData="formData" @previous-step="previousStep" @submit-form="submitForm" />
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
        type: 'Perdi',  // Default value as required
        status: 'no saved',  // Default value as required
        photos: []  // To store the uploaded photos
      }
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
    previousStep() {
      this.currentStep--;
    },
    submitForm() {
      console.log('Form submitted:', this.formData);
      // Handle form submission, e.g., sending data to server
    }
  }
};
</script>
