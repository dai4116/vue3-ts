<script setup lang="ts">
import { ref } from 'vue'
import UserCard from '@/components/UserCard.vue'
import Card from '@/components/Card.vue'
import '@/assets/styles/main.css'
  
const users = ref([
  { id: 1, name: 'Daisy', role: 'Admin', isVip: true },
  { id: 2, name: 'Mimi', role: 'Member', isVip: false },
])

const toggleRole = (id: number) => {
  const user = users.value.find(u => u.id === id)
  if (user) {
    user.role = user.role === 'Admin' ? 'Member' : 'Admin'
  }
}

const onConfirm = () => {
  alert('確認！')
}

const onCancel = () => {
  alert('取消！')
}
</script>

<template>
   <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/product">產品</router-link>
    </nav>

    <router-view />

  <div class="container">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :role="user.role"
      :isVip="user.isVip"
      @toggle-role="toggleRole(user.id)"
    />
  </div>

  <Card @confirm="onConfirm" @cancel="onCancel">
    <template #header>
      <h2>操作卡片</h2>
    </template>

    <p>點擊下方按鈕來觸發父層事件</p>
  </Card>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}
nav {
  padding: 10px;
}
router-link {
  margin-right: 8px;
}
</style>
