<script setup lang="ts">
const router = useRouter();
// Use onMounted hook to perform an action after the component is mounted
onMounted(async () => { 
// Execute router navigation after a delay
setTimeout(() => {
  router.push({ path: "/starter" });
}, 2000); // Wait for 2000 milliseconds (2 seconds) before navigating
      
    });
</script>
<template>
    <div>
<div class="pageBG w-screen h-screen">
<div>
    <img src="/public/img/tree.png " alt="tree book" class="w-full h-1/3 mix-blend-multiply "
</div>
<div class="text-white absolute w-screen bottom-5 text-center  ">
    <p class="FiraCode-Medium text-sm">The World of story</p>
    <p class="text-sm">StoryLand.se</p>
    <P class="text-xs">V 1.0.2</P>
</div>
</div>
    </div>
</template>
<style>
.pageBG{
    background-color: #2BAF66;
}
</style>