<script>
import ShopHeader from '@/components/Shop/ShopHeader.vue';
import ProductGrid from '@/components/Product/ProductGrid.vue';
import FilterBar from '@/components/FilterBar.vue';
import BrandDetailPageService from '@/modules/BrandDetailPage/Services/BrandDetailPageService.js';
import { useRoute } from 'vue-router';

export default {
    name: 'BrandDetailPage',
    components: {
        ShopHeader,
        ProductGrid,
        FilterBar
    },
    data() {
        return {
            service: new BrandDetailPageService(),
            brand: null,
            products: [],
            filterOptions: {
                sorting: 'default',
                itemCount: '12'
            }
        }
    },
    watch: {
        filterOptions(newValue, oldValue){
            this.fetchProducts();
        }
    },
    created() {
        const route = useRoute();
        const brandId = route.params.id;

        this.fetchBrand(brandId);
    },
    methods: {
        async fetchBrand(brandId) {
            this.brand = await this.service.getBrand(brandId);
            this.fetchProducts();
        },
        async fetchProducts() {
            const products = await this.service.allProducts(this.filterOptions, this.brand.id);
            this.products = products.data;
        }
    }
}
</script>

<template>
    <main>
        <ShopHeader :title="brand.name" :description="brand.description" :links="[{ name: 'Home', path: '/' }, { name: 'Brands', path: `/brands` }]" />
        <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
            <FilterBar v-model:filterOptions="filterOptions"/>
            <ProductGrid :products="products" />
        </div>
    </main>
</template>
