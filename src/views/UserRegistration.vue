<template>
  <div>
    <AppHeader /> <!-- Pridedame Header -->
    <RegistrationForm />
    <AppFooter /> <!-- Pridedame Footer -->
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import RegistrationForm from '../components/registration/RegistrationForm.vue';
</script>

<style scoped>
.services-page {
  padding: 2rem;
}
</style>
