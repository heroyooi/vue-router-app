<template>
  <div class="login-container">
    <h2>로그인 또는 회원가입</h2>
    <input v-model="input" placeholder="이름을 입력하세요" />
    <button @click="login">시작하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const input = ref('')
const store = useUserStore()
const router = useRouter()

function login() {
  if (input.value.trim()) {
    store.setUsername(input.value.trim())
    router.push('/')
  }
}
</script>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;

.login-container {
  max-width: 400px;
  margin: 60px auto;
  text-align: center;

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: $border-radius;
    margin-bottom: 12px;
  }

  button {
    @include button-style;
    width: 80%;
  }
}
</style>

