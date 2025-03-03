<template>
    <div class="relative overflow-hidden rounded-lg border text-dark dark:text-white text-xs sm:text-sm">
      <div class="w-full max-w-[600px] mx-auto max-h-[600px] overflow-auto" @scroll="handleScroll">
        <table class="border-collapse w-full table-fixed">
          <thead class="sticky top-0 bg-white dark:bg-gray-dark">
            <tr>
              <th v-for="header in headers" :key="header.key" 
                  class="border-b p-1 sm:p-2 text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  :class="getColumnWidth(header.key)"
                  @click="handleSort(header.key)">
                {{ header.label }}
                <span v-if="sortKey === header.key" class="ml-1">
                  {{ sortOrder === 'asc' ? '↑' : '↓' }}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="loading && !displayedPhotos.length">
              <tr v-for="i in 5" :key="i">
                <td v-for="header in headers" :key="header.key" class="border-b p-1 sm:p-2">
                  <div class="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="photo in displayedPhotos" :key="photo.id">
                <td class="border-b p-1 sm:p-2">
                  <div>
                    {{ photo.id }}
                  </div>
                </td>
                <td class="border-b p-1 sm:p-2">
                  <div>
                    {{ photo.albumId }}
                  </div>
                </td>
                <td class="border-b p-1 sm:p-2">
                  <div
                    class="truncate cursor-pointer"
                    :title="photo.title"
                  >
                    {{ photo.title.split(' ').slice(0, 2).join(' ') + '...' }}
                  </div>
                </td>
                <td class="border-b p-1 sm:p-2">
                  <div
                    class="truncate cursor-pointer"
                    :title="photo.url"
                  >
                    {{ photo.url.slice(0, 20) + '...' }}
                  </div>
                </td>
                <td class="border-b p-1 sm:p-2">
                  <div
                    class="truncate cursor-pointer"
                    :title="photo.thumbnailUrl"
                  >
                    <img :src="photo.thumbnailUrl" alt="img" />
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import { usePhotosStore, type Photo } from '../stores/Photos'
    import { storeToRefs } from 'pinia'
    const store = usePhotosStore()
    const { displayedPhotos, loading } = storeToRefs(store)
    
    const headers = [
      { key: 'id' as keyof Photo, label: 'Ид' },
      { key: 'albumId' as keyof Photo, label: 'Альбом' },
      { key: 'title' as keyof Photo, label: 'Название' },
      { key: 'url' as keyof Photo, label: 'Ссылка' },
      { key: 'thumbnailUrl' as keyof Photo, label: 'Миниатюра' },
    ] as const
    
    const sortKey = ref<keyof Photo | null>(null)
    const sortOrder = ref<'asc' | 'desc'>('asc')
    
    const handleSort = (key: keyof Photo) => {
      if (sortKey.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      } else {
        sortKey.value = key
        sortOrder.value = 'asc'
      }

      store.sortPhotos(key, sortOrder.value)
    }

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement
      const { scrollTop, scrollHeight, clientHeight } = target
      
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        store.loadMorePhotos()
      }
    }

    const getColumnWidth = (key: string) => {
      switch (key) {
        case 'id':
          return 'w-[10%]'
        case 'albumId':
          return 'w-[15%]'
        case 'title':
          return 'w-[30%]'
        case 'url':
          return 'w-[30%]'
        case 'thumbnailUrl':
          return 'w-[25%]'
        default:
          return ''
      }
    }
  </script> 