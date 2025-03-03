<template>
    <div class="fixed bottom-8 right-8 z-[99]">
      <div v-if="isVisible"
           @click="scrollToTop"
           aria-label="scroll to top"
           class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
        <span class="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const isVisible = ref(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            isVisible.value = true;
        } else {
            isVisible.value = false;
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', toggleVisibility);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', toggleVisibility);
    });
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
  