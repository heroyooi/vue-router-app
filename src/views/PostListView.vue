<template>
  <div class="post-list">
    <h2>📚 게시글 목록</h2>
    <p>총 {{ store.postCount }}개의 글이 있습니다.</p>

    <ul>
      <PostItem v-for="post in store.posts" :key="post.id" :post="post" />
    </ul>

    <RouterLink to="/posts/new">
      <button>➕ 새 글 쓰기</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post'
import PostItem from '@/components/PostItem.vue'

const store = usePostStore()
</script>

<style scoped lang="scss">
@use '@/styles/mixins.scss' as *;

.post-list {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 24px 0;
  }

  button {
    @include button-style;
  }
}
</style>