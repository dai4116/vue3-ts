<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const { todos } = storeToRefs(store)

const newTodo = ref('')

function add() {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}

function toggle(id: number) {
  store.toggleDone(id)
}

function remove(id: number) {
  store.removeTodo(id)
}
</script>

<template>
  <div class="todo-container">
    <h1>Todo 清單</h1>
    <div class="input-group">
      <input v-model="newTodo" @keyup.enter="add" placeholder="輸入新任務" />
      <button @click="add">新增</button>
    </div>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input type="checkbox" :checked="todo.done" @change="toggle(todo.id)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button class="delete" @click="remove(todo.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.done {
  text-decoration: line-through;
  color: #888;
}
.delete {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
