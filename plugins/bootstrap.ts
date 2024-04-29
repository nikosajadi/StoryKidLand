  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';

  export default defineNuxtPlugin(nuxtApp => {
// Doing something with nuxtApp
    nuxtApp.vueApp.component('Swiper',Swiper)
    nuxtApp.vueApp.component('swiper-slide',SwiperSlide)
})

  