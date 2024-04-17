<script setup>
// Initialize router for navigation
const router = useRouter();


// Function to navigate to the next step or route
const goToNext = () => {
  // Navigate to the "/intro" route
    router.push({ path: "/signin" });
  }

</script>

<template>
  <!-- Main container with dynamic classes and content -->
  <div class="w-screen h-screen flex flex-col items-start">
    <!-- Header section with child components -->
    <div class="w-48 h-1/2 bg-white rounded-b-full flex justify-center self-center relative items-end">
      <div class="text-sm absolute  text-center ">
        <p class="FiraCode-SemiBold">The World of story</p>
        <p class="FiraCode-Medium text-sm">Children's social network</p>
     
        <p class="FiraCode-Light bottom-5 leading-6 p-1">
          Enrich the sweet world of children with sweet stories
        </p>
      </div>
      <div class="bg-amber-400 w-40 h-40 rounded-full my-10 flex justify-center">
        <img
          src="/img/tree.png"
          alt="books"
          class="absolute rounded-full object-contain"
        />
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
    <div @click="goToNext" class="FiraCode-Medium flex justify-center text-white w-screen text-center absolute bottom-5 z-50">
      <div class="bg-green-500 text-white px-10 py-2 rounded-lg w-full  text-center">
        <span>Sign In the world of the story</span>
      </div>
    </div>
  </div>
</template>


<style>

</style>