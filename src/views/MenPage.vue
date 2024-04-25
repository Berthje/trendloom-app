<script setup>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
import ProductGrid from '@/components/ProductGrid.vue';
</script>

<template>
    <main>
        <ShopHeader shop="Men's Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Men', path: 'men' }]" />
        <div class="px-4 py-3 w-full max-w-screen-xl mx-auto">
            <FilterBar />
            <ProductGrid />
        </div>
    </main>
</template>