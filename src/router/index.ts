import { createRouter, createWebHistory } from 'vue-router';
import InicioViewVue from '../views/InicioView.vue';


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
      component: () => import('../views/FavoritosView.vue') // Hace que solo se cargue si el usuario ingresa a Favoritos
    }
  ]
})

export default router
