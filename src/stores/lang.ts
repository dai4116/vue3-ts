import en from '@/locales/en.json'
import zh from '@/locales/zh.json'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const lang = ref<'zh' | 'en'>('zh')
  const messages = { zh, en }

  const t = computed(() => messages[lang.value])

  function setLang(l: 'zh' | 'en') {
    lang.value = l
  }

  function toggleLang() {
    lang.value = lang.value === 'zh' ? 'en' : 'zh'
  }

  return {
    lang,
    t,
    setLang,
    toggleLang
  }
})
