<script>
import Hero from '@/components/Hero.vue';
import CategoriesOverview from '@/components/CategoriesOverview.vue';
import MostPopularCategories from '@/components/MostPopularCategories.vue';

export default {
  components: {
    Hero,
    CategoriesOverview,
    MostPopularCategories
  }
}
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