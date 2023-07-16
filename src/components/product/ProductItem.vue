<script setup>
import { computed } from 'vue'
import { HeartIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const productPrice = computed(
  () => `$${props.product.price_range.minimum_price.regular_price.value}`
)
</script>
<template>
  <div class="rounded-lg p-2 border border-solid border-gray-200 group relative cursor-pointer">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 hover:opacity-50"
    >
      <img
        :src="props.product.image.url"
        :alt="props.product.name"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          {{ props.product.name }}
        </h3>
      </div>
      <p class="text-sm font-semibold text-gray-900">
        {{ productPrice }}
      </p>
    </div>
    <div class="flex justify-between mt-6 gap-x-2">
      <button class="w-full rounded-md bg-teal-500 text-white hover:bg-teal-700 py-2 px-4">
        Add to cart
      </button>
      <button class="border border-gray-500 p-2 rounded-md hover:opacity-50">
        <HeartIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>
