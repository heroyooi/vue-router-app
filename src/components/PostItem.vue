<template>
  <RouterLink :to="`/posts/${post.id}`" class="post-item">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content.slice(0, 40) }}...</p>
  </RouterLink>
</template>

<script setup>
defineProps({ post: Object })
</script>

<style scoped lang="scss">
.post-item {
  display: block;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  color: inherit;
  text-decoration: none;

  h3 {
    margin-bottom: 8px;
  }

  p {
    color: #555;
  }

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>