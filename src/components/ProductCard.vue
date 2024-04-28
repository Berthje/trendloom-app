<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    props: {
        product: Object
    },
    computed: {
        sortedSizes() {
            const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
            return this.product.sizes.sort((a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size));
        }
    }
}

</script>
<template>
    <RouterLink :to="`/shop/product/${product.id}`" class="flex flex-col space-y-2 hover:scale-[1.01]">
        <div>
            <img :src="product.media[0].image_url" :alt="product.name" class="w-full aspect-square object-cover">
        </div>
        <div>
            <ul v-if="product.sizes && product.sizes.length > 0" class="flex space-x-1 my-2">
                <li v-for="(sizeObj, index) in sortedSizes" :key="index"
                    class="min-w-min px-2 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                    {{ sizeObj.size }}
                </li>
            </ul>
            <h2 class="font-bold text-lg">{{ product.name }}</h2>
            <div class="text-gray-500 mb-2">
                <RouterLink :to="`/brands/${product.brand.id}`"
                    class="hover:underline hover:text-gray-800 hover:font-medium">
                    <h3>{{ product.brand.name }}</h3>
                </RouterLink>
                <h4>€{{ Number(product.price).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</h4>
            </div>
        </div>
    </RouterLink>
</template>
