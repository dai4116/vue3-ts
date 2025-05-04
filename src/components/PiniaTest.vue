<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

// 使用 store
const counter = useCounterStore()

function increase() {
  counter.increment()
}

function decrease() {
  counter.decrement()
}
</script>

<template>
  <main>
    <h1>Pinia 計數器</h1>
    <p>目前數字：{{ counter.count }}</p>
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
  </main>
</template>
