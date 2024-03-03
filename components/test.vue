<script setup lang="ts">
const newTodo = ref();
const vFocus = (v: any) => v && v.focus();
const todos = ref([
  {
    id: 1,
    text: 'Learn HTML',
  },
  {
    id: 2,
    text: 'Learn JavaScript',
  },
  {
    id: 3,
    text: 'Learn Vue',
  },
]);
const addTodo = () => {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo.value,
  });
  newTodo.value = '';
};
// @ts-ignore
const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
};
</script>

<template>
  <h2>待办事项</h2>

  <form @submit.prevent="addTodo" class="flex">
    <input v-model="newTodo" placeholder="new todo" class="w-full" required />
    <button class="border-solid">addTodo</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">x</button>
    </li>
  </ul>
  <input :class="{ ['demo-demo']: true }" v-focus />
</template>
