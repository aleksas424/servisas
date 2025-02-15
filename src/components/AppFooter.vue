<template>
  <footer>
    <img src="#" alt="Footer Logo" />
    <nav>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </nav>
    <div class="social-media">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
    <p>&copy; 2024 Electric Services. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-top: 1px solid #34495e;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

footer img {
  height: 2rem;
  margin-bottom: 1rem;
}

footer nav ul {
  list-style: none;
  display: flex;
  padding: 0;
}

footer nav ul li {
  margin-right: 1rem;
}

footer nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer nav ul li a:hover {
  color: #1abc9c;
}

footer .social-media {
  margin-top: 1rem;
}

footer .social-media a {
  margin-right: 0.5rem;
  color: #ecf0f1;
  transition: color 0.3s ease;
}

footer .social-media a:hover {
  color: #1abc9c;
}

footer p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #bdc3c7;
}
</style>