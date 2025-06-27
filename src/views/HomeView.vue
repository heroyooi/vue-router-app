<template>
  <div class="home">
    <h2>🏠 홈 화면</h2>

    <div v-if="store.isLoggedIn" class="welcome">
      <p><strong>{{ store.username }}</strong>님, 반갑습니다!</p>
    </div>

    <div v-else class="login-prompt">
      <p>로그인이 필요합니다.</p>
      <RouterLink to="/login">
        <button>로그인 하러 가기</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const store = useUserStore()
</script>

<style scoped lang="scss">
@use '@/styles/mixins.scss' as *;
@use '@/styles/variables.scss' as *;

.home {
  max-width: 600px;
  margin: 60px auto;
  text-align: center;

  h2 {
    margin-bottom: 24px;
    color: $primary-color;
  }

  .welcome, .login-prompt {
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: $border-radius;
    background-color: #f9f9f9;
  }

  button {
    margin-top: 16px;
    @include button-style;
  }
}
</style>
