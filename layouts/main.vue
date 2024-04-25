<script setup>

</script>

<template>
     <div>
         <slot />
 <div class="navbar">
  <div class="item">
    <Icon name="solar:home-smile-angle-bold-duotone" color="green" size="26"/>
<span>Home</span></div>
  <div class="item">
    <Icon name="solar:book-2-bold-duotone" color="gray" size="26"/>
    <span>Mybooks</span></div>
  <div class="item">
    <Icon name="solar:notebook-square-bold-duotone" color="gray" sixe="28"/>
    <span>categories</span></div>
  <div class="item">
    <Icon name="solar:rounded-magnifer-bold-duotone" color="gray" sixe="26"/>
    <span>Search</span></div>
  <div class="item">
    <Icon name="solar:menu-dots-line-duotone" color="gray" sixe="26"/>
    <span>More</span></div>
 </div>
     </div>
 
</template>


<style scoped>
.navbar{
    @apply h-16 w-screen fixed bg-teal-50 grid grid-cols-5 bottom-0 text-gray-300 gap-2; 
    box-shadow: 0px -6px 15px 4px #c6f6d5;

    .item{
        @apply flex flex-col items-center justify-center ;

        span{
            @apply mt-1 text-xs;

        }
    }
    
}
</style>