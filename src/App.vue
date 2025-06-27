<template>
  <div class="app-container">
    <header>
      <h1>🌿 Vue SCSS Starter</h1>
    </header>

    <main>
      <p>기본 SCSS 스타일이 적용된 페이지입니다.</p>
      <button class="primary-btn">확인</button>
    </main>
  </div>
</template>

<script setup>
// 여기에 별도 로직 없음
</script>

<style scoped lang="scss">
.app-container {
  padding: 24px;

  header {
    @include flex-center;
    margin-bottom: 24px;
    h1 {
      color: $primary-color;
    }
  }

  main {
    text-align: center;
    p {
      margin-bottom: 12px;
      color: $gray-color;
    }

    .primary-btn {
      @include button-style;
    }
  }
}
</style>
