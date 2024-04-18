<script setup>
// Initialize router for navigation
const router = useRouter();

// Function to navigate to the next step or route
const goToNext = () => {
  // Navigate to the "/intro" route
  // router.push({ path: "/intro/login" });
};
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-start">
    <!-- start -->
    <div
      class="flex flex-row justify-center w-screen text-center items-center absolute top-10"
    >
      <div class="flex flex-col items-center justify-center">
        <p class="FiraCode-SemiBold text-xm text-black">Sign In</p>
        <p class="FiraCode-Medium text-xs text-gray-400 mt-2">
          Get your phone number
        </p>
      </div>
    </div>

    <div
      class="h-screen w-full flex flex-col mb-10 justify-center items-center"
    >
      <p class="FiraCode-Medium text-xs text-gray-400 mt-2">
        Enter your phone number
      </p>
      <div>
        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>

      <div class="w-2/3 text-center mt-12">
      <NuxtLink to="/intro/privacy" class="FiraCode-Medium text-xs text-gray-400 mt-2" >
          Terms and Conditions
    </NuxtLink>
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
