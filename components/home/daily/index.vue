<script setup lang="ts">
import {EffectCoverflow} from 'swiper/modules';
const swiperModules = ref([EffectCoverflow])
const coverflowEffect = ref({
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
})

 const dailes = ref([
  {img:"https://avatar.iran.liara.run/public",name:'Liam'},
  {img:"https://avatar.iran.liara.run/public",name:'Lavla'},
  {img:"https://avatar.iran.liara.run/public",name:'Hans'},
  {img:"https://avatar.iran.liara.run/public",name:'Sam'},
  {img:"https://avatar.iran.liara.run/public",name:'Liam'},
  {img:"https://avatar.iran.liara.run/public",name:'Lavla'},
  {img:"https://avatar.iran.liara.run/public",name:'Hans'},
  {img:"https://avatar.iran.liara.run/public",name:'Sam'},
 
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


