<script setup>
// let fname = "Nasibeh";
// let lfamily = "Sajadi";


</script>

<template>
  <div>
    
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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