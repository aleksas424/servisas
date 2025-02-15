<template>
  <div>
    <AppHeader /> <!-- Pridedame Header -->
    <CompanyDescription />
    <OurTeam />
    <GallerySection />
    <AppFooter /> <!-- Pridedame Footer -->
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import CompanyDescription from "../components/AboutUs/CompanyDescription.vue";
import OurTeam from "../components/AboutUs/OurTeam.vue";
import GallerySection from "../components/AboutUs/GallerySection.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    CompanyDescription,
    OurTeam,
    GallerySection,
  },
};
</script>

<style scoped>
/* Jei reikia papildomų stilių */
</style>
