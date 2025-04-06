// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import From from '../components/From.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Test from '../components/Test.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/test', component: Test },
  { path: '/from', component: From },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
