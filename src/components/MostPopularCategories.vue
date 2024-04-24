<script setup>
import CategoryCard from './CategoryCard.vue';
</script>

<template>
    <section class="text-center py-6 lg:max-w-screen-xl mx-auto">
        <h3 class="text-2xl font-medium uppercase custom-underline mb-4">Most popular categories</h3>
        <p class="text-sm text-gray-600 mb-6">Explore our most popular categories filled with top-rated products chosen
            by our customers.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
            <CategoryCard imageSrc="/images/fashion.jpeg" altText="Category related" title="Fashion" productCount="281" />
            <CategoryCard imageSrc="/images/accessories.jpeg" altText="Category related" title="Accessories" productCount="124" />
            <CategoryCard imageSrc="/images/featured.jpeg" altText="Category related" title="Featured" productCount="327" />
            <CategoryCard imageSrc="/images/men.jpeg" altText="Category related" title="Men" productCount="102" />
        </div>
    </section>
</template>

<style scoped>
.custom-underline {
    @apply after:block after:w-12 after:h-0.5 after:bg-black after:mx-auto;
}
</style>
