<script setup>
import { ref, watchEffect } from 'vue';
import { AiOutlineShopping, AiOutlineClose, AiOutlineSearch } from "vue3-icons/ai";
import { HiOutlineMenu } from "vue3-icons/hi";
import { GoPerson } from "vue3-icons/go";
import { FaRegHeart } from "vue3-icons/fa";
import { IoLanguage } from "vue3-icons/io5";

const cartOpen = ref(false);
const searchOpen = ref(false);
let searchQuery = ref('');

//Specifically didn't use toggle since you could spam the button and
//it would open and close the cart multiple times (don't want that)
const openCart = () => {
  cartOpen.value = true;
};

const closeCart = () => {
  cartOpen.value = false;
};

const openSearch = () => {
  searchOpen.value = true;
};

const closeSearch = () => {
  searchOpen.value = false;
};

const links = [
  { name: 'Home', path: '/' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Children', path: '/children' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contacts', path: '/contact' },
];

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
              <li v-for="link in links" :key="link.path">
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
  <transition name="fade">
    <div v-show="cartOpen || searchOpen" class="fixed inset-0 bg-black opacity-70 z-40" @click="closeCart; closeSearch;"></div>
  </transition>
  <transition name="slide">
    <div v-show="cartOpen" class="fixed top-0 h-full w-full overflow-auto z-50 lg:hidden">
      <nav class="fixed top-0 h-full w-80 bg-white overflow-auto p-8 font-bold uppercase">
        <RouterLink to="/" class="block mb-6"><img src="../assets/logo.svg" class="w-36 mx-auto" alt="Trendloom Logo">
        </RouterLink>
        <form action="#" class="relative mb-4">
          <div class="w-full overflow-hidden text-black flex items-center border border-solid border-gray-300">
            <div class="w-full relative flex items-center">
              <input type="text" class="w-full h-auto min-h-10 pl-4 pr-6 leading-8 outline-none text-start"
                placeholder="Search for products..." autocomplete="off">
            </div>
            <div class="flex items-center">
              <button class="inline-flex items-center justify-center whitespace-nowrap h-10 p-0 min-w-10" type="submit"
                title="Search">
                <AiOutlineSearch size="22" />
              </button>
            </div>
          </div>
        </form>
        <div class="flex flex-col space-y-8">
          <h2 class="text-center py-2 border-b-2 border-solid border-black">Menu</h2>
          <ul class="flex flex-col space-y-4">
            <li v-for="link in links" :key="link.path">
              <RouterLink :to="link.path" active-class="active-route">{{ link.name }}</RouterLink>
            </li>
          </ul>
          <ul class="uppercase flex flex-col space-y-4">
            <li>
              <RouterLink to="/account" class="flex items-center">
                <GoPerson size="1.125rem" class="mr-2" />
                Account
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/wishlist" class="flex items-center">
                <FaRegHeart size="1.125rem" class="mr-2" />
                Wishlist
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/language" class="flex items-center">
                <IoLanguage size="1.125rem" class="mr-2" />
                English
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <AiOutlineClose v-show="cartOpen"
        class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-3 top-3" @click="closeCart" />
    </div>
  </transition>
  <transition name="slide-down">
    <div v-show="searchOpen" class="hidden fixed top-0 bg-white w-full py-6 overflow-auto z-50 text-center lg:block">
      <h3 class="mb-4 font-bold text-2xl capitalize">What Are You Looking For?</h3>
      <form action="#" class="inline-block w-[40rem] relative mb-4">
        <div class="w-full overflow-hidden text-black flex items-center border border-solid border-gray-300">
          <div class="w-full relative flex items-center">
            <input v-model="searchQuery" type="text" class="w-full h-auto min-h-10 pl-4 pr-6 leading-8 outline-none text-start"
              placeholder="Search for products..." autocomplete="off">
          </div>
          <div class="flex items-center">
            <button class="inline-flex items-center justify-center whitespace-nowrap h-10 p-0 min-w-10" type="submit"
              title="Search">
              <AiOutlineSearch size="22" />
            </button>
          </div>
        </div>
      </form>
      <div class="flex justify-center items-center space-x-4">
        <h4 class="text-lg uppercase text-gray-500 text-[0.875rem]">Popular Searches: </h4>
        <ul class="flex justify-center space-x-2 text-[0.925rem]">
          <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all" @click="searchQuery = 'Jeans'">Jeans</li>
          <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all" @click="searchQuery = 'T-shirts'">T-shirts</li>
          <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all" @click="searchQuery = 'Shoes'">Shoes</li>
        </ul>
      </div>
      <AiOutlineClose v-show="searchOpen" class="h-6 w-6 cursor-pointer z-50 absolute right-3 top-3"
        @click="closeSearch" />
    </div>
  </transition>
</template>
<style scoped>
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}

.slide-enter-from {
  @apply -translate-x-full;
}

.slide-enter-active {
  @apply transition-transform duration-300 ease-in-out;
}

.slide-enter-to {
  @apply translate-x-0;
}

.slide-leave-from {
  @apply translate-x-0;
}

.slide-leave-active {
  @apply transition-transform duration-300 ease-in-out;
}

.slide-leave-to {
  @apply -translate-x-full;
}

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
