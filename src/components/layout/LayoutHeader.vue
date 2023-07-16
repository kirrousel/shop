<script setup>

import LayoutMenu from "@/components/layout/LayoutMenu.vue";
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
import {Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>

<template>
  <Disclosure as="nav" class="bg-gray-200" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <router-link :to="{ name: 'home' }" class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/logo.png" alt="Tiny Shop" />
            <p class="pl-3 text-cyan-700"> Tiny shop</p>
          </router-link>
          <div class="hidden sm:ml-6 sm:flex grow justify-center">
            <LayoutMenu />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200">
            <ArrowRightOnRectangleIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-900" aria-hidden="true" />
              Login
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.layout-header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-background-mute);
}

.layout-header__list {
  display: flex;
  margin: 0 -8px;
}

.layout-header__logo {
  width: 70px;
  height: 70px;
}

.layout-header__box {
  padding: 0 8px;
}

.layout-header__box--logo {
  display: flex;
  align-items: center;
}

.layout-header__box--menu {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-header__text {
  font-size: 24px;
  font-weight: bold;
}
</style>
