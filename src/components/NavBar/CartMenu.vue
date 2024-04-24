<script setup>
import { AiOutlineShopping, AiOutlineClose } from "vue3-icons/ai";
import { ref } from "vue";

const products = ref([{}]);

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
            <nav class="fixed top-0 right-0 h-full w-[22rem] bg-white overflow-auto p-8 text-center">
                <RouterLink to="/shopping-cart" class="block mb-6">
                    <AiOutlineShopping size="36" class="inline-block mb-2" />
                    <h2 class="uppercase text-lg">Cart</h2>
                </RouterLink>
                <div v-if="products.length === 0">
                    <p class="text-sm mb-4">No products in the cart.</p>
                    <RouterLink to="/shop"
                        class="inline-block px-4 py-2 border border-solid border-black uppercase text-sm hover:bg-black hover:text-white transition-all duration-150">
                        Return to shop
                    </RouterLink>
                </div>
                <div v-else>
                    <ul>
                        <li class="relative group w-full flex">
                            <AiOutlineClose size="16" class="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <RouterLink to="PRODUCT-DETAILS-PAGE">
                                <img src="https://via.placeholder.com/100" alt="Product" />
                            </RouterLink>
                            <div>
                                <h4>
                                    <RouterLink to="PRODUCT-DETAILS-PAGE">Neck Sweater</RouterLink>
                                </h4>
                                <div>
                                    <dl class="grid grid-cols-2">
                                        <dt>Color:</dt>
                                        <dd>
                                            <p>Black</p>
                                        </dd>
                                        <dt>Size:</dt>
                                        <dd>
                                            <p>M</p>
                                        </dd>
                                    </dl>
                                    <span>
                                        3 ×
                                        <span>
                                            <bdi>€</bdi>
                                            <span>410.00</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <AiOutlineClose v-show="show"
                class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-[23.5rem] top-3"
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