<template>
    <button
      @click="themeStore.toggleTheme()"
      class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <!-- Иконка солнца для светлой темы -->
      <!-- <svg
        v-if="themeStore.isDark"
        class="w-6 h-6 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
        />
      </svg> -->

      <svg
        v-if="themeStore.isDark"
        class="w-6 h-6 text-white-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="12" y1="1" x2="12" y2="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <!-- Иконка луны для темной темы -->
      <svg
        v-else
        class="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </template>
  
  <script setup>
  import { useThemeStore } from '../stores/ThemeStore'
  
  const themeStore = useThemeStore()
  </script> 