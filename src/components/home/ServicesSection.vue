<template>
  <section class="services">
    <h2>Mūsų paslaugos</h2>
    <p class="services-description">
      Teikiame aukščiausios kokybės paslaugas, skirtas jūsų elektromobiliui ir hibridiniam automobiliui.
    </p>
    <div class="service-cards">
      <div class="service-card">
        <img :src="require('@/assets/EvRep.jpg')" alt="Electric Vehicle Repair" />
        <h3>Electric Vehicle Repair</h3>
        <p>Profesionalus elektrinių transporto priemonių remontas ir priežiūra.</p>
        <router-link to="/services#electric-vehicle-repair">Daugiau →</router-link>
      </div>
      <div class="service-card">
        <img :src="require('@/assets/HybRep.jpg')" alt="Hybrid Car Repair" />
        <h3>Hybrid Car Repair</h3>
        <p>Specializuotas hibridinių automobilių techninis aptarnavimas.</p>
        <router-link to="/services#hybrid-car-repair">Daugiau →</router-link>
      </div>
      <div class="service-card">
        <img :src="require('@/assets/BatteryRep.jpg')" alt="Battery Repair" />
        <h3>Battery Repair</h3>
        <p>Baterijų diagnostika, remontas ir keitimas ilgesniam tarnavimo laikui.</p>
        <router-link to="/services#battery-repair">Daugiau →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
};
</script>

<style scoped>
.services {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.services h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1rem;
}

.services-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #555;
  font-size: 1.1rem;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.service-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #ddd;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.service-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.service-card a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.service-card a:hover {
  color: #0056b3;
}
</style>
