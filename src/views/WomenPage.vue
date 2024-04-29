<script>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import WomenPageService from '@/modules/WomenPage/Services/WomenPageService';

export default {
  name: 'WomenPage',
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid
  },
  data() {
    return {
      service: new WomenPageService(),
      products: [],
      filterOptions: {
        sorting: 'default',
        itemCount: '12'
      }
    }
  },
  watch: {
    filterOptions(newValue, oldValue){
      this.fetchProducts();
    }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const products = await this.service.allProducts(this.filterOptions);
      this.products = products.data;
    }
  }
}
</script>

<template>
  <main>
    <ShopHeader title="Women's Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Women', path: 'women' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model:filterOptions="filterOptions"/>
      <ProductGrid :products="products" />
    </div>
  </main>
</template>
