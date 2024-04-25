<script setup>
import ShopHeader from '@/components/ShopHeader.vue';
import FilterBar from '@/components/FilterBar.vue';
</script>

<template>
    <main>
        <ShopHeader shop="Men's Shop" :links="[{ name: 'Home', path: '/' }, { name: 'Men', path: 'men' }]" />
        <FilterBar />
    </main>
</template>