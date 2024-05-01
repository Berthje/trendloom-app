<script>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import PagingFooter from '@/components/PagingFooter.vue';
import ShopPageService from '@/modules/ShopPage/Services/ShopPageService';

export default {
  name: 'ShopPage',
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid,
    PagingFooter
  },
  data() {
    return {
      service: new ShopPageService(),
      products: [],
      filterOptions: {
        sorting: 'default',
        itemCount: '8'
      },
      paginationLinks: []
    }
  },
  watch: {
    filterOptions(newValue, oldValue) {
      this.fetchProducts();
    }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts(url) {
      const response = url ? await this.service.fetchPaginatedProducts(url) : await this.service.allProducts(this.filterOptions);
      this.products = response.data;
      this.paginationLinks = response.links;
    },
  }
}
</script>

<template>
  <main>
    <ShopHeader title="All our products" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: 'shop' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model:filterOptions="filterOptions" />
      <ProductGrid :products="products" />
      <PagingFooter :links="paginationLinks" @change-page="fetchProducts" />
    </div>
  </main>
</template>
