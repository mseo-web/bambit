<template>
    <section class="relative z-10 overflow-hidden pt-28 lg:pt-[150px] bg-white  dark:bg-gray-dark">
        <div class="container">
            <div class="-mx-4 flex flex-wrap items-center">
                <div class="w-full px-4 md:w-8/12 lg:w-7/12">
                    <div class="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                        <h1 class="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">Личные данные</h1>
                        <p class="text-base font-medium leading-relaxed text-body-color">Подлинное счастье может дать только обучение. И новое, пусть и не большое, расширение границ познания мира.</p>
                    </div>
                </div>
                <div class="w-full px-4 md:w-4/12 lg:w-5/12">
                    <div class="text-end">
                        <ul class="flex items-center md:justify-end">
                            <li class="flex items-center"><router-link class="pr-1 text-base font-medium text-body-color hover:text-primary" to="/">Главная</router-link><span class="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span></li>
                            <li class="text-base font-medium text-primary">Личные данные</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span class="absolute left-0 top-0 z-[-1]">
                <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111:578)"></path>
                    <defs>
                        <linearGradient id="paint0_linear_111:578" x1="-40.5" y1="117" x2="301.926" y2="-97.1485" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4A6CF7"></stop>
                            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </span>
            <span class="absolute right-0 top-0 z-[-1]">
                <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z" fill="url(#paint0_linear_0:1)"></path>
                    <path opacity="0.1" d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z" fill="url(#paint1_linear_0:1)"></path>
                    <defs>
                        <linearGradient id="paint0_linear_0:1" x1="644" y1="221" x2="429.946" y2="37.0429" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4A6CF7"></stop>
                            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_0:1" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4A6CF7"></stop>
                            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        </div>
    </section>

    <section id="about" class="pt-16 md:pt-20 lg:pt-28 bg-white dark:bg-gray-dark">
        <div class="container">
            <div class="md:pb-20 lg:pb-28">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4 lg:w-1/2">
                        <div class="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
                            <!-- <img alt="about image" loading="lazy" decoding="async" data-nimg="fill" class="drop-shadow-three dark:hidden dark:drop-shadow-none" src="/images/SM2.png" style="position: absolute; height: 100%; width: auto; inset: 0px; color: transparent;"> -->
                            <img alt="about image" loading="lazy" decoding="async" data-nimg="fill" class="drop-shadow-three  dark:drop-shadow-none" src="/images/SM2.png" style="position: absolute; height: 100%; width: 100%;; inset: 0px; color: transparent; object-fit: contain;">
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2">
                        <div class="w-full " style="max-width: 570px; margin-bottom: 44px;">
                            <h2 class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Skills</h2>
                            <p class="text-base !leading-relaxed text-body-color md:text-lg">ПРОСТО ДЕЛАЙ ТО, ЧТО ЛЮБИШЬ ДЕЛАТЬ!</p>
                        </div>
                        <div class="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                            <div class="mx-[-12px] flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        HTML/CSS (90%)
                                    </p>
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        Laravel (80%)
                                    </p>
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        React (50%)
                                    </p>
                                </div>
                                <div class="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        Vue (50%)
                                    </p>
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        Angular (50%)
                                    </p>
                                    <p class="mb-5 flex items-center text-lg font-medium text-body-color">
                                        <span class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                            <svg width="16" height="13" viewBox="0 0 16 13" class="fill-current">
                                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                            </svg>
                                        </span>
                                        WordPress (50%)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Technologies />

</template>

<script setup>
    import Technologies from '../components/Technologies.vue';
</script>

<style>

</style>