<script setup>
// Initialize router for navigation
const router = useRouter();
const mobile = ref('');
const error = ref('');
const loading = ref(false);
// Function to navigate to the next step or route

const goToNext = () => {
  error.value = '';
  if(mobile.value.toString().trim()===''){
error.value = 'pls input your phon number'
  }
  else {
    loading.value = true;
   
    setTimeout(() => {
        router.push({ path: "/intro/otp" });
        loading.value = false;
    }, 2000); // 2000 milliseconds = 2 seconds
};
};

</script>

<template>
  <div class="w-screen h-screen flex flex-col items-start">
    <div class="text-white w-screen flex flex-row justify-center text-center absolute top-8 z-50">
      <div class="flex flex-col items-center justify-center text-black">
        <p class="FiraCode-SemiBold text-lg"> Login </p>
        <p class="FiraCode-Regular text-xs mt-2"> Get phone number</p>
      </div>
    </div>


    <div class="h-screen w-full flex flex-col justify-center items-center">

      <div class="w-full text-center mt-12 px-5">
        <p class="FiraCode-Regular text-xs"> Enter your phone number</p>

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

        <p class="text-red-500 text-xs FiraCode-Retina"> {{error}} </p>


        <div class="bg-green-500 my-5 py-3 px-10 w-full rounded-lg text-white Estedad_FD_Light" @click="goToNext">
          <span> Send Sode</span>
        </div>

        <nuxt-link to="/intro/privacy" class="FiraCode-Medium text-sm"> Policy and Conditions</nuxt-link>
      </div>

    </div>

    <div class="text-white w-screen flex flex-row justify-center text-center absolute bottom-5 z-50">
      <div class="flex flex-col items-center">
        <img src="/img/logo-green.png" alt="logo" class="w-16" />
        <p class="text-green-500 text-xs mt-2"> The world of stories</p>
      </div>
      <div class="flex flex-col items-center justify-center text-black mr-4">
        <p class="text-xs"> The world of stories</p>
        <p class=" text-xs mt-2"> Version: 1.0.2</p>
      </div>
    </div>


    <div class="absolute top-0 w-screen z-1">
      <img src="/img/bg-pattern.png" alt="pattern" class="w-full h-full mix-blend-multiply opacity-50 object-contain "/>
    </div>
  </div>
</template>

<style></style>
