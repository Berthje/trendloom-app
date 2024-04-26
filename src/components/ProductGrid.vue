<script>
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    props: {
        products: Array
    }
}
</script>

<template>
    <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 pb-16">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </section>
</template>
