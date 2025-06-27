import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostView from '@/views/PostView.vue'
import LoginView from '@/views/LoginView.vue' // ✅ 추가

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/post/:id', component: PostView },
  { path: '/login', component: LoginView }, // ✅ 로그인 경로
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
