<script setup lang="ts">
const props = defineProps({
  name:{
    type : String,
    required : true,
  },
  img:{
    type : String,
    required : true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center text-xs mt-2">
    <img :src="img" alt="daily" class="w-12 h-12 rounded-xl ring-offset-2 ring-2 ring-sky-600"/>
    <p class="text-sky-800 Estedad_FD_Light text-xs mt-3"> {{name}} </p>
  </div>
</template>

<style scoped>

</style>