<script setup>
import { computed, toRefs } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import getProducts from '@/api/queries/get-products-by-category.gql'
import ProductListPlaceholder from '@/components/product/ProductListPlaceholder.vue'
import ProductItem from '@/components/product/ProductItem.vue'

const props = defineProps({
  categoryUid: {
    type: String,
    required: true
  }
})

const { categoryUid } = toRefs(props)
const { result, loading } = useQuery(getProducts, { uid: categoryUid })
const currentProducts = computed(() => result.value.products.items)
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <ProductListPlaceholder v-if="loading" />
      <div
        v-if="!loading"
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <ProductItem v-for="product in currentProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
