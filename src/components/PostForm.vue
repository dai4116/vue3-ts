<template>
  <div>
    <h3>新增文章</h3>
    <form @submit.prevent="submit">
      <div>
        <input v-model="title" placeholder="標題" required />
      </div>
      <div>
        <textarea v-model="body" placeholder="內容" required />
      </div>
      <button type="submit">送出</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const body = ref('')
const router = useRouter()

function submit() {
  console.log({
    title: title.value,
    body: body.value
  })
  router.push('/posts')
}
</script>
