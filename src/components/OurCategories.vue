<script>
import CategoryCard from './CategoryCard.vue';

export default {
    name: 'OurCategories',
    components: {
        CategoryCard
    },
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
}
</script>

<template>
    <section class="text-center py-6 lg:max-w-screen-xl mx-auto">
        <h3 class="text-2xl font-medium uppercase custom-underline mb-4">{{ $t('our_categories') }}</h3>
        <p class="text-sm text-gray-600 mb-6">{{ $t('explore_popular_categories') }}</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12">
            <CategoryCard v-for="(category, index) in categories" :key="index" :imageSrc="category.media.image_url"
                :altText="category.description" :title="category.name" :route="`/${category.name.toLowerCase()}`"  />
        </div>
    </section>
</template>

<style scoped>
.custom-underline {
    @apply after:block after:w-12 after:h-0.5 after:bg-black after:mx-auto;
}
</style>
