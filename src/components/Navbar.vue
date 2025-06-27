<template>
  <nav class="navbar">
    <RouterLink to="/">홈</RouterLink>
    <RouterLink to="/about">소개</RouterLink>
    <RouterLink to="/posts">게시글</RouterLink>

    <template v-if="!store.isLoggedIn">
      <RouterLink to="/login">로그인</RouterLink>
    </template>

    <template v-else>
      <RouterLink to="/posts/new">새 글 쓰기</RouterLink> <!-- ✅ 추가 -->
      <button @click="store.logout">로그아웃</button>
    </template>
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
  gap: 16px;
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
    padding: 0;
  }

  button:hover {
    text-decoration: underline;
  }
}
</style>