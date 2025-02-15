<template>
    <section class="electric-car-services">
      <h2>Elektromobilių paslaugos</h2>
      <p class="section-description">Trumpas aprašymas sekcijos turinio.</p>
      <div class="cards">
        <ServiceCard 
          v-for="(service, index) in services" 
          :key="index" 
          :title="service.title" 
          :description="service.description"/>
      </div>
    </section>
  </template>
  
  <script>
  import ServiceCard from './ServiceCard.vue';
  
  export default {
    components: { ServiceCard },
    data() {
      return {
        services: [
          { title: 'Paslauga 1', description: 'Lorem ipsum dolor sit amet.' },
          { title: 'Paslauga 2', description: 'Lorem ipsum dolor sit amet.' },
          { title: 'Paslauga 3', description: 'Lorem ipsum dolor sit amet.' },
          { title: 'Paslauga 4', description: 'Lorem ipsum dolor sit amet.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .electric-car-services {
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    text-align: center;
  }
  
  .section-description {
    color: #555;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-content: center;
  }
  
  @media (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
  </style>
  