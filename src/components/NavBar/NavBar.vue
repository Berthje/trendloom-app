<script setup>
import { ref, watchEffect } from 'vue';
import { AiOutlineSearch } from "vue3-icons/ai";
import { HiOutlineMenu } from "vue3-icons/hi";
import { GoPerson } from "vue3-icons/go";
import { FaRegHeart } from "vue3-icons/fa";
import { IoLanguage } from "vue3-icons/io5";
import DarkOverlay from "./DarkOverlay.vue";
import MobileMenu from "./MobileMenu.vue";
import CartMenu from "../CartMenu/CartMenu.vue";
import SearchModal from "./SearchModal.vue";
import CartSummary from "./CartSummary.vue";

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Children', path: '/children' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contacts', path: '/contact' },
];

const menuOpen = ref(false);
const searchOpen = ref(false);
const cartOpen = ref(false);
let searchQuery = ref('');
let cartItemCount = ref(0);
let cartTotal = ref(0.00);

const openMenu = () => menuOpen.value = true;
const closeMenu = () => menuOpen.value = false;
const openSearch = () => searchOpen.value = true;
const closeSearch = () => searchOpen.value = false;
const openCart = () => cartOpen.value = true;
const closeCart = () => cartOpen.value = false;

watchEffect(() => {
  if (menuOpen.value || searchOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

</script>

<template>
  <header class="bg-white sticky top-0 z-10">
    <div class="w-full max-w-screen-xl py-4 px-4 mx-auto">
      <nav class="flex items-center justify-between" aria-label="Main navigation">
        <HiOutlineMenu size="28" class="cursor-pointer lg:hidden" @click="openMenu" />
        <div class="lg:flex space-x-6">
          <RouterLink to="/"><img src="../../assets/logo-black.svg" class="w-36" alt="Trendloom Logo" v-once></RouterLink>
          <nav aria-label="User navigation">
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
            <RouterLink to="/login">
              <GoPerson size="1.25rem" />
            </RouterLink>
            <FaRegHeart size="1.25rem" />
            <IoLanguage size="1.25rem" />
          </div>
          <CartSummary :cartItemCount="cartItemCount" :cartTotal="cartTotal" @click="openCart"/>
        </div>
      </nav>
    </div>
  </header>
  <DarkOverlay :show="menuOpen || searchOpen || cartOpen" @close="closeMenu; closeSearch; closeCart" />
  <MobileMenu :show="menuOpen" :links="LINKS" @close="closeMenu" />
  <SearchModal v-model="searchQuery" :show="searchOpen" @close="closeSearch" />
  <CartMenu :show="cartOpen" @close="closeCart" />
</template>
