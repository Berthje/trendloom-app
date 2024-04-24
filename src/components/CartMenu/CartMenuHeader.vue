<script setup>
import { AiOutlineShopping } from "vue3-icons/ai";
import { RouterLink } from 'vue-router';

const props = defineProps({
    amountOfProducts: Number
});
</script>
<template>
    <RouterLink to="/shopping-cart" class="block mb-6 overflow-hidden">
        <AiOutlineShopping size="36" class="inline-block mb-2" />
        <h2 class="uppercase text-lg">Cart {{ amountOfProducts > 0 ? `(${amountOfProducts} ${amountOfProducts > 1 ? 'products' : 'product'})` : '' }}</h2>
    </RouterLink>
</template>
