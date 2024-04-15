<script setup lang="ts">
const router = useRouter();
const hints = ref([
  `        
            <span>With</span>
            <span class="FiraCode-SemiBold mx-3">the world of stories</span>
            <span>, don't worry about new stories to tell</span>
            `,
  `            <span>With</span>
            <span class="FiraCode-SemiBold mx-3">the world of stories</span>
            <span >You can listen to the stories with the beautiful voice of other parents or you can read stories to others and share them yourself.</span>`,
]);

const step = ref(0);
const goToNext = () => {
  if (step.value != 1) step.value++;
  else {
    router.push({ path: "/intro" });
  }
};
</script>

<template>
  <div class="pageBG w-screen h-screen flex flex-col items-start">
    <div
      class="w-48 h-1/2 bg-white rounded-b-full flex justify-center self-center relative items-end"
    >
      <div class="text-sm absolute top-0 text-center mt-5">
        <p class="FiraCode-SemiBold">Children's social network</p>
        <p class="FiraCode-Light pt-4 leading-6 p-1">
          Enrich the sweet world of children with sweet stories
        </p>
      </div>
      <div class="bg-amber-400 w-40 h-40 rounded-full mb-5 flex justify-center">
        <img
          src="/img/books.png"
          alt="books"
          class="rounded-full rotate-45 object-contain"
        />
      </div>
    </div>
    <div class="absolute bottom-0 w-screen z-1 self-center">
      <img
        src="/img/pattern.png"
        alt="pattern"
        class="w-full h-full mix-blend-multiply rotate-180"
      />
    </div>

    <div
      v-html="hints[step]"
      class="FiraCode-Light text-white w-[400px] text-lg text-center self-center mt-20 z-50"
    ></div>

    <div
      @click="goToNext"
      class="FiraCode-Medium text-green-500 w-screen text-center absolute bottom-5 right-0 z-50"
    >
      <button class="bg-white px-10 py-2 w-1/2 rounded-lg">Continue</button>
    </div>
  </div>
</template>

<style>
.pageBG {
  background-color: #2baf66;
}
</style>
