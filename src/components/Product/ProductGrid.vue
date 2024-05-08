<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductGrid',
    components: {
        ProductCard
    },
    props: {
        products: Array
    }
}
</script>

<template>
    <section v-if="products && products.length > 0"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 pb-16">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </section>
    <p v-else class="text-lg py-8 text-gray-500">{{ $t('no_products_found') }}</p>
</template>
