import { createRouter, createWebHistory } from 'vue-router'
import From from '../components/From.vue'
import Test from '../components/Test.vue'

import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import { defineAsyncComponent } from 'vue'

const About = defineAsyncComponent(() => import('@/views/About.vue'))

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
  { path: '/from', component: From },
  { path: '/about', component: About },
  { path: '/product', component: Product },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
