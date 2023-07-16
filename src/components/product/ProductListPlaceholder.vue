<template>
  <div
    class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:h-80"
  >
    <div
      v-for="index in [1, 2, 3, 4, 5, 6, 7, 8]"
      :key="index"
      class="rounded-lg lg:h-80 bg-gray-200"
    ></div>
  </div>
</template>
