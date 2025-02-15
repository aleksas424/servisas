import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import AboutUs from '../views/AboutUs.vue';
import Services from '../views/ServiceList.vue';
import Registration from '../views/UserRegistration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/registration', component: Registration }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
