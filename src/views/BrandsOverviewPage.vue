<script setup>
import ShopHeader from '@/components/ShopHeader.vue'
import BrandCard from '@/components/BrandCard.vue'

const brands = [
  {
    id: 1,
    name: 'Gucci',
    image: 'https://via.placeholder.com/150?text=Gucci'
  },
  {
    id: 2,
    name: 'Prada',
    image: 'https://via.placeholder.com/150?text=Prada'
  },
  {
    id: 3,
    name: 'Versace',
    image: 'https://via.placeholder.com/150?text=Versace'
  },
  {
    id: 4,
    name: 'Armani',
    image: 'https://via.placeholder.com/150?text=Armani'
  },
  {
    id: 5,
    name: 'Dolce & Gabbana',
    image: 'https://via.placeholder.com/150?text=D%26G'
  },
]
</script>

<template>
  <main>
    <ShopHeader title="Our Brands" :links="[{ name: 'Home', path: '/' }, { name: 'Brands', path: '/brands' }]" />
    <div
      class="px-3 py-8 grid grid-cols-2 max-w-screen-xl mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 justify-center">
      <BrandCard v-for="brand in brands" :key="brand.id" :brandName="brand.name" :brandImage="brand.image" :brandId="brand.id" />
    </div>
  </main>
</template>
