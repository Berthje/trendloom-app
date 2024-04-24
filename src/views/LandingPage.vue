<script setup>
import Hero from '@/components/Hero.vue';
import CategoriesOverview from '@/components/CategoriesOverview.vue';
import MostPopularCategories from '@/components/MostPopularCategories.vue';
</script>

<template>
  <main>
    <Hero />
    <div class="px-3 py-6">
      <CategoriesOverview />
      <MostPopularCategories />
    </div>
  </main>
</template>
