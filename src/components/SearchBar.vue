<template>
    <div class="w-full max-w-[600px] flex gap-4 p-4">
      <div class="w-80 flex-1">
        <input
          type="text"
          v-model="albumIds"
          placeholder="Введите ID альбомов через пробел (например: 1 2 3)"
          class="w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-light dark:bg-black"
        />
      </div>
      <button
        @click="handleSearch"
        class="w-20 flex-none rounded-sm bg-primary px-3 py-2 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        :disabled="loading"
      >
        <template v-if="loading">
          <span class="inline-block animate-spin">↻</span>
        </template>
        <template v-else>
          Поиск
        </template>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import { usePhotosStore } from '../stores/Photos'
    import { storeToRefs } from 'pinia'
    
    const store = usePhotosStore()
    const { loading } = storeToRefs(store)
    const albumIds = ref('')
    
    const handleSearch = async () => {
      store.setSelectedAlbumIds(albumIds.value)
      await store.fetchPhotos(store.selectedAlbumIds)
    }
  </script> 