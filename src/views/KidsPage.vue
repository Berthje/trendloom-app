<script>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import PagingFooter from '@/components/PagingFooter.vue';
import KidsPageService from '@/modules/KidsPage/Services/KidsPageService';

export default {
  name: 'KidsPage',
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid,
    PagingFooter
  },
  data() {
    return {
      service: new KidsPageService(),
      products: [],
      filterOptions: {
        sorting: 'default',
        itemCount: '1'
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
    <ShopHeader title="Kids Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Kids', path: 'kids' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model:filterOptions="filterOptions" />
      <ProductGrid :products="products" @change-page="fetchProducts" />
    </div>
  </main>
</template>
