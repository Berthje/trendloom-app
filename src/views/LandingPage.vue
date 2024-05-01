<script>
import Hero from '@/components/Hero.vue';
import CategoriesOverview from '@/components/CategoriesOverview.vue';
import MostPopularCategories from '@/components/MostPopularCategories.vue';

export default {
  name: 'LandingPage',
  components: {
    Hero,
    CategoriesOverview,
    MostPopularCategories
  },
  data() {
    return {
      categories: [
        { imageSrc: "/images/fashion.jpeg", altText: "Category related", title: "Fashion", productCount: "281" },
        { imageSrc: "/images/accessories.jpeg", altText: "Category related", title: "Accessories", productCount: "124" },
        { imageSrc: "/images/featured.jpeg", altText: "Category related", title: "Featured", productCount: "327" },
        { imageSrc: "/images/men.jpeg", altText: "Category related", title: "Men", productCount: "102" },
      ]
    }
  }
}
</script>

<template>
  <main>
    <Hero />
    <div class="px-3 py-6">
      <CategoriesOverview />
      <MostPopularCategories :categories="categories"/>
    </div>
  </main>
</template>
