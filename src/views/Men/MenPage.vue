<script>
import ShopHeader from '@/components/Shop/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/Product/ProductGrid.vue';
import PagingFooter from '@/components/PagingFooter.vue';
import MenPageService from '@/modules/MenPage/Services/MenPageService.js';

export default {
  name: 'MenPage',
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid,
    PagingFooter
  },
  data() {
    return {
      service: new MenPageService(),
      products: [],
      filterOptions: {
        sorting: 'default',
        itemCount: '12'
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
      const response = url ? await this.service.fetchPaginatedData(url) : await this.service.allProducts(this.filterOptions);
      this.products = response.data;
      this.paginationLinks = response.links;
    },
  }
}
</script>

<template>
  <main>
    <ShopHeader :title="$t('mens_shop')" :links="[{ name: 'Home', path: '/' }, { name: 'Men', path: 'men' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model:filterOptions="filterOptions" />
      <ProductGrid :products="products" />
      <PagingFooter :links="paginationLinks" @change-page="fetchProducts" />
    </div>
  </main>
</template>
