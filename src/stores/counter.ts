import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TodoItem {
  id: number
  text: string
  done: boolean
}



export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([])
  let idCounter = 0

  function addTodo(text: string) {
    todos.value.push({ id: idCounter++, text, done: false })
  }

  function toggleDone(id: number) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  return {
    todos,
    addTodo,
    toggleDone,
    removeTodo
  }
})
