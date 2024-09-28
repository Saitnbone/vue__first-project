<template>
  <li class="tasks-list__item">
    <h3 class="item-title">{{ title }}</h3>
    <div class="description-block">
      <p class="item-description">{{ description }}</p>
      <button class="delete-button">Удалить</button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style scoped>
.tasks-list__item {
}

.description-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.delete-button {
  border-radius: 10px;
  block-size: 30px;
}
</style>
