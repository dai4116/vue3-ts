<template>
  <div>
    <h3>文章列表</h3>
    <div v-if="loading">載入中...</div>
    <div v-else>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  id: number
  title: string
}

const posts = ref<Post[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    alert('載入失敗')
  } finally {
    loading.value = false
  }
})
</script>
