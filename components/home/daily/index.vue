<script setup>
  // import required modules
  import {EffectCoverflow} from 'swiper/modules'
 const swiperModules = ref([EffectCoverflow])
 const coverflowEffect = ref({
  rotate:50,
  stretch:0,
  depth:100,
  modifier:1,
  slideShadows: true,
 })

 const dailes = ref([
  {img:"/img/books/676-cover-for-site.jpg",name:'Liam'},
  {img:"/img/books/679-cover-for-site.jpg",name:'Lavla'},
  {img:"/img/books/880 -cover-for-site.jpg",name:'Hans'},
  {img:"/img/books/659-cover-for-site.jpg",name:'Sam'},
 
 ])

</script>

<template>
    <div class="flex flex-col w-screen h-auto py-5">
        <p class="pl-5">Dailies</p>

        <div class="flex flex-row my-5" v-if="dailes.length > 0">
          <swiper
              :slidesPerView="4.8"
              :spaceBetween="0"
              :coverflowEffect="coverflowEffect"
              :modules="swiperModules"
              :grabCursor="true"
              :dir="'rtl'"
              class="mySwiper"
          >
            <swiper-slide v-for="(cursor,index) in dailes" :key="index">
              <HomeDailyItem :name="cursor.name" :img="cursor.img"/>
            </swiper-slide>
      
          </swiper>
        </div>
      
      </div>
      </template>
<style>
 </style>


