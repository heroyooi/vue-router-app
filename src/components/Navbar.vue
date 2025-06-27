<template>
  <nav class="navbar">
    <router-link to="/">홈</router-link>
    <router-link v-if="!store.isLoggedIn" to="/login">로그인</router-link>
    <button v-else @click="store.logout">로그아웃</button>
  </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const store = useUserStore()
</script>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;

.navbar {
  display: flex;
  gap: 12px;
  padding: 12px 24px;
  background-color: #f5f5f5;

  a, button {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    cursor: pointer;
  }

  button {
    background: none;
    border: none;
  }
}
</style>