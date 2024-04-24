<script setup>
import { AiOutlineShopping, AiOutlineClose } from "vue3-icons/ai";
import { ref } from "vue";
import ProductItem from "../ProductItem.vue"

const products = ref(
    [
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 1",
            color: "Black",
            size: "M",
            quantity: 3,
            price: 410.00
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 2",
            color: "Blue",
            size: "L",
            quantity: 2,
            price: 350.00
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 3",
            color: "Red",
            size: "S",
            quantity: 1,
            price: 200.00
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 4",
            color: "Red",
            size: "S",
            quantity: 1,
            price: 200.00
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Product 5",
            color: "Purple",
            size: "S",
            quantity: 1,
            price: 200.00
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
                <RouterLink to="/shopping-cart" class="block mb-6 overflow-hidden">
                    <AiOutlineShopping size="36" class="inline-block mb-2" />
                    <h2 class="uppercase text-lg">Cart ({{ products.length }} products)</h2>
                </RouterLink>
                <div v-if="products.length === 0">
                    <p class="text-sm mb-4">No products in the cart.</p>
                    <RouterLink to="/shop"
                        class="inline-block px-4 py-2 border border-solid border-black uppercase text-sm hover:bg-black hover:text-white transition-all duration-150">
                        Return to shop
                    </RouterLink>
                </div>
                <div v-else class="flex flex-col flex-grow">
                    <ul class="overflow-y-auto flex-grow">
                        <ProductItem v-for="(product, index) in products.slice(0, 4)" :key="index" :product="product" />
                    </ul>
                    <p v-if="additionalProducts > 0" class="text-left mb-32 font-bold">..there {{ additionalProducts ===
                        1 ? 'is' : 'are'}} {{ additionalProducts }} more product{{ additionalProducts > 1 ? 's' : '' }}
                    </p>
                    <div>
                        <div class="uppercase flex justify-between items-center mb-5">
                            <p class="text-[0.95rem]">Subtotal:</p>
                            <p>€1,565.50</p>
                        </div>
                        <RouterLink to="checkout"
                            class="block uppercase bg-black text-white text-center py-3 text-[0.95rem]">Checkout
                        </RouterLink>
                    </div>
                </div>
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