<template>
  <div class="container bg-gray-light dark:bg-black pt-[60px]">
    <ul class="flex flex-row flex-wrap items-center justify-center">
      <li
        @click="selectAllCategories"
        :class="`m-2 p-2 rounded-lg cursor-pointer text-xs ${selectedCategory === null ? 'selected bg-blue-500' : 'bg-gray-500'}`">
        Все
      </li>
      <li v-for="category in categories" :key="category.id" @click="selectCategory(category)" :class="`m-2 p-2 rounded-lg cursor-pointer text-xs ${category.id === selectedCategory?.id ? 'selected bg-blue-500' : 'bg-gray-500'}`">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useApiStore } from '../stores/ApiStore';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useApiStore();
const router = useRouter();

onMounted(() => {
  store.fetchCategories();
});

const selectCategory = (category) => {
  store.selectCategory(category);
  store.currentPage = 1; // сброс страницы при выборе категории
  router.push({ name: 'Projects', query: { category: category.id } });
};

const selectAllCategories = () => {
  store.selectedCategory = null;
  store.currentPage = 1; // сброс страницы при выборе всех категорий
  router.push({ name: 'Projects' });
  store.fetchPosts();
};

const categories = computed(() => store.categories);
const selectedCategory = computed(() => store.selectedCategory);
</script>

<style>
.selected {
  background-color: #4A6CF7;
  color: white;
}
</style>
