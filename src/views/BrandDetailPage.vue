<script>
import { ref, onCreated } from 'vue';
import ShopHeader from '@/components/ShopHeader.vue';
import ProductGrid from '@/components/ProductGrid.vue';
import FilterBar from '@/components/FilterBar.vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        ShopHeader,
        ProductGrid,
        FilterBar
    },
    setup() {
        const route = useRoute();
        const brand = ref(null);

        const products = [
            {
                id: 1,
                title: 'Classic Leather Jacket',
                image: 'https://via.placeholder.com/150',
                colors: ['black', 'brown'],
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Leather Co.',
                price: '$250'
            },
            {
                id: 2,
                title: 'Slim Fit Jeans',
                image: 'https://via.placeholder.com/150',
                colors: ['blue', 'black', 'grey'],
                sizes: ['28', '30', '32', '34', '36'],
                brand: 'Denim Kings',
                price: '$80'
            },
            {
                id: 3,
                title: 'Casual T-Shirt',
                image: 'https://via.placeholder.com/150',
                colors: ['white', 'black', 'red', 'blue', 'green'],
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Tee Express',
                price: '$20'
            },
            {
                id: 4,
                title: 'Running Shoes',
                image: 'https://via.placeholder.com/150',
                colors: ['black', 'white', 'blue', 'red'],
                sizes: ['7', '8', '9', '10', '11'],
                brand: 'Fast Feet',
                price: '$120'
            },
            {
                id: 5,
                title: 'Baseball Cap',
                image: 'https://via.placeholder.com/150',
                colors: ['black', 'white', 'blue', 'red', 'green'],
                brand: 'Cap Craze',
                price: '$15'
            },
            {
                id: 6,
                title: 'Leather Belt',
                image: 'https://via.placeholder.com/150',
                colors: ['black', 'brown'],
                sizes: ['S', 'M', 'L', 'XL'],
                brand: 'Belt Boutique',
                price: '$35'
            },
            {
                id: 7,
                title: 'Silk Tie',
                image: 'https://via.placeholder.com/150',
                colors: ['blue', 'red', 'green', 'black', 'grey'],
                brand: 'Tie Time',
                price: '$40'
            },
            {
                id: 8,
                title: 'Wrist Watch',
                image: 'https://via.placeholder.com/150',
                colors: ['silver', 'gold'],
                brand: 'Watch World',
                price: '$200'
            }
        ];

        onCreated(async () => {
            const brandId = route.params.id;
            //later fetch brand
        });

        return {
            brand,
            products
        }
    }
}
</script>

<template>
    <main>
        <ShopHeader title="Nike" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]" />
        <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
            <FilterBar />
            <ProductGrid :products="products" />
        </div>
    </main>
</template>