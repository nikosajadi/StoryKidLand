<script setup>


// Initialize router for navigation
const router = useRouter();
// Define reactive variables
const firstName = ref(''); // Stores the user's firstName
const lastName = ref(''); // Stores the user's lasName
const error = ref(''); // Stores error messages
const loading = ref(false); // Indicates if a loading state is active

// Function to navigate to the next step or route
const goToNext = () => {
  error.value = ''; // Reset error message
  // Check if the firstName is empty
  if (firstName.value.toString().trim() === '') {
    error.value = 'Please input FirstName'; // Set error message
    } else if (lastName.value.toString().trim()=== '') {
      error.value = 'Please input LastName'
  } else {
    loading.value = true;
    setTimeout(()=>{
      loading.value = false;
      router.push({ path: "/home" })
    },2000)
  }
}
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
        <p class="FiraCode-Regular text-xs mt-2">Complete your information</p>
      </div>
    </div>

    <!-- Content section -->
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <div class="w-full text-center mt-12 px-5">
     
        <p class="FiraCode-Regular text-xs">Input your FirstName</p>

        <!-- Input field -->
        <!-- Bind loading (atribute) state to the input -->
        <!-- if press entre key insted of press button go to next  -->
        <UInput
            class="mt-5 mb-5"
            color="gray"
            variant="outline"
            size="xl"
            icon="i-heroicons-user"
            :loading="loading" 
            v-model="firstName"
            @keyup.enter="goToNext"
        />



        <p class="FiraCode-Regular text-xs">Input your LastName</p>

        <!-- Input field -->
        <!-- Bind loading (atribute) state to the input -->
        <!-- if press entre key insted of press button go to next  -->
        <UInput
            class="mt-5 mb-5"
            color="gray"
            variant="outline"
            size="xl"
            icon="i-heroicons-user-group"
            :loading="loading" 
            v-model="lastName"
            @keyup.enter="goToNext"
        />

        <!-- Error message -->
        <p class="text-red-500 text-xs FiraCode-Retina">{{error}}</p>

        <!-- Button -->
        <div class="bg-green-500 my-5 py-3 px-10 w-full rounded-lg text-white Estedad_FD_Light" @click="goToNext">
          <span>Complete registration</span>
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
