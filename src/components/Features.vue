<template>
    <section id="features" class="py-16 md:py-20 lg:py-28 bg-white dark:bg-black">
        <div class="container">
            <div class="w-full mx-auto text-center" style="max-width: 570px; margin-bottom: 100px;">
                <h2 class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Технологии</h2>
                <p class="text-base !leading-relaxed text-body-color md:text-lg">Некоторые технологии, которые я использую или когда-либо использовал в своих проектах.</p>
            </div>
            <div class="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="feature in featuresData" :key="feature.id" class="w-full">
                    <div class="wow fadeInUp" data-wow-delay=".15s">
                        <div class="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                            <img width="40" height="41" :src="`${feature.icon}`" class="fill-current">
                        </div>
                        <h3 class="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">{{ feature.title }}</h3>
                        <p class="pr-[10px] text-base font-medium leading-relaxed text-body-color">{{ feature.paragraph }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import featuresData from "./featuresData";
</script>

<style>

</style>