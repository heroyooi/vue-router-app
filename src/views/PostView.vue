<template>
  <div v-if="post" class="post-detail">
    <h2>{{ post.title }}</h2>
    <p class="meta">
      👤 {{ post.author }} | 📅 {{ post.date }} | 💬 {{ post.comments }}개 댓글
    </p>
    <p>{{ post.content }}</p>
    <router-link to="/">← 목록으로</router-link>
  </div>

  <div v-else class="error-box">
    <h2>❌ 게시글을 찾을 수 없습니다.</h2>
    <p>존재하지 않는 게시글 ID입니다.</p>
    <router-link to="/">🏠 홈으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostStore } from '@/stores/posts'

const route = useRoute()
const store = usePostStore()
const post = store.getPostById(route.params.id)
</script>

<style scoped>
.post-detail {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}

.meta {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.error-box {
  padding: 30px;
  text-align: center;
  color: #d00;
}
</style>