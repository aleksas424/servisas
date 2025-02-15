/* Globalus stilius */
<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #f8f9fa;
  color: #000000;
}

h1, h2, h3 {
  font-family: 'Lexend', sans-serif;
  color: #000000;
}
</style>

<template>
  <div class="home">
    <AppHeader />
    <HeroSection />
    <ServicesSection />
    <NewsSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import HeroSection from '../components/home/HeroSection.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
import ContactSection from '../components/home/ContactSection.vue';


export default {
  name: 'HomePage',
  components: {
    AppHeader,
    HeroSection,
    ServicesSection,
    ContactSection,
    AppFooter,
  },
};
</script>

<style scoped>
.home {
  font-family: 'Open Sans', sans-serif;
  background-color: #f8f9fa;
}
</style>
