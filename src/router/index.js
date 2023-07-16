import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:category',
      name: 'category',
      props: true,
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/:category/:subcategory',
      name: 'subcategory',
      component: import('../views/SubcategoryView.vue')
    }
  ]
})

export default router
