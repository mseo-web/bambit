<template>
    <section id="features" class="py-10 md:py-20 lg:py-28 bg-gray-light dark:bg-black">
        <div class="container">
            <div class="w-full mx-auto text-center" style="max-width: 570px; margin-bottom: 50px;">
                <h2 class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Изучаю технологии</h2>
                <p class="text-base !leading-relaxed text-body-color md:text-lg">Некоторые из технологий, которые я изучаю.</p>
            </div>
            <div class="p-4">
                <Swiper
                    :modules="modules"
                    :slides-per-view="3"
                    :space-between="50"
                    autoplay
                >
                    <SwiperSlide v-for="technology in technologiesData" :key="technology.id">
                        <div class='swiper-item-box'>
                            <img :src="`${technology.icon}`" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
    import technologiesData from "./technologiesData";
    import { Autoplay } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    const modules = [Autoplay];
</script>

<style>

</style>