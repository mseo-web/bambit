import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)

  function toggleTheme() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('light', !isDark.value)
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  function initTheme() {
    document.documentElement.classList.toggle('light', !isDark.value)
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}, 
// {
//   persist: true
// }
) 