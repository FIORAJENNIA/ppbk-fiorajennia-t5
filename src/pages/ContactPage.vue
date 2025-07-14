<template>
  <div class="q-pa-md">
    <h2 class="text-h5 text-primary text-center q-mb-lg">Contact Us</h2>

    <div class="q-pa-lg q-mx-auto" style="max-width: 600px">
      <q-form @submit.prevent="submitForm">
        <q-input v-model="form.name" label="Name" filled class="q-mb-md" />
        <q-input v-model="form.email" label="Email" type="email" filled class="q-mb-md" />
        <q-input v-model="form.message" label="Message" type="textarea" filled class="q-mb-md" />

        <q-btn type="submit" label="Send Message" color="primary" />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  console.log('Form submitted:', form.value)
  alert('Message sent (dummy form)!')
}
</script>
