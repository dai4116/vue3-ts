<template>
  <div id="app">
    <div class="input-box">
      <p>E-MAIL</p>
      <input type="text" placeholder="輸入email" v-model="email" />
    </div>
    <div class="input-box">
      <p>PASSWORD</p>
      <input type="text" placeholder="輸入密碼" v-model="password" />
    </div>
    <div class="input-box">
      <input type="checkbox" id="checkbox" v-model="checkbox" />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>
    <a class="btn" @click="submitForm">送出</a>
  </div>

  <div>
    <ul>
      <li v-for="item in courseslist.tags" :key="item.tag">
        <input
          type="checkbox"
          :id="item.tag"
          :value="item.tag"
          v-model="courseslist.selectArr"
        />
        <label :for="item.tag">{{ item.tag }}</label>
      </li>
    </ul>
    <a class="btn" @click="handleSubmit">送出</a>
  </div>

  <div id="app">
    <div class="select-box">
      <select v-model="city">
        <option disabled value="">請選擇縣市</option>
        <option v-for="item in twZip.city" :key="item.name" :value="item.name">
          {{ item.name }}
        </option>
      </select>
      <select v-model="area">
        <option disabled value="">請選擇區域</option>
        <option v-for="item in twZip.area" :key="item.zip" :value="item.zip">
          {{ item.name }}
        </option>
      </select>
    </div>
    <a class="btn" @click="handSelect">送出</a>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const checkbox = ref(false);

const submitForm = async () => {
  console.log(email, password, checkbox);
};

const courseslist = reactive({
  selectArr: [],
  tags: [
    { tag: "JavaScript" },
    { tag: "Html" },
    { tag: "Css" },
    { tag: "Html5" },
    { tag: "Vuejs" },
    { tag: "React" },
    { tag: "Sass" },
    { tag: "Css3" },
    { tag: "Canvas" },
  ],
});

const handleSubmit = () => {
  console.log(courseslist.selectArr);
};

const twZip = reactive({ city: [], area: [] });
const city = ref("");
const area = ref("");

watch(city, (newVal) => {
  if (newVal) {
    const areaFilter = twZip.city.find((list) => list.name === newVal);
    area.value = "";
    twZip.area = areaFilter ? areaFilter.area : [];
  }
});

const handSelect = () => {
  console.log({ city: city.value, area: area.value });
};

onMounted(() => {
  axios
    .get("../../public/api/twzip.json")
    .then((res) => {
      twZip.city = res.data.twzip.city;
    })
    .catch((err) => {
      console.log("API 載入失敗", err);
    });
});
</script>

<style scoped>
p,
label {
  margin-bottom: 3px;
}
input[type="text"] {
  width: 180px;
  height: 24px;
  padding-left: 5px;
}
.input-box {
  margin-bottom: 20px;
}
</style>
