<script>
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
import LanguageModal from "./LanguageModal.vue"

export default {
  name: 'NavBar',
  components: {
    AiOutlineSearch,
    HiOutlineMenu,
    GoPerson,
    FaRegHeart,
    IoLanguage,
    DarkOverlay,
    MobileMenu,
    CartMenu,
    SearchModal,
    CartSummary,
    LanguageModal
  },
  emits: ['openMenu', 'closeMenu', 'openSearch', 'closeSearch', 'openCart', 'closeCart', 'openLanguageModal', 'closeLanguageModal', 'productAddedToCart', 'updateCart'],
  data() {
    return {
      LINKS: [
        { name: 'Home', path: '/' },
        { name: 'Men', path: '/men' },
        { name: 'Women', path: '/women' },
        { name: 'Kids', path: '/kids' },
        { name: 'Brands', path: '/brands' },
        { name: 'About us', path: '/about-us' },
        { name: 'Contact', path: '/contact' },
      ],
      menuOpen: false,
      searchOpen: false,
      cartOpen: false,
      languageModalOpen: false,
      searchQuery: '',
      cartItemCount: 0,
      cartTotalPrice: 0.00
    }
  },
  methods: {
    openMenu() { this.menuOpen = true; },
    closeMenu() { this.menuOpen = false; },
    openSearch() { this.searchOpen = true; },
    closeSearch() { this.searchOpen = false; },
    openCart() { this.cartOpen = true; },
    closeCart() { this.cartOpen = false; },
    openLanguageModal() { this.languageModalOpen = true; },
    closeLanguageModal() { this.languageModalOpen = false; },
    updateCart({ itemCount, totalPrice }) {
      this.cartItemCount = itemCount;
      this.cartTotalPrice = totalPrice;
    },
    productAddedToCart() {
      this.$refs.cartMenu.productAddedToCart();
    },
    handleSubmit(searchQuery) {
      this.$router.push({ name: 'shop', query: { search: searchQuery } });
    }
  },
  computed: {
    isAnyModalOpen() {
      return this.menuOpen || this.searchOpen || this.cartOpen || this.languageModalOpen;
    },
  },
  watch: {
    isAnyModalOpen(newVal) {
      if (newVal) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
  }
}
</script>

<template>
  <header class="bg-white sticky top-0 z-10">
    <div class="w-full max-w-screen-xl py-4 px-4 mx-auto">
      <nav class="flex items-center justify-between" aria-label="Main navigation">
        <HiOutlineMenu size="28" class="cursor-pointer lg:hidden" @click="openMenu" />
        <div class="lg:flex space-x-6">
          <RouterLink to="/"><img src="../../assets/logo-black.svg" class="w-36" alt="Trendloom Logo" v-once>
          </RouterLink>
          <nav aria-label="User navigation">
            <ul class="hidden lg:flex space-x-4 uppercase text-md font-bold">
              <li v-for="link in LINKS" :key="link.path">
                <RouterLink :to="link.path" class="hover:active-route transition-all duration-150"
                  active-class="active-route">{{ $t(link.name.toLowerCase().replace(' ', '_')) }}</RouterLink>
              </li>
            </ul>
          </nav>
          <AiOutlineSearch class="hidden cursor-pointer lg:block" size="22" @click="openSearch" />
        </div>
        <div class="flex items-center">
          <div class="hidden lg:flex space-x-3">
            <RouterLink to="/login">
              <GoPerson size="1.25rem" class="cursor-pointer" />
            </RouterLink>
            <FaRegHeart size="1.25rem" class="cursor-pointer" />
            <IoLanguage size="1.25rem" @click="openLanguageModal" class="cursor-pointer" />
          </div>
          <CartSummary :cartItemCount="cartItemCount" :cartTotalPrice="cartTotalPrice" @click="openCart" />
        </div>
      </nav>
    </div>
  </header>
  <DarkOverlay :show="menuOpen || searchOpen || cartOpen || languageModalOpen"
    @close="closeMenu; closeSearch; closeCart; closeLanguageModal" />
  <MobileMenu :show="menuOpen" v-model="searchQuery" @submit="handleSubmit" :links="LINKS" @close="closeMenu"
    @openLanguageModal="openLanguageModal" />
  <SearchModal :show="searchOpen" v-model="searchQuery" @close="closeSearch" @submit="handleSubmit" />
  <CartMenu :show="cartOpen" @close="closeCart" @updateCart="updateCart" ref="cartMenu" />
  <LanguageModal :show="languageModalOpen" @close="closeLanguageModal" />
</template>
