<script setup>

const router = useRouter();

const goToBack = () => {
    router.back()};
    
</script>


<template>
  <!-- Main container -->
  <div class="w-screen h-screen flex flex-col items-start">
    <!-- Header section -->
    <div class="text-white w-screen flex flex-row justify-center text-center absolute top-8 z-50">
      <div class="flex flex-col items-center justify-center text-black">
        <!-- Title -->
        <p class="FiraCode-SemiBold text-lg">Terms and Conditions</p>
        <!-- Subtitle -->
        <p class="FiraCode-SemiBold text-gray-400 text-xs mt-2">Review and Acceptance of Story World Terms</p>
      </div>
    </div>

    <!-- Content section -->
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="w-full text-center px-5">
     <p class="FiraCode-Regular text-xs justify-center leading-8 text-left">
        <spam class="FiraCode-SemiBold">The Story World </spam>
   <spam>The Story World application has been created for the collection and dissemination of children's stories and tales from around the world in the virtual space, in Persian language.

    Your access to and use of the application is subject to compliance with the following terms, requirements, and stated laws. By entering the application and browsing the stories, you unconditionally accept and acknowledge the "Terms and Conditions" without any restriction or condition, and agree that any other agreement between you and</spam>
   
   <spam>application in this regard will be null and void. If you do not agree to the "Terms and Conditions," you must immediately cease using this application</spam>
   <spam></spam>
     </p>
        
        <!-- Button -->
        <div class="bg-green-500 my-5 py-3 px-10 w-full rounded-lg text-white Estedad_FD_Light" @click="goToBack">
          <span>I accept the terms and conditions</span>
        </div>

        <!-- Link to privacy policy -->
       
      </div>
    </div>

    <!-- Footer section -->
    <div class="text-white w-screen flex flex-row justify-center text-center absolute bottom-5 z-50">
      <div class="flex flex-col items-center">
        <!-- Logo -->
        <img src="/img/logo-green.png" alt="logo" class="w-16" />
        <!-- Subtitle -->
        <p class="text-green-500 text-xs mt-2">The Story World </p>
      </div>
      <div class="flex flex-col items-center justify-center text-black mr-4">
        <!-- Additional info -->
        <p class="text-xs">The Story World </p>
        <p class="text-xs mt-2">Version: 1.0.2</p>
      </div>
    </div>

    <!-- Background pattern -->
    <div class="absolute top-0 w-screen z-1">
      <img src="/img/bg-pattern.png" alt="pattern" class="w-full h-full mix-blend-multiply opacity-50 object-contain"/>
    </div>
  </div>
</template>

<style></style>
