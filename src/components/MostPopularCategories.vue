<script>
import CategoryCard from './CategoryCard.vue';

export default {
    name: 'MostPopularCategories',
    components: {
        CategoryCard
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
    <section class="text-center py-6 lg:max-w-screen-xl mx-auto">
        <h3 class="text-2xl font-medium uppercase custom-underline mb-4">{{ $t('most_popular_categories') }}</h3>
        <p class="text-sm text-gray-600 mb-6">{{ $t('explore_popular_categories') }}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
            <CategoryCard v-for="(category, index) in categories" :key="index" :imageSrc="category.imageSrc"
                :altText="category.altText" :title="category.title" :productCount="category.productCount" />
        </div>
    </section>
</template>

<style scoped>
.custom-underline {
    @apply after:block after:w-12 after:h-0.5 after:bg-black after:mx-auto;
}
</style>
