<template>
  <div id="app">
    <div class="wait">
      <ul>
        <li
          v-for="item in todoWait.content"
          :key="item.idx"
          @click="handClick(item, idx)"
        >
          <img :src="item.url" alt="" />
        </li>
      </ul>
    </div>
    <div class="carried">
      <ul>
        <li
          v-for="item in todoOver.content"
          :key="item.idx"
          @click="resetClick(item, idx)"
        >
          <img :src="item.url" alt="" />
        </li>
      </ul>
    </div>
    <div :class="['winPage', { open: isWin }]">
      <h1>闖關成功</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import axios from "axios";

// 初始化的拼圖
const todoWait = reactive({ content: [] });

// 移動過去的拼圖
const todoOver = reactive({ content: [] });

const winIdx = ref(0);
const isWin = ref(false);

watch(
  () => todoOver.content,
  (newArr) => {
    console.log(newArr);
      winIdx.value = 0;
    newArr.forEach((item, idx) => {
      if (item.idx == idx) {
        winIdx.value++;
      }
    });
  },
  { deep: true }
);

watch(winIdx, (newVal) => {
  if (newVal === 9) {
    isWin.value = true;
  }
});

const handClick = (item, idx) => {
  const index = todoWait.content.findIndex((el) => el.idx === item.idx);
  if (index !== -1) {
    todoOver.content.push(item);
    todoWait.content.splice(index, 1);
  }
};

const resetClick = (item, idx) => {
 const index = todoOver.content.findIndex((el) => el.idx === item.idx);
  if (index !== -1) {
    todoWait.content.push(item);
    todoOver.content.splice(index, 1);
    winIdx.value--;
    if (winIdx.value <= 0) {
      winIdx.value = 0;
    }
  }
};

onMounted(() => {
  axios
    .get("/api/puzzle.json")
    .then((res) => {
      todoWait.content = res.data;
    })
    .catch((err) => {
      console.log("API failed", err);
    });
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #233245;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "微軟正黑體";
}

#app {
  width: 1050px;
  overflow: hidden;
}
#app > div {
  background-size: 100% 100%;
}
#app > div > ul > li {
  cursor: pointer;
  display: block;
  width: 166px;
  height: 166px;
  border: 1px solid #fff;
  float: left;
}
#app > div > ul > li > img {
  display: block;
  width: 100%;
  height: 100%;
}
.wait {
  width: 500px;
  height: 500px;
  background-color: #fff;
  float: left;
}
.carried {
  width: 500px;
  height: 500px;
  background-color: #fff;
  float: right;
  background-image: url("../assets/Puzzle/bg2.jpg");
}
.winPage {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s;
}
.winPage.open {
  top: 0;
}

.winPage > h1 {
  color: #fff;
  font-size: 60px;
}
</style>
