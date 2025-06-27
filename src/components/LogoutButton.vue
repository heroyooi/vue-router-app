<template>
  <button v-if="store.username" @click="handleLogout">
    로그아웃
  </button>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

function handleLogout() {
  store.logout()
  router.push('/') // 홈으로 이동
}
</script>

<style scoped>
button {
  background: #eee;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #ddd;
}
</style>