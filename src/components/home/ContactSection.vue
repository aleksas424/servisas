<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-info">
        <h2 class="section-title">Mes randames</h2>
        <p class="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div class="contact-item">
          <i class="fas fa-envelope" aria-hidden="true"></i>
          <p><strong>Email:</strong> <a href="mailto:hello@yoursite.io">hello@yoursite.io</a></p>
        </div>

        <div class="contact-item">
          <i class="fas fa-phone" aria-hidden="true"></i>
          <p><strong>Phone:</strong> <a href="tel:+15550000000">+1 (555) 000-0000</a></p>
        </div>

        <div class="contact-item">
          <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          <p><strong>Office:</strong> 123 Sample St, Sydney NSW 2000 AU</p>
          <a href="#" class="directions">Get Directions</a>
        </div>
      </div>

      <div class="map-container">
        <img src="#" alt="Map showing office location" class="map-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
};
</script>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
}

.contact-info {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #666;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.contact-item i {
  font-size: 1.2rem;
  color: #333;
}

.contact-item a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
}

.contact-item a:hover {
  color: #0056b3;
}

.map-container {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 500px;
}

.map-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
}
</style>
