<script setup>
// let fname = "Nasibeh";
// let lfamily = "Sajadi";


</script>

<template>
  <div>
    <NuxtPage/>
  <!-- <p @class="Header"> my name is {{ fname }}, {{ lfamily }}</p> -->
  </div>
</template>

<!--To start adding transition between my pages  -->
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>