<template>
    <!-- <div class="flex justify-center mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 mx-1 bg-gray-700 text-gray-200 rounded hover:bg-gray-600"
      >
        Previous
      </button>
      <span class="px-4 py-2 mx-1">{{ currentPage }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 mx-1 bg-gray-700 text-gray-200 rounded hover:bg-gray-600"
      >
        Next
      </button>
    </div> -->

    <div class="-mx-4 flex flex-wrap" data-wow-delay=".15s">
        <div class="w-full px-4">
            <ul class="flex items-center justify-center pt-8">
                <li class="mx-1">
                  <button @click="prevPage" :disabled="currentPage === 1" class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">Prev</button>
                </li>
                <li class="mx-1">
                  <div class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">{{ currentPage }} / {{ totalPages }}</div>
                </li>

                <!-- <li class="mx-1"><a href="#0" class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">2</a></li>
                <li class="mx-1"><a href="#0" class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">3</a></li>
                <li class="mx-1"><span class="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">...</span></li>
                <li class="mx-1"><a href="#0" class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">12</a></li> -->

                <li class="mx-1">
                  <button @click="nextPage" :disabled="currentPage === totalPages" class="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">Next</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  });
  
  const emits = defineEmits(['page-changed']);
  
  const prevPage = () => {
    if (props.currentPage > 1) {
      emits('page-changed', props.currentPage - 1);
    }
  };
  
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
      emits('page-changed', props.currentPage + 1);
    }
  };
</script>
  