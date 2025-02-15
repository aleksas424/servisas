import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importuojame router

createApp(App)
  .use(router)  // Naudojame router'į
  .mount('#app');
