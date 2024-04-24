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
            <nav class="fixed top-0 right-0 h-full w-[22rem] bg-white overflow-auto p-8 text-center flex flex-col">
                <RouterLink to="/shopping-cart" class="block mb-6 overflow-hidden">
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
                <div v-else class="flex flex-col flex-grow">
                    <ul class="overflow-y-auto flex-grow mb-0">
                        <li
                            class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
                            <AiOutlineClose size="16"
                                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
                            <RouterLink to="PRODUCT-DETAILS-PAGE" class="mr-5 w-20">
                                <img src="https://via.placeholder.com/250" alt="Product" />
                            </RouterLink>
                            <div>
                                <h4 class="leading-none mb-1">
                                    <RouterLink to="PRODUCT-DETAILS-PAGE">Neck Sweater</RouterLink>
                                </h4>

                                <div class="text-[0.925rem]">
                                    <dl class="text-[#858585]">
                                        <div class="flex space-x-1">
                                            <dt>Color:</dt>
                                            <dd>
                                                <p>Black</p>
                                            </dd>
                                        </div>
                                        <div class="flex space-x-1">
                                            <dt>Size:</dt>
                                            <dd>
                                                <p>M</p>
                                            </dd>
                                        </div>
                                    </dl>
                                    <span class="block mt-2 font-medium text-[0.95rem]">
                                        3 ×
                                        <span>
                                            <bdi>€</bdi>
                                            <span>410.00</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
                            <AiOutlineClose size="16"
                                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
                            <RouterLink to="PRODUCT-DETAILS-PAGE" class="mr-5 w-20">
                                <img src="https://via.placeholder.com/250" alt="Product" />
                            </RouterLink>
                            <div>
                                <h4 class="leading-none mb-1">
                                    <RouterLink to="PRODUCT-DETAILS-PAGE">Neck Sweater</RouterLink>
                                </h4>

                                <div class="text-[0.925rem]">
                                    <dl class="text-[#858585]">
                                        <div class="flex space-x-1">
                                            <dt>Color:</dt>
                                            <dd>
                                                <p>Black</p>
                                            </dd>
                                        </div>
                                        <div class="flex space-x-1">
                                            <dt>Size:</dt>
                                            <dd>
                                                <p>M</p>
                                            </dd>
                                        </div>
                                    </dl>
                                    <span class="block mt-2 font-medium text-[0.95rem]">
                                        3 ×
                                        <span>
                                            <bdi>€</bdi>
                                            <span>410.00</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
                            <AiOutlineClose size="16"
                                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
                            <RouterLink to="PRODUCT-DETAILS-PAGE" class="mr-5 w-20">
                                <img src="https://via.placeholder.com/250" alt="Product" />
                            </RouterLink>
                            <div>
                                <h4 class="leading-none mb-1">
                                    <RouterLink to="PRODUCT-DETAILS-PAGE">Neck Sweater</RouterLink>
                                </h4>

                                <div class="text-[0.925rem]">
                                    <dl class="text-[#858585]">
                                        <div class="flex space-x-1">
                                            <dt>Color:</dt>
                                            <dd>
                                                <p>Black</p>
                                            </dd>
                                        </div>
                                        <div class="flex space-x-1">
                                            <dt>Size:</dt>
                                            <dd>
                                                <p>M</p>
                                            </dd>
                                        </div>
                                    </dl>
                                    <span class="block mt-2 font-medium text-[0.95rem]">
                                        3 ×
                                        <span>
                                            <bdi>€</bdi>
                                            <span>410.00</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li
                            class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
                            <AiOutlineClose size="16"
                                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
                            <RouterLink to="PRODUCT-DETAILS-PAGE" class="mr-5 w-20">
                                <img src="https://via.placeholder.com/250" alt="Product" />
                            </RouterLink>
                            <div>
                                <h4 class="leading-none mb-1">
                                    <RouterLink to="PRODUCT-DETAILS-PAGE">Neck Sweater</RouterLink>
                                </h4>

                                <div class="text-[0.925rem]">
                                    <dl class="text-[#858585]">
                                        <div class="flex space-x-1">
                                            <dt>Color:</dt>
                                            <dd>
                                                <p>Black</p>
                                            </dd>
                                        </div>
                                        <div class="flex space-x-1">
                                            <dt>Size:</dt>
                                            <dd>
                                                <p>M</p>
                                            </dd>
                                        </div>
                                    </dl>
                                    <span class="block mt-2 font-medium text-[0.95rem]">
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
                    <div>
                        <div class="uppercase flex justify-between items-center mb-5">
                            <p class="text-[0.95rem]">Subtotal:</p>
                            <p>€1,565.50</p>
                        </div>
                        <RouterLink to="checkout" class="block uppercase bg-black text-white text-center py-3 text-[0.95rem]">Checkout</RouterLink>
                    </div>
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