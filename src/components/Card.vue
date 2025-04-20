<script setup lang="ts">
const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <div class="card">
    <!-- 標題 slot -->
    <div class="card-header">
      <slot name="header">
        <h3>預設標題</h3>
      </slot>
    </div>

    <!-- 內容 slot -->
    <div class="card-body">
      <slot />
    </div>

    <div class="card-footer">
      <slot name="footer">
        <button @click="emit('confirm')">確認</button>
        <button @click="emit('cancel')">取消</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.card-header {
  margin-bottom: 12px;
}
.card-body {
  margin-bottom: 12px;
}
.card-footer {
  text-align: right;
}
.card-footer button {
  margin-left: 8px;
}
</style>
