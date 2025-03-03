<template>
  <section class="pb-[120px] pt-[60px] bg-gray-light dark:bg-black">
      <div class="container">
          <div class="-mx-4 flex flex-wrap justify-center">
              <div class="w-full p-4 md:w-2/3 lg:w-1/2 xl:w-1/3 cursor-pointer" v-for="post in posts" :key="post.id" @click="selectPost(post)">
                  <div class="pt-6 group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                      <a class="relative block aspect-[37/22] w-full">
                        <img alt="image" loading="lazy" decoding="async" sizes="100vw" :src="`${post.thumbnail.guid}`" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent; object-fit: contain;">
                      </a>
                      <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                          <h3><div class="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl border-b border-body-color border-opacity-10">{{ post.title.rendered }}</div></h3>
                          <div class="flex items-center">
                              <div class="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                                  <div class="mr-4">
                                      <div class="relative h-10 w-10 overflow-hidden">
                                        <img alt="author" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src="/images/SM-logo1.png" style="position: absolute; height: auto; width: 100%; inset: 0px; color: transparent;" class="dark:hidden">
                                        <img alt="author" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src="/images/SM-logo2.png" style="position: absolute; height: auto; width: 100%; inset: 0px; color: transparent;" class="hidden dark:block">
                                      </div>
                                  </div>
                                  <div class="w-full">
                                      <h4 class="mb-1 text-sm font-medium text-dark dark:text-white">Sergey Mikhailov</h4>
                                      <p class="text-xs text-body-color">Developer</p>
                                  </div>
                              </div>
                              <div class="inline-block">
                                  <h4 class="mb-1 text-sm font-medium text-dark dark:text-white">Period</h4>
                                  <p class="text-xs text-body-color">{{post.period}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <Pagination :totalPages="totalPages" :currentPage="currentPage" @page-changed="changePage" />

      </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useApiStore } from '../stores/ApiStore';
import { onMounted, computed, watch } from 'vue';
import Pagination from '../components/Pagination.vue';

const store = useApiStore();
const route = useRoute();
const router = useRouter();

const fetchPosts = async () => {
  const categoryId = route.query && route.query.category ? Number(route.query.category) : null;
  if (categoryId && !isNaN(categoryId)) {
    store.selectedCategory = store.categories.find(category => category.id === categoryId) || null;
    store.currentPage = 1;
    await store.fetchPostsByCategory(categoryId);
  } else {
    store.selectedCategory = null;
    await store.fetchPosts();
  }
};

onMounted(fetchPosts);

watch(() => route.query.category, fetchPosts);

const selectPost = (post) => {
  store.selectPost(post);
  router.push(`/project/${post.id}`);
};

const changePage = (page) => {
  store.setCurrentPage(page);
  window.scrollTo(0, 0);
};

const posts = computed(() => store.posts);
const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => Math.ceil(store.totalPosts / store.postsPerPage));
</script>
