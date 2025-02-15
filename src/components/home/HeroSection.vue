<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Imones pavadinimas</h1>
      <p>imone tokia galime padeti ta ir ta</p>
      <button class="hero-button">Apie mus</button>
    </div>
    <div class="hero-image">
      <img :src="require('@/assets/hero.jpg')" alt="Hero Image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.hero-button {
  padding: 0.75rem 1.5rem;
  background-color: #000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero-button:hover {
  background-color: #333;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: brightness(0.7); /* Makes the image darker */
}
</style>
