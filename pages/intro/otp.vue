<script setup>
// Retrieve current route information
const route = useRoute()

// Initialize router for navigation
const router = useRouter();

// Define reactive variables
const mobile = ref(route.query.mobile); // Mobile number from query params
const error = ref(''); // Stores error messages

// Log current route for debugging purposes
console.log('route :', route);

// Initialize OTP object
const otp = ref({
  num1: '',
  num2: '',
  num3: '',
  num4: '',
  num5: '',
});

// Function to navigate to the next page
const goToNext = () => {
  error.value = ''; // Reset error message

  // Check if the mobile number is empty and add objects
  if (
    otp.value.num1.toString().trim() === '' ||
    otp.value.num2.toString().trim() === '' ||
    otp.value.num3.toString().trim() === '' ||
    otp.value.num4.toString().trim() === '' ||
    otp.value.num5.toString().trim() === ''
  ) {
    error.value = 'Please input the code number'; // Set error message
  } else {
    // Navigate to the OTP page after a delay
    setTimeout(() => {
      router.push({ path: "/intro/register" });
    }, 200); // 2000 milliseconds = 2 seconds
  }
};

// Function to navigate back to the previous page
const goToBack = () => {
  router.push({ path: "/intro/login" }); // Navigate back to the login page
}
</script>



<template>
  
  <div class="w-screen h-screen flex flex-col items-start">
    <!-- Header section -->
    <div class="text-white w-screen flex flex-row justify-center text-center absolute top-8 z-50">
      <div class="flex flex-col items-center justify-center text-black">
        <!-- Title -->
        <p class="FiraCode-SemiBold text-lg">Login</p>
        <!-- Subtitle -->
        <p class="FiraCode-Regular text-xs mt-2">Mobile number validation</p>
      </div>
    </div>

    <!-- Content section -->
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="w-full text-center mt-12 px-5">
        <!-- Instruction -->
        <p class="FiraCode-Regular text-sm mt-3">
          <spam>You will enter with mobile number</spam>
          <spam class="FiraCode-Medium mx-3">{{mobile}}</spam>
          <spam> mobile number</spam>
          </p>

        <p  class="FiraCode-Regular text-sm mt-3">
          <spam>Enter the code sent</spam>
        </p>
        <p class="FiraCode-Regular text-sm mt-3">
          <spam>waiting time to receive SMS:</spam>
          <spam class="FiraCode-Medium mx-3">02:30</spam>
        </p>

        <!-- OTP input fields -->
        <div class="grid grid-cols-5 gap-5 mt-2 mb-5 px-6">
          <UInput
            color="gray"
            variant="outline"
            size="xl"
            v-model="otp.num1"/>
          <UInput
            color="gray"
            variant="outline"
            size="xl"
            v-model="otp.num2"/>
          <UInput
            color="gray"
            variant="outline"
            size="xl"
            v-model="otp.num3"/>
          <UInput
            color="gray"
            variant="outline"
            size="xl"
            v-model="otp.num4"/>
          <UInput
            color="gray"
            variant="outline"
            size="xl"
            v-model="otp.num5"/>
        </div>

        <!-- Error message -->
        <p class="text-red-500 text-xs FiraCode-Retina">{{error}}</p>

        <!-- Buttons -->
        <div class="bg-green-500 mt-5 my-5 py-3 px-10 w-full rounded-lg text-white Estedad_FD_Light" @click="goToNext">
          <span>Validation ID check</span>
        </div>
        <div class="bg-gray-100 mt-2 py-3 px-10 w-full rounded-lg text-green-500 Estedad_FD_Light" @click="goToBack">
          <span>Change your phon number</span>
        </div>

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
