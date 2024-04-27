<script>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import MenPageService from '@/modules/MenPage/Services/MenPageService';

export default {
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid
  },
  data() {
    return {
      service: new MenPageService(),
      products: [],
      filterOptions: {
        sorting: 'default',
        productCount: '12'
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
      this.products = await this.service.allProducts(this.filterOptions);
    }
  }
}
</script>

<template>
  <main>
    <ShopHeader title="Men's Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Men', path: 'men' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model="filterOptions"/>
      <ProductGrid :products="products" />
    </div>
  </main>
</template>
