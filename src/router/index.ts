import { createRouter, createWebHistory } from 'vue-router';
import InicioViewVue from '../views/InicioView.vue';
import FavoritosViewVue from '../views/FavoritosView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => InicioViewVue
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => FavoritosViewVue
    }
  ]
})

export default router
