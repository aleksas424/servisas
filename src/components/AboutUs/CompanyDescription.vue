<template>
  <section class="company-description">
    <div class="content">
      <h2>Įmonės aprašymas</h2>
      <p>
        Mūsų įmonė yra lyderė elektrinių transporto priemonių priežiūros srityje,
      </p>
      <button class="learn-more">Daugiau</button>
    </div>
    <div class="image-placeholder">
      <!-- Čia gali būti paveikslėlis -->
    </div>
  </section>
</template>

<style scoped>
.company-description {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 60px 10%;
  background-color: #f9f9f9;
}

.content {
  flex: 1;
  max-width: 50%;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.learn-more {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid black;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}

.learn-more:hover {
  background: black;
  color: white;
}

.image-placeholder {
  flex: 1;
  max-width: 50%;
  height: 300px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
