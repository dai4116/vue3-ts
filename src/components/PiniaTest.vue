<script setup lang="ts">
import { useLangStore } from '@/stores/lang'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useLangStore()
const { t } = storeToRefs(store)

onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved === 'en' || saved === 'zh') {
    store.setLang(saved)
  }
})

</script>

<template>
  <div class="lang-toggle">
    <p>{{ t.text }}</p>
    <button @click="store.toggleLang">{{ t.switchLang }}</button>
  </div>
</template>


<style scoped>
.lang-toggle {
  padding: 1rem;
  border: 1px solid #ccc;
  max-width: 300px;
  margin: auto;
  text-align: center;
}
button {
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
}
</style>
