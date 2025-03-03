<template>
    <section class="relative z-10 overflow-hidden pt-28 lg:pt-[150px] bg-white dark:bg-gray-dark">
        <div class="container">
            <div class="-mx-4 flex flex-wrap items-center">
                <div class="w-full px-4 md:w-8/12 lg:w-7/12">
                    <div class="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                        <h1 class="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">Резюме</h1>
                        <!-- <p class="text-base font-medium leading-relaxed text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.</p> -->
                    </div>
                </div>
                <div class="w-full px-4 md:w-4/12 lg:w-5/12">
                    <div class="text-end">
                        <ul class="flex items-center md:justify-end">
                            <li class="flex items-center"><router-link class="pr-1 text-base font-medium text-body-color hover:text-primary" to="/">Главная</router-link><span class="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span></li>
                            <li class="text-base font-medium text-primary">Резюме</li>
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

    <section class="bg-white dark:bg-gray-dark">
        <div class="container mx-auto py-8">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 p-2">
                    <!-- Колонка 1 -->
                    <div class="bg-gray-light dark:bg-black rounded-lg p-4 text-dark dark:text-white">
                        <div>
                            <div class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
                                <h3 class="text-xl font-medium">Образование</h3>
                            </div>
                            <ul class="relative space-y-6 pl-6">
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        2004 - 2009
                                    </h4>
                                    <h5 class="mb-2 font-bold">
                                        Высшее. Финансы. Финансовый менеджмент.
                                    </h5>
                                    <div class="py-2 italic">
                                        Павлодарский государственный университет им.С.Торайгырова
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        Павлодарский индустриальный институт (ПИИ) был образован Постановлением Совета Министров СССР от 20 сентября 1960 года № 1009. В 1992 году ПИИ преобразован в Казахский государственный технический университет. В 1994 году вуз был преобразован в Павлодарский государственный университет, а в 1996 году Постановлением Кабинета Министров Республики Казахстан был переименован в Павлодарский государственный университет имени С. Торайгырова.
                                    </p>
                                </li>
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        1981 - 1991
                                    </h4>
                                    <h5 class="mb-2 font-bold">
                                        Математическая школа
                                    </h5>
                                    <div class="py-2 italic">
                                        Общеобразовательная школа №3, созданная в 1957 году и преобразованная в 1997 году в гимназию, в итоге длительного пути своего развития в 2005 году получила статус гимназии для одаренных детей.
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        Закончил физико-математическую школу в Советском Союзе, чему несказанно рад. Участвовал в олимпиадах по физике и математике.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 p-2">
                    <!-- Колонка 2 -->
                    <div class="bg-gray-light dark:bg-black rounded-lg p-4 text-dark dark:text-white">
                        <div>
                            <div class="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
                                <h3 class="text-xl font-medium">Программирование</h3>
                            </div>
                            <ul class="relative space-y-6 pl-6">
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        Апрель 2023 - по настоящее время
                                    </h4>
                                    <h5 class="mb-2 font-bold">
                                        FULL STACK РАЗРАБОТЧИК
                                    </h5>
                                    <div class="py-2 italic">
                                        Небольшие проекты, самообразование, Павлодар
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        Занимался самообразованием (C#, Python, React, Vue, Go и другое). UMI CMS - начальные знания.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Познакомился с интеграцией amoCRM (начальные знания).
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Познакомился с платформой lsFusion (начальные знания).
                                    </p>
                                </li>
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        2021 - 2023
                                    </h4>
                                    <h5 class="mb-2 font-bold">FULL STACK РАЗРАБОТЧИК</h5>
                                    <div class="py-2 italic">
                                        Компания "ТОО Склад информационных технологий", Павлодар
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        В этой компании мы разработали большой портал - "ПОРТАЛ ПРОХОЖДЕНИЯ ВЕДОМСТВЕННОЙ ЭКСПЕРТИЗЫ" департамента государственного учета отдела ведомственной экспертизы. Это web-приложение на фреймворе Laravel, в котором реализован самый разнообразный функционал, который возможен для цифровизации документооборота.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        В этом приложении реализованы: создание PDF-документов, выгрузка данных в EXCEL, электронно-цифровые подписи, сложная схема документооборота и многое другое.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Инструкция для клиентов - https://www.youtube.com/watch?v=FQ2R48FJicg
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        http://uso-saraptama.kad.org.kz
                                    </p>
                                </li>
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        2019 - 2021
                                    </h4>
                                    <h5 class="mb-2 font-bold">
                                        FULL STACK РАЗРАБОТЧИК
                                    </h5>
                                    <div class="py-2 italic">
                                        Небольшие проекты в разных компаниях, Павлодар
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        Разработал несколько сайтов на cms WordPress.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Разработал админ-панель на фреймворке Vue Js. Компания предоставила готовый API.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Участвовал в небольших проектах как frontend-разработчик.
                                    </p>
                                </li>
                                <li class="relative">
                                    <h4 class="text-sm font-semibold text-primary dark:text-primary">
                                        2017 - 2019
                                    </h4>
                                    <h5 class="mb-2 font-bold">
                                        FULL STACK РАЗРАБОТЧИК
                                    </h5>
                                    <div class="py-2 italic">
                                        ТОО «Компания ФИНИСТ», Павлодар
                                    </div>
                                    <p class="py-1 text-sm/relaxed">
                                        В этой компании я проработал два года на должности инженер-программист.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Изучил все основы работы серверной и клиентской части приложений.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        Участвовал в поддержке 60+ сайтов государственных компаний. Участвовал в разработке больших web-приложений на php-фреймворке Kohana, в разработке мобильного приложения на javascript (Apache Cordova). И многое другое.
                                    </p>
                                    <p class="py-1 text-sm/relaxed">
                                        В этой компании я научился всем главным основополагающим концепциям, необходимым для разработки сайтов, мобильных приложений и десктопных приложений.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>
  
<script setup>
  
</script>

<style>

</style>