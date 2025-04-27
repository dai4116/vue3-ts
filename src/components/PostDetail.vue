<template>
  <div>
    <h3>文章內容</h3>
    <div v-if="loading">載入中...</div>
    <div v-else-if="post">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
      <button @click="back">返回列表</button>
    </div>
    <div v-else>找不到文章</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Post {
  id: number
  title: string
  body: string
}

const route = useRoute()
const router = useRouter()

const post = ref<Post>()
const loading = ref(true)

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error()
    post.value = await res.json()
  } catch {
    post.value = undefined
  } finally {
    loading.value = false
  }
})

function back() {
  router.push('/posts')
}
</script>
