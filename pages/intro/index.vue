<script setup>
// Initialize router for navigation
const router = useRouter();


// Function to navigate to the next step or route
const goToNext = () => {
  // Navigate to the "/intro" route
    router.push({ path: "/intro/login" });
  }

</script>

<template>
  <div class="w-screen h-screen flex flex-col items-start">
  <div class="h-screen w-full flex flex-col mb-10 justify-center items-center " >
<img src="/img/logo-green.png" alt="logo" class="w-32" >
<p class="FiraCode-SemiBold text-2xl text-green-500 pt-5">The world of Story</p>

<div class="w-2/3 text-center mt-12 ">
  <p class="FiraCode-SemiBold text-sm">Children's book social network</p>
  <p class="FiraCode-Light text-sm text-gray-500 mt-2"> Let's Make the sweet world more beautiful with stories</p>


</div>
  </div>

  
    <!-- Absolute positioned background image -->
    <div class="absolute w-screen top-0 z-1 self-center">
      <img
        src="/img/pattern.png"
        alt="pattern"
        class="w-full h-full mix-blend-multiply"
      />
    </div>
   
    <!-- Button for navigation to next step -->   
    <div @click="goToNext" class="FiraCode-Medium flex justify-center text-white w-screen text-center absolute bottom-10 z-50">
      <div class="bg-green-500 text-white px-10 py-3 mx-5 rounded-lg w-full  text-center tracking-tight">
        <span>Sign In the world of the story</span>
      </div>
    </div>
  </div>
</template>


<style>

</style>