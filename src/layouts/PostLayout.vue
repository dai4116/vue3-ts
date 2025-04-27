<template>
  <div>
    <h2>文章管理</h2>
    <router-link to="/posts">文章列表</router-link> |
    <router-link to="/posts/new">新增文章</router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>
