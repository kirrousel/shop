<script setup>
import { computed } from 'vue'
import { useCategories } from '@/composables/categories-list.composable'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import ProductList from '@/components/product/ProductList.vue'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})
const { getCategoryInfoByPath } = useCategories()
const category = computed(() => getCategoryInfoByPath(props.category))
const subcategories = computed(() => category.value?.children)
</script>
<template>
  <div class="mx-auto max-w-7xl px-2 py-20 sm:px-6 lg:px-8">
    <div
      v-if="subcategories?.length"
      class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-3 lg:space-y-0"
    >
      <div v-for="subcategory in subcategories" :key="subcategory.name" class="group relative">
        <router-link
          class="rounded-lg border border-solid border-gray-400 flex justify-between items-center p-4 h-20 w-full overflow-hidden bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75"
          :to="{ name: 'subcategory', params: { subcategory: subcategory.url_key } }"
        >
          {{ subcategory.name }}
          <ArrowLongRightIcon class="h-8 w-8" />
        </router-link>
      </div>
    </div>
    <div class="py-20" v-if="category">
      <h1 class="text-3xl pb-3 font-bold tracking-tight text-left text-gray-900">
        {{ category?.name }}
      </h1>
      <ProductList :category-uid="category?.uid" />
    </div>
  </div>
</template>
