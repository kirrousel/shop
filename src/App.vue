<script setup>
import {RouterView} from 'vue-router'
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
</script>

<template>
  <div class="layout">
    <LayoutHeader />
    <main class="layout__content">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.layout {

}
</style>
