<script>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import KidsPageService from '@/modules/KidsPage/Services/KidsPageService';

export default {
  name: 'KidsPage',
  components: {
    ShopHeader,
    FilterBar,
    ProductGrid
  },
  data() {
    return {
      service: new KidsPageService(),
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
    <ShopHeader title="Kids Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Kids', path: 'kids' }]" />
    <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
      <FilterBar v-model:filterOptions="filterOptions"/>
      <ProductGrid :products="products" />
    </div>
  </main>
</template>
