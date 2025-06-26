<template>
  <div>
    <h2>📰 게시글 상세</h2>
    <p><strong>게시글 ID:</strong> {{ postId }}</p>
    <p><strong>작성자:</strong> {{ writer }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// 라우트 객체 가져오기
const route = useRoute()

// 파라미터 추출
const postId = route.params.id
const writer = route.query.writer || '익명'
</script>
