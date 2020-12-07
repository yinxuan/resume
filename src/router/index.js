import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/special',
    name: 'special',
    component: () => import(/* webpackChunkName: "about" */ '../views/Special')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact')
  }
]

const router = createRouter({
  base:'/dist',
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
