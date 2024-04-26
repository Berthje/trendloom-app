<script setup>
import { AiOutlineClose } from "vue3-icons/ai";
import { ref } from "vue";
import ProductItem from "./ProductItem.vue"
import CartMenuHeader from "./CartMenuHeader.vue"
import CartMenuFooter from './CartMenuFooter.vue';

const products = ref(
    [
        {
            id: 1,
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 1",
            color: "Black",
            size: "M",
            quantity: 3,
            price: 410.00
        },
        {
            id: 2,
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 1",
            color: "Black",
            size: "M",
            quantity: 3,
            price: 410.00
        },
        {
            id: 3,
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 1",
            color: "Black",
            size: "M",
            quantity: 3,
            price: 410.00
        },
        {
            id: 4,
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 1",
            color: "Black",
            size: "M",
            quantity: 3,
            price: 410.00
        },
    ]
);

const MAX_PRODUCTS_SHOWN = 4;
const additionalProducts = products.value.length - MAX_PRODUCTS_SHOWN;

const props = defineProps({
    show: Boolean,
});

const emits = defineEmits(['close']);

const close = () => {
    emits('close');
};
</script>

<template>
    <transition name="slide">
        <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50">
            <nav class="fixed top-0 right-0 h-full w-[22rem] bg-white overflow-auto p-8 text-center flex flex-col">
                <CartMenuHeader :amountOfProducts="products.length" />
                <div v-if="products.length === 0">
                    <p class="text-sm mb-4">No products in the cart.</p>
                    <RouterLink to="/shop"
                        class="inline-block px-4 py-2 border border-solid border-black uppercase text-sm hover:bg-black hover:text-white transition-all duration-150">
                        Return to shop
                    </RouterLink>
                </div>
                <div v-else class="flex flex-grow">
                    <ul class="overflow-y-auto flex-grow">
                        <ProductItem v-for="(product, index) in products.slice(0, MAX_PRODUCTS_SHOWN)" :key="product.id" :product="product" @close="close" />
                    </ul>
                    <p v-if="additionalProducts > 0" class="text-left mb-32 font-bold">
                        ..there {{ additionalProducts === 1 ? 'is' : 'are' }} {{ additionalProducts }} more {{
                            additionalProducts > 1 ? 'products' :
                                'product' }}
                    </p>
                </div>
                <CartMenuFooter />
            </nav>
            <AiOutlineClose v-show="show"
                class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-[23rem] top-3"
                @click="close" />
        </div>
    </transition>
</template>

<style scoped>
.slide-enter-from {
    @apply translate-x-full;
}

.slide-enter-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-enter-to {
    @apply translate-x-0;
}

.slide-leave-from {
    @apply translate-x-0;
}

.slide-leave-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-leave-to {
    @apply translate-x-full;
}
</style>