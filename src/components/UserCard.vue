<script setup lang="ts">
const props = defineProps<{
  name: string
  role: string
  isVip: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-role'): void
}>()
</script>

<template>
  <div class="card" :class="{ vip: props.isVip }">
    <p class="name">{{ props.name }}</p>
    <p class="role">{{ props.role }}</p>
    <button @click="emit('toggle-role')">切換角色</button>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border-radius: var(--card-radius);
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card.vip {
  background-color: gold;
  color: #333;
  font-weight: bold;
}

.name {
  font-size: 20px;
  margin-bottom: 8px;
}

.role {
  font-size: 16px;
  margin-bottom: 8px;
}

button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #222;
}
</style>
