<script setup>
import { Menu } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {useCategories} from "@/composables/categories/categories-list.composable";

const { mainCategories } = useCategories();

</script>
<template>
  <Menu as="nav">
    <router-link
      v-for="category in mainCategories"
      :key="category.uid"
      class="inline-flex justify-center rounded-md bg-black bg-opacity-10 px-2 mx-1 py-2 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      @click="handleNavButtonClick" :to="{ name: 'category', params: { name: category.url_path }}"
    >
      {{ category.name }}
      <ChevronDownIcon
        v-if="category.children_count !== '0'"
        class="ml-2 -mr-1 h-5 w-5 text-gray-800 hover:text-violet-100"
        aria-hidden="true"
      />
    </router-link>
  </Menu>
</template>
