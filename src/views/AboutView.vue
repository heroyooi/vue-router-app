<template>
  <div>
    <h2>소개 페이지</h2>
    <p><strong>{{ store.username }}</strong>님을 소개합니다.</p>
    <LogoutButton /> <!-- ✅ 로그아웃 버튼 추가 -->
    <router-link to="/">← 홈으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import LogoutButton from '@/components/LogoutButton.vue'

const router = useRouter()
const store = useUserStore()

onMounted(() => {
  if (!store.username) {
    alert('이름이 없습니다. 홈으로 이동합니다.')
    router.push('/')
  }
})
</script>