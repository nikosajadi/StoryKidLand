<script setup>


// Initialize router for navigation
const router = useRouter();
// Define reactive variables
const mobile = ref(''); // Stores the user's mobile phone number
const error = ref(''); // Stores error messages
const loading = ref(false); // Indicates if a loading state is active

// Function to navigate to the next step or route
const goToNext = () => {
  error.value = ''; // Reset error message
  // Check if the mobile number is empty
  if (mobile.value.toString().trim() === '') {
    error.value = 'Please input your phone number'; // Set error message
    } else if (mobile.value.toString().trim().length !=11) {
      error.value = 'Please input correct phone number'
  } else {
    loading.value = true; // Set loading state to true
   
    // Simulate delay before navigating to the next route
    setTimeout(() => {
      router.push({ path: "/intro/otp" }); // Navigate to the OTP page
      loading.value = false; // Set loading state to false
    }, 2000); // 2000 milliseconds = 2 seconds
  }
};
</script>


<template>
  <!-- Main container -->
  <div class="w-screen h-screen flex flex-col items-start">
    <!-- Header section -->
    <div class="text-white w-screen flex flex-row justify-center text-center absolute top-8 z-50">
      <div class="flex flex-col items-center justify-center text-black">
        <!-- Title -->
        <p class="FiraCode-SemiBold text-lg">Login</p>
        <!-- Subtitle -->
        <p class="FiraCode-Regular text-xs mt-2">Get phone number</p>
      </div>
    </div>

    <!-- Content section -->
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="w-full text-center mt-12 px-5">
        <!-- Instruction -->
        <p class="FiraCode-Regular text-xs">Enter your phone number</p>

        <!-- Input field -->
        <!-- Bind loading (atribute) state to the input -->
        <!-- if press entre key insted of press button go to next  -->
        <UInput
            class="mt-5 mb-5"
            color="gray"
            variant="outline"
            size="xl"
            :loading="loading" 
            icon="i-heroicons-device-phone-mobile"
            v-model="mobile"
            @keyup.enter="goToNext"
        />

        <!-- Error message -->
        <p class="text-red-500 text-xs FiraCode-Retina">{{error}}</p>

        <!-- Button -->
        <div class="bg-green-500 my-5 py-3 px-10 w-full rounded-lg text-white Estedad_FD_Light" @click="goToNext">
          <span>Send Code</span>
        </div>

        <!-- Link to privacy policy -->
        <nuxt-link to="/intro/privacy" class="FiraCode-Medium text-sm">Policy and Conditions</nuxt-link>
      </div>
    </div>

    <!-- Footer section -->
    <div class="text-white w-screen flex flex-row justify-center text-center absolute bottom-5 z-50">
      <div class="flex flex-col items-center">
        <!-- Logo -->
        <img src="/img/logo-green.png" alt="logo" class="w-16" />
        <!-- Subtitle -->
        <p class="text-green-500 text-xs mt-2">The world of stories</p>
      </div>
      <div class="flex flex-col items-center justify-center text-black mr-4">
        <!-- Additional info -->
        <p class="text-xs">The world of stories</p>
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
