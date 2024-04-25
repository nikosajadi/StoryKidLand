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
  <div class="pageBG w-screen h-screen flex flex-col items-start">
    <div
      class="h-screen w-full flex flex-col mb-10 justify-center items-center"
    >
      <img src="/img/logo.png" alt="logo" class="w-32" />
      <p class="FiraCode-SemiBold text-2xl text-white pt-10">The Story World</p>
    </div>

    <div class="text-white absolute w-screen bottom-5 text-center">
      <p class="FiraCode-Medium text-sm">The World of story</p>
      <p class="text-sm">StoryLand.se</p>
      <P class="text-xs">V 1.0.2</P>
    </div>
  </div>
</template>
<style>
.pageBG {
  background-color: #2baf66;
}
</style>
