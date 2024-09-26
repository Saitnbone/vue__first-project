<!-- Шаблон header -->
<template>
  <header class="header">
    <h2 class="logo">Vue project</h2>
    <span @:click="showModal" class="profile">{{ profile }}</span>
  </header>
</template>

<!-- Скрипт для header -->
<script>
export default {
  // Данные
  data() {
    return {
      profile: "Личный кабинет",
    };
  },

  // Методы
  methods: {
    showModal: {},
  },
  closeModal: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.logo {
  font-size: 32px;
  text-transform: uppercase;
}

.profile:hover {
  cursor: pointer;
}
</style>
