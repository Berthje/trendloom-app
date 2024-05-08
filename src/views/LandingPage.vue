<script>
import Hero from '@/components/LandingPage/Hero.vue';
import CategoriesOverview from '@/components/Category/CategoriesOverview.vue';
import OurCategories from '@/components/LandingPage/OurCategories.vue';
import LandingPageService from '@/modules/LandingPage/Services/LandingPageService';

export default {
  name: 'LandingPage',
  components: {
    Hero,
    CategoriesOverview,
    OurCategories
  },
  data() {
    return {
      service: new LandingPageService(),
      categories: [],
      allowedCategories: ['men', 'mannen', 'women', 'vrouwen', 'kids', 'kinderen']
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      const response = await this.service.allCategories();
      const data = await response.data;
      this.categories = data.filter(category => this.allowedCategories.includes(category.name.toLowerCase()));
    },
  }
}
</script>

<template>
  <main>
    <Hero />
    <div class="px-3 py-6">
      <CategoriesOverview />
      <OurCategories :categories="categories" />
    </div>
  </main>
</template>
