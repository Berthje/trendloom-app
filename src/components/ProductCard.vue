<script setup>
const props = defineProps({
    product: Object
});
</script>
<template>
    <div class="flex flex-col space-y-2">
        <div>
            <img :src="product.image" :alt="product.title" class="w-full">
        </div>
        <div>
            <ul class="flex space-x-1">
                <li v-for="(color, index) in product.colors" :key="index"
                    class="w-5 h-5 rounded-full relative border border-gray-300 border-solid">
                    <span
                        :class="`bg-${color} top-[2px] bottom-[2px] left-[2px] right-[2px] absolute rounded-full`"></span>
                </li>
            </ul>
            <ul v-if="product.sizes && product.sizes.length > 0" class="flex space-x-1 my-2">
                <li v-for="(size, index) in product.sizes" :key="index"
                    class="w-5 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                    {{ size }}
                </li>
            </ul>
            <h2 class="font-bold text-lg">{{ product.title }}</h2>
            <div class="text-gray-500 mb-2">
                <RouterLink :to="`/brands/${product.brand}`"
                    class="hover:underline hover:text-gray-800 hover:font-medium">
                    <h3>{{ product.brand }}</h3>
                </RouterLink>
                <h4>{{ product.price }}</h4>
            </div>
        </div>
    </div>
</template>
