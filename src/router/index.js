import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/UserView.vue'
import PostView from '@/views/PostView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/user/:name', name: 'User', component: UserView },
  { path: '/post/:id', name: 'Post', component: PostView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
