<template>
  <div>
    <h1>首頁</h1>
    <button @click="goToPosts">查看文章列表</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPosts() {
  router.push('/posts')
}
</script>
