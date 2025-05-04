import { createRouter, createWebHistory } from 'vue-router'
import From from '../components/From.vue'
import Test from '../components/Test.vue'

import PiniaTest from '@/components/PiniaTest.vue'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import { defineAsyncComponent } from 'vue'
import PostDetail from '../components/PostDetail.vue'
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import PostLayout from '../layouts/PostLayout.vue'

const About = defineAsyncComponent(() => import('@/views/About.vue'))

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
  { path: '/from', component: From },
  { path: '/about', component: About },
  { path: '/piniaTest', component: PiniaTest },
  { path: '/product', component: Product },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },

  // { path: '/', name: 'Home', component: Home },
  {
    path: '/posts',
    component: PostLayout,
    children: [
      { path: '', name: 'PostList', component: PostList },
      { path: 'new', name: 'PostNew', component: PostForm },
      { path: ':id', name: 'PostDetail', component: PostDetail, props: true },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
