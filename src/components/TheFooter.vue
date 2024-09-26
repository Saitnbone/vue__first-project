<!-- Шаблон для разметки компонента -->
<template>
  <footer class="footer">
    <div><span>Привет</span></div>
    <div><span>как твои</span></div>
    <div><span>дела!</span></div>
  </footer>
</template>

<!-- Скрипты для компонента -->
<script>
export default {};
</script>

<!-- Стили для компонента -->
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  block-size: 15vh;
  padding: 30px;
}
</style>
