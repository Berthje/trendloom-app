<script setup>
import { ref } from 'vue';
import { AiOutlineShopping, AiOutlineClose, AiOutlineSearch } from "vue3-icons/ai";
import { HiOutlineMenu } from "vue3-icons/hi";
import { GoPerson } from "vue3-icons/go";
import { FaRegHeart } from "vue3-icons/fa";
import { IoLanguage  } from "vue3-icons/io5";

const cartOpen = ref(false);

const toggleCart = () => {
    cartOpen.value = !cartOpen.value;
};
</script>

<template>
    <header class="bg-white w-full max-w-[1280px] py-4 px-4 mx-auto">
        <nav class="flex items-center justify-between">
            <HiOutlineMenu size="28" class="cursor-pointer lg:hidden" @click="toggleCart" />
            <div class="lg:flex space-x-6">
              <img src="../assets/logo.svg" class="w-36" alt="Trendloom Logo">
              <nav>
                <ul class="hidden lg:flex space-x-4 uppercase text-md font-bold">
                  <li class="active-route"><RouterLink to="/">Home</RouterLink></li>
                  <li><RouterLink to="#">Men</RouterLink></li>
                  <li><RouterLink to="#">Women</RouterLink></li>
                  <li><RouterLink to="#">Children</RouterLink></li>
                  <li><RouterLink to="#">About us</RouterLink></li>
                  <li><RouterLink to="#">Contacts</RouterLink></li>
                </ul>
              </nav>
              <AiOutlineSearch class="hidden lg:block" size="22" />
            </div>
            <div class="flex items-center">
              <div class="hidden lg:flex space-x-3">
                <GoPerson size="1.25rem"/>
                <FaRegHeart size="1.25rem"/>
                <IoLanguage  size="1.25rem"/>
              </div>
              <div class="flex items-center lg:border-l-[1px] border-gray-400 border-solid pl-4 ml-4">
                <div class="relative inline-flex mr-2">
                  <AiOutlineShopping size="28" />
                  <span
                      class="bg-black text-white text-[0.70rem] w-4 h-4 leading-6 rounded-full inline-flex items-center justify-center font-bold absolute left-[20px]">0</span>
                </div>
                <p class="hidden lg:block ml-2 text-[0.875rem] font-bold">CART €0.00</p>
              </div>
            </div>
        </nav>
    </header>
    <transition name="fade">
        <div v-show="cartOpen" class="fixed inset-0 bg-black opacity-70 z-40 lg:hidden" @click="toggleCart"></div>
    </transition>
    <transition name="slide">
        <div v-show="cartOpen" class="fixed top-0 h-full w-full overflow-auto z-50 lg:hidden">
            <nav class="fixed top-0 h-full w-80 bg-white overflow-auto">
            </nav>
            <AiOutlineClose class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-3 top-3" @click="toggleCart"/>
        </div>
    </transition>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-300 ease-in-out;
}
.fade-enter, .fade-leave-to {
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
</style>
