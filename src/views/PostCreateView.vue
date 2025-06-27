<template>
  <div class="post-create">
    <h2>✍️ 새 게시글 작성</h2>
    <input v-model="title" placeholder="제목을 입력하세요" />
    <textarea v-model="content" placeholder="내용을 입력하세요" />
    <button @click="savePost">작성 완료</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/stores/post'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const store = usePostStore()
const router = useRouter()

function savePost() {
  if (title.value.trim() && content.value.trim()) {
    store.addPost({
      id: Date.now(),
      title: title.value,
      content: content.value
    })
    router.push('/posts')
  }
}
</script>

<style scoped lang="scss">
@use '@/styles/mixins.scss' as *;

.post-create {
  max-width: 600px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  button {
    align-self: flex-end;
    @include button-style;
  }
}
</style>