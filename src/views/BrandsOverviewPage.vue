<script>
import ShopHeader from '@/components/ShopHeader.vue'
import BrandCard from '@/components/BrandCard.vue'
import BrandsOverviewPageService from '@/modules/BrandsOverviewPage/Services/BrandsOverviewPageService'

export default {
  components: {
    ShopHeader,
    BrandCard
  },
  data() {
    return {
      service: new BrandsOverviewPageService(),
      brands: []
    }
  },
  created() {
    this.fetchBrands();
  },
  methods: {
    async fetchBrands() {
      this.brands = await this.service.allBrands();
    }
  }
}
</script>

<template>
  <main>
    <ShopHeader title="Our Brands" :links="[{ name: 'Home', path: '/' }, { name: 'Brands', path: '/brands' }]" />
    <div
      class="px-3 py-8 grid grid-cols-2 max-w-screen-xl mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 justify-center">
      <BrandCard v-for="brand in brands" :key="brand.id" :brand="brand" />
    </div>
  </main>
</template>
