<script setup>
// Initialize router for navigation
const router = useRouter();
const mobile = ref('')
// Function to navigate to the next step or route
const goToNext = () => {
  // Navigate to the "/intro" route
  // router.push({ path: "/intro/login" });
};
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-start">
   <div class="flex flex-row justify-center w-screen text-center items-center absolute top-10">
     <!-- start -->

      <div class="flex flex-col items-center justify-center">
        <p class="FiraCode-SemiBold text-xm text-black">Sign In</p>
        <p class="FiraCode-Medium text-xs text-gray-400 mt-2">
          Get your phone number
        </p>
      </div>

    </div>

    <div class="h-screen w-full flex flex-col mb-10 justify-center items-center absolute ">
      <p class="FiraCode-Medium text-xs text-gray-400 mt-6 ">
        Enter your phone number
      </p>
    
   <UInput v-model="mobile" class="mt-3 mb-8 w-full px-6" color="gray" variant="outline" size="xl"placeholder="entre your number..." />

          <!-- Button for navigation to next step -->   
    <div @click="goToNext" class="FiraCode-Medium flex justify-center text-white w-screen text-center absolute  mt-10 z-50">
        <div class="bg-green-500 text-white  py-2 mx-5 rounded-lg w-full  text-center tracking-tight">
          <span>Send Code</span>
        </div>
      </div>



      
      <NuxtLink to="/intro/privacy" class="FiraCode-Medium text-xs text-gray-400  mt-20" > Terms and Conditions </NuxtLink>
</div>
    

    <!-- Absolute positioned background image -->
    <div class="absolute w-screen top-0 z-1 self-center">
      <img
        src="/img/pattern.png"
        alt="pattern"
        class="w-full h-full mix-blend-multiply"
      />
    </div>

    <div
      class="flex flex-row justify-center w-screen text-center items-center absolute bottom-10"
    >
      <div class="flex flex-col items-center">
        <img src="/img/logo-green.png" alt="logo" class="w-14" />
        <p class="FiraCode-Medium text-xs text-green-500 mt-1">Storyland</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="FiraCode-Medium text-xs text-black">The world of Story</p>
        <p class="FiraCode-Medium text-xs text-gray-400 mt-2">version 1.02</p>
      </div>
    </div>

    <!-- End -->
  </div>
</template>

<style></style>
