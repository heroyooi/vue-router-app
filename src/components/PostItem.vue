<template>
  <li class="post-item">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
  </li>
</template>

<script setup>
defineProps({
  post: Object
})
</script>

<style scoped lang="scss">
.post-item {
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;

  h3 {
    margin-bottom: 8px;
  }

  p {
    color: #555;
  }
}
</style>