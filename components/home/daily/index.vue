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
  {img:"https://api.dicebear.com/8.x/personas/svg?seed=Whiskers",name:'Liam'},
  {img:"https://api.dicebear.com/8.x/avataaars/svg?seed=Garfield",name:'Lavla'},
  {img:"https://api.dicebear.com/8.x/big-ears/svg?seed=Luna",name:'Hans'},
  {img:"https://api.dicebear.com/8.x/big-ears/svg?seed=Bailey",name:'Sam'},
  {img:"https://api.dicebear.com/8.x/micah/svg?seed=Mimi",name:'Liam'},
  {img:"https://api.dicebear.com/8.x/croodles/svg?seed=Chloe",name:'Lavla'},
  {img:"https://api.dicebear.com/8.x/big-ears/svg?seed=Lola",name:'Hans'},
  {img:"https://api.dicebear.com/8.x/lorelei/svg?seed=Salem",name:'Sam'},
 
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


