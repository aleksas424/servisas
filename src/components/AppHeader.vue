<template>
  <header>
    <img :src="require('@/assets/Logo1.png')" alt="Logo" class="logo" />
    <nav>
      <!-- Burger meniu ikona -->
      <div class="burger" @click="toggleMenu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>

      <!-- Navigacijos meniu -->
      <ul :class="{ 'menu-open': isMenuOpen }">
        <li><router-link to="/" class="button-link">Home</router-link></li>
        <li><router-link to="/about-us" class="button-link">About Us</router-link></li>
        <li><router-link to="/services" class="button-link">Services</router-link></li>
        <li><router-link to="/registration" class="button-link">Registration</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false, // Meniu būsena (atidaromas arba uždaromas)
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Keičiame meniu būseną
    },
  },
};
</script>

<style scoped>
/* Header ir logotipas */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 6rem;  /* Increase the height */
  width: auto;   /* Maintain aspect ratio */
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

/* Navigacija */
nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 1.5rem;
}

nav ul li:last-child {
  margin-right: 0;
}

/* Router-link kaip mygtukas */
.button-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: linear-gradient(45deg, #1abc9c, #3498db);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: inline-block;
}

/* Hover efektas */
.button-link:hover {
  background: linear-gradient(45deg, #3498db, #1abc9c);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
  color: white;
}

/* Active efektas */
.button-link:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Aktyvus mygtukas */
.button-link.router-link-active {
  background: linear-gradient(45deg, #3498db, #1abc9c);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Burger meniu stiliai */
.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  height: 24px;
  width: 30px;
}

.burger-line {
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
}

/* Meniu mobiliuose įrenginiuose */
nav ul.menu-open {
  display: block;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #2c3e50;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav ul.menu-open li {
  margin-bottom: 1rem;
}

nav ul.menu-open li:last-child {
  margin-bottom: 0;
}

/* Mobiliems įrenginiams */
@media (max-width: 768px) {
  nav ul {
    display: none;
  }

  .burger {
    display: flex;
  }

  nav ul.menu-open {
    display: block;
  }
}
</style>
