<template>
  <section class="form-section">
    <main class="main">
      <NavMenu />
      <form class="form" action="">
        <h2 class="form__title">Форма для проекта Vue</h2>
        <label class="form__label" for="input-title"
          >Заголовок
          <input
            id="input-title"
            class="form__input form__input-title"
            :placeholder="titlePlaceholder"
          />
        </label>
        <label class="form__label" for="input-text"
          >Описание
          <input
            id="input-text"
            class="form__input form__input-title"
            :placeholder="textPlaceholder"
          />
        </label>

        <button @:click="addNewTask" class="form__button" type="button">Добавить дело</button>
      </form>
      <TasksList :tasksList="tasksList" />
    </main>
  </section>
</template>

<script>
import TasksList from "./TasksList.vue";
import NavMenu from "./NavMenu.vue";

export default {
  data() {
    return {
      titlePlaceholder: "Введите заголовок",
      textPlaceholder: "Введите описание",
      tasksList: [
        {
          title: "Vue дело",
          description: "Тут описание очень важного Vue дела",
        },
        {
          title: "Второе Vue-дело",
          description: "Тут описание очень важного Vue дела",
        },
      ],
    };
  },
  methods: {
    addNewTask() {},
  },
  components: {
    NavMenu,
    TasksList,
  },
};
</script>

<style>
.form-section {
  padding: 30px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-block-size: 80vh;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  border: 3px solid;
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form__input {
  block-size: 30px;
  border-radius: 10px;
  border-style: 1px solid gray;
  outline: none;
}

.form__input:focus {
  border-style: 4px solid;
}

.form__button {
  block-size: 35px;
  border-radius: 10px;
}
</style>
