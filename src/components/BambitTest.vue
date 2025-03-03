<script setup lang="ts">
import { onMounted } from 'vue'
import { usePhotosStore } from '../stores/Photos'
import SearchBar from './SearchBar.vue'
import PhotosTable from './PhotosTable.vue'

const store = usePhotosStore()

onMounted(() => {
  store.fetchPhotos()
})
</script>

<template>
  <section id="" class="py-16 md:py-20 lg:py-28 bg-white dark:bg-black">
      <div class="container">
          <div class="w-full mx-auto text-center" style="max-width: 570px; margin-bottom: 50px;">
              <h2 class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Фотографии</h2>
              <p class="text-base !leading-relaxed text-body-color md:text-lg">Тестовое задание для фронтенд-разработчика</p>
          </div>
          
          <div class="flex flex-col justify-items-center items-center">
              <SearchBar />
              <PhotosTable />
          </div>

      </div>
  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
