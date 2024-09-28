<!-- Шаблон для компонента -->
<template>
  <section class="tasks-list-section">
    <div class="content">
      <h2>Список Vue-дел</h2>
      <ul class="tasks-list">
        <TaskItem
          v-for="task in tasksList"
          :key="task.id"
          :title="task.title"
          :description="task.description"
        />
      </ul>
    </div>
  </section>
</template>

<!-- Скрипт для компонента -->
<script>
// Импорты
import TaskItem from "./TaskItem.vue";

export default {
  data() {
    return {};
  },
  components: {
    TaskItem,
  },
  props: {
    tasksList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.tasks-list-section {
  padding: 30px;
}

.content {
  inline-size: 800px;
}
.tasks-list {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  border: 3px solid;
}
</style>
