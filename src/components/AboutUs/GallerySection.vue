<template>
  <section class="gallery">
    <h2>Our Gallery</h2>
    <p>Explore our facilities and dedicated team in action.</p>
    <div class="images">
      <div class="image" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Galerijos nuotrauka" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: ["#", "#", "#"], // Čia įdėk realius nuotraukų URL
    };
  },
};
</script>

<style scoped>
.gallery {
  text-align: center;
  padding: 60px 10%;
  background-color: #f9f9f9;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
}

.images {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.image {
  flex: 1;
  max-width: 300px;
  height: 200px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.05);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
