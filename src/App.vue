<template>
  <Header />
    <router-view />
  <Footer />
  <ScrollToTop />
</template>

<script setup>
  import { onMounted, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ScrollToTop from './components/ScrollToTop.vue';
  const router = useRouter();
  import { useThemeStore } from './stores/ThemeStore';

  const themeStore = useThemeStore();

  onMounted(() => {
    window.scrollTo(0, 0);
    themeStore.initTheme();
  });

  watch(router.currentRoute, () => {
    window.scrollTo(0, 0);
  });
</script>

<style>

</style>
