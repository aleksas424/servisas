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
  color: #000; /* Default color for larger screens */
}

.hero-content p {
  font-size: 1.1rem;
  color: #555; /* Default color for larger screens */
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
  filter: brightness(0.7);
}

/* Mobile layout adjustments */
@media (max-width: 768px) {
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height of the screen */
    width: 100%; /* Full width */
    position: relative;
  }

  .hero-content {
    position: absolute; /* Position the text on top of the image */
    text-align: center;
    color: white; /* White text color for smaller screens */
    z-index: 1;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: white; /* White text color for h1 */
  }

  .hero-content p {
    font-size: 1.1rem;
    color: white; /* White text color for p */
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire screen */
    filter: brightness(0.5); /* Darkens the image for better text contrast */
  }
}
</style>
