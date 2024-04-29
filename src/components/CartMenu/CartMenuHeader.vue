<script>
import { AiOutlineShopping } from "vue3-icons/ai";
import { RouterLink } from 'vue-router';

export default {
    name: 'CartMenuHeader',
    components: {
        AiOutlineShopping,
        RouterLink
    },
    props: {
        amountOfProducts: {
            type: Number,
            required: true
        }
    }
}
</script>
<template>
    <RouterLink to="/shopping-cart" class="block mb-6 overflow-hidden">
        <AiOutlineShopping size="36" class="inline-block mb-2" />
        <h2 class="uppercase text-lg">Cart {{ amountOfProducts > 0 ? `(${amountOfProducts} ${amountOfProducts > 1 ?
            'products' : 'product'})` : '' }}</h2>
    </RouterLink>
</template>
