<script>
import { AiOutlineClose } from "vue3-icons/ai";
import ProductItem from "./ProductItem.vue"
import CartMenuHeader from "./CartMenuHeader.vue"
import CartMenuFooter from './CartMenuFooter.vue';

export default {
    name: 'CartMenu',
    components: {
        ProductItem,
        CartMenuHeader,
        CartMenuFooter,
        AiOutlineClose
    },
    props: {
        show: Boolean
    },
    emits: ['close', 'updateCart'],
    data() {
        return {
            products: [
                {
                    id: 1,
                    imageUrl: "https://via.placeholder.com/150",
                    title: "Product 1",
                    color: "Black",
                    size: "M",
                    quantity: 2,
                    price: 27.19
                },
                {
                    id: 2,
                    imageUrl: "https://via.placeholder.com/150",
                    title: "Product 2",
                    color: "Black",
                    size: "XL",
                    quantity: 1,
                    price: 247.99
                },
                {
                    id: 3,
                    imageUrl: "https://via.placeholder.com/150",
                    title: "Product 3",
                    color: "Red",
                    size: "M",
                    quantity: 3,
                    price: 78.49
                },
                {
                    id: 4,
                    imageUrl: "https://via.placeholder.com/150",
                    title: "Product 4",
                    color: "Yellow",
                    size: "S",
                    quantity: 7,
                    price: 478.00
                },
            ],
            MAX_PRODUCTS_SHOWN: 4
        }
    },
    watch: {
        products(newProducts) {
            this.$emit('updateCart', { itemCount: newProducts.length, totalPrice: this.totalPrice });
        }
    },
    computed: {
        additionalProducts() {
            return this.products.length - this.MAX_PRODUCTS_SHOWN;
        },
        totalPrice() {
            return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        removeProductFromCart(productId) {
            this.products = this.products.filter(product => product.id !== productId);
        }
    },
    created() {
        this.$emit('updateCart', { itemCount: this.products.length, totalPrice: this.totalPrice });
    }
}
</script>

<template>
    <transition name="slide">
        <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50">
            <nav class="fixed top-0 right-0 h-full w-[22rem] bg-white overflow-auto p-8 text-center flex flex-col">
                <CartMenuHeader :amountOfProducts="products.length" />
                <div v-if="products.length === 0">
                    <p class="text-sm mb-4">No products in the cart.</p>
                    <RouterLink @click="$emit('close')" to="/shop"
                        class="inline-block px-4 py-2 border border-solid border-black uppercase text-sm hover:bg-black hover:text-white transition-all duration-150">
                        Return to shop
                    </RouterLink>
                </div>
                <div v-else class="flex flex-grow">
                    <ul class="overflow-y-auto flex-grow">
                        <ProductItem v-for="(product, index) in products.slice(0, MAX_PRODUCTS_SHOWN)" :key="product.id"
                            :product="product" @close="close" @remove="removeProductFromCart"/>
                    </ul>
                    <p v-if="additionalProducts > 0" class="text-left mb-32 font-bold">
                        ..there {{ additionalProducts === 1 ? 'is' : 'are' }} {{ additionalProducts }} more {{
                            additionalProducts > 1 ? 'products' :
                                'product' }}
                    </p>
                </div>
                <CartMenuFooter v-if="products.length > 0" :subtotal="totalPrice"/>
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
