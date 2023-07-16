<script setup>
import { Menu } from '@headlessui/vue'
import { useCategories } from '@/composables/categories-list.composable'

const { mainCategories } = useCategories()
</script>
<template>
  <Menu as="nav">
    <router-link
      v-for="category in mainCategories"
      :key="category.uid"
      class="inline-flex justify-center rounded-md bg-black bg-opacity-10 px-2 mx-1 py-2 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      :to="{ name: 'category', params: { category: category.url_key } }"
    >
      {{ category.name }}
    </router-link>
  </Menu>
</template>
