<template>
    <footer class="relative z-10 pt-16 bg-white dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div class="container">
          <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
                  <div class="mb-12 max-w-[360px] lg:mb-16">
                    <a class="mb-8 inline-block" href="/">
                        <img alt="logo" loading="lazy" width="140" height="30" decoding="async" data-nimg="1" class="w-36  dark:hidden" style="color: transparent;" src="/images/SM-logo1.png">
                        <img alt="logo" loading="lazy" width="140" height="30" decoding="async" data-nimg="1" class="hidden w-36 dark:block" style="color: transparent;" src="/images/SM-logo2.png">
                    </a>
                      <p class="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">Разработка программного обеспечения</p>

                      <div class="flex items-center">
                            <a href="https://github.com/mseo-web" aria-label="social-link" target="_blank" rel="noopener noreferrer" class="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path>
                                </svg>
                            </a>
                            
                            <a href="https://www.instagram.com/smartexweb/" aria-label="social-link" target="_blank" rel="noopener noreferrer" class="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" fill="currentColor"></path>
                                </svg>
                            </a>
                            
                            <a href="https://t.me/smartexweb" aria-label="social-link" target="_blank" rel="noopener noreferrer" class="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" fill="currentColor"></path>
                                </svg>
                            </a>

                        </div>
                  </div>
              </div>
              <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                  <div class="mb-12 lg:mb-16">
                      <h2 class="mb-10 text-xl font-bold text-black dark:text-white">Меню</h2>
                      <ul>
                          <li><router-link class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" to="/projects">Проекты</router-link></li>
                          <li><router-link class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" to="/contact">Контакты</router-link></li>
                          <li><router-link class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" to="/resume">Резюме</router-link></li>
                      </ul>
                  </div>
              </div>
              <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                  <div class="mb-12 lg:mb-16">
                      <h2 class="mb-10 text-xl font-bold text-black dark:text-white">Другие сайты</h2>
                      <ul>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="https://react.smartexweb.kz/" target="_blank">React</a></li>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="https://vue.smartexweb.kz/" target="_blank">Vue</a></li>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="https://angular.smartexweb.kz/" target="_blank">Angular</a></li>
                      </ul>
                  </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                  <div class="mb-12 lg:mb-16">
                      <h2 class="mb-10 text-xl font-bold text-black dark:text-white">SMARTEXWEB</h2>
                      <ul>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="/"><strong>Address: </strong> Республика Казахстан</a></li>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="/"><strong>Phone: </strong> +77088210530</a></li>
                          <li><a class="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary" href="/"><strong>Email: </strong> mihas-ox7-74@mail.ru</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div class="py-8">
              <p class="text-center text-base text-body-color dark:text-white">Template by
                  <!-- --> <a href="http://uideck.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary">UIdeck</a> <!-- -->and
                  <!-- --> <a href="https://nextjstemplates.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary">Next.js Templates</a></p>
          </div>
      </div>
      <div class="absolute right-0 top-14 z-[-1]"><svg width="55" height="99" viewBox="0 0 55 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1"></circle>
              <mask id="mask0_94:899" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="99">
                  <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7"></circle>
              </mask>
              <g mask="url(#mask0_94:899)">
                  <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="url(#paint0_radial_94:899)"></circle>
                  <g opacity="0.8" filter="url(#filter0_f_94:899)">
                      <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white"></circle>
                  </g>
              </g>
              <defs>
                  <filter id="filter0_f_94:899" x="12.4852" y="-15.1763" width="82.7646" height="82.7646" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_94:899"></feGaussianBlur>
                  </filter>
                  <radialGradient id="paint0_radial_94:899" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)">
                      <stop stop-opacity="0.47"></stop>
                      <stop offset="1" stop-opacity="0"></stop>
                  </radialGradient>
              </defs>
          </svg></div>
      <div class="absolute bottom-24 left-0 z-[-1]"><svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect>
              <rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" stroke-width="0.7"></rect>
              <path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path>
              <path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" stroke-width="0.7"></path>
              <path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path>
              <path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" stroke-width="0.7"></path>
              <defs>
                  <linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop>
                  </linearGradient>
                  <linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop>
                  </linearGradient>
              </defs>
          </svg></div>
  </footer>
</template>

<script setup>

</script>

<style>

</style>
  