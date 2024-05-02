<script setup lang="ts">
 import BgPattern from "~/components/home/bg-pattern.vue";
definePageMeta({ layout: 'main'})
</script>

<template>
    <div class="flex flex-col w-screen h-auto  overflow-x-hidden">
      <BgPattern/>
      <HomeHeader/>
      <HomeDaily/>
      <HomeVitrin/>
      <HomeVitrin/>
    </div>
  </template>
  
  <style scoped>
  
  </style>