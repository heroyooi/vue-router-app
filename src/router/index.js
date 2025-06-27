import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import PostListView from '@/views/PostListView.vue'
import PostCreateView from '@/views/PostCreateView.vue'
import PostDetailView from '@/views/PostDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView }, // ✅ 로그인 경로
  { path: '/posts', component: PostListView },
  { path: '/posts/new', component: PostCreateView },
  { path: '/posts/:id', component: PostDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
