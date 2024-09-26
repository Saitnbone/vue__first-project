<!-- Шаблон для компонента -->
<template>
  <section class="tasks-list-section">
    <div class="content">
      <h2>Список Vue-дел</h2>
      <ul class="tasks-list"></ul>
    </div>
  </section>
</template>

<!-- Скрипт для компонента -->
<script>
export default {};
</script>

<style scoped>
.tasks-list-section {
  padding: 30px;
}

.content {
  max-inline-size: 500px;
}
</style>
