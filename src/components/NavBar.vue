<script setup>
import { ref, watchEffect } from 'vue';
import { AiOutlineShopping, AiOutlineSearch } from "vue3-icons/ai";
import { HiOutlineMenu } from "vue3-icons/hi";
import { GoPerson } from "vue3-icons/go";
import { FaRegHeart } from "vue3-icons/fa";
import { IoLanguage } from "vue3-icons/io5";
import DarkOverlay from "@/components/DarkOverlay.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import SearchModal from "@/components/SearchModal.vue";

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Children', path: '/children' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contacts', path: '/contact' },
];

const cartOpen = ref(false);
const searchOpen = ref(false);
let searchQuery = ref('');

const openCart = () => cartOpen.value = true;
const closeCart = () => cartOpen.value = false;
const openSearch = () => searchOpen.value = true;
const closeSearch = () => searchOpen.value = false;

watchEffect(() => {
  if (cartOpen.value || searchOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

</script>

<template>
  <header class="bg-white sticky top-0 z-10">
    <div class="w-full max-w-screen-xl py-4 px-4 mx-auto">
      <nav class="flex items-center justify-between">
        <HiOutlineMenu size="28" class="cursor-pointer lg:hidden" @click="openCart" />
        <div class="lg:flex space-x-6">
          <img src="../assets/logo.svg" class="w-36" alt="Trendloom Logo">
          <nav>
            <ul class="hidden lg:flex space-x-4 uppercase text-md font-bold">
              <li v-for="link in LINKS" :key="link.path">
                <RouterLink :to="link.path" class="hover:active-route transition-all duration-150"
                  active-class="active-route">{{ link.name }}</RouterLink>
              </li>
            </ul>
          </nav>
          <AiOutlineSearch class="hidden cursor-pointer lg:block" size="22" @click="openSearch" />
        </div>
        <div class="flex items-center">
          <div class="hidden lg:flex space-x-3">
            <GoPerson size="1.25rem" />
            <FaRegHeart size="1.25rem" />
            <IoLanguage size="1.25rem" />
          </div>
          <div class="flex items-center lg:border-l-[1px] lg:border-gray-400 lg:border-solid lg:pl-4 lg:ml-4">
            <div class="relative inline-flex mr-2">
              <AiOutlineShopping size="28" />
              <span
                class="bg-black text-white text-[0.70rem] w-4 h-4 leading-6 rounded-full inline-flex items-center justify-center font-bold absolute left-[20px]">0</span>
            </div>
            <p class="hidden lg:block ml-2 text-[0.875rem] font-bold">CART €0.00</p>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <DarkOverlay :show="cartOpen || searchOpen" @close="closeCart; closeSearch" />
  <MobileMenu :show="cartOpen" :links="LINKS" @close="closeCart" />
  <SearchModal v-model="searchQuery" :show="searchOpen" @close="closeSearch" />
</template>
<style scoped>
.slide-down-enter-from {
  @apply -translate-y-full;
}

.slide-down-enter-active {
  @apply transition-transform duration-300 ease-in-out;
}

.slide-down-enter-to {
  @apply translate-y-0;
}

.slide-down-leave-from {
  @apply translate-y-0;
}

.slide-down-leave-active {
  @apply transition-transform duration-300 ease-in-out;
}

.slide-down-leave-to {
  @apply -translate-y-full;
}
</style>
