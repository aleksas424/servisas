<template>
  <header>
    <img src="#" alt="Logo" class="logo" />
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/registration">Registration</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 3rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

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

router-link {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: linear-gradient(45deg, #1abc9c, #3498db);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: inline-block;
}

router-link:hover {
  background: linear-gradient(45deg, #3498db, #1abc9c);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

router-link:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Aktyvus mygtukas (aktyvi nuoroda) */
router-link.router-link-active {
  background: linear-gradient(45deg, #3498db, #1abc9c);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>