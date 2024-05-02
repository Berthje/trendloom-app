<script>
import { AiOutlineClose } from "vue3-icons/ai";
import ProductItem from "./ProductItem.vue"
import CartMenuHeader from "./CartMenuHeader.vue"
import CartMenuFooter from './CartMenuFooter.vue';
import ProductDetailService from "@/modules/ProductDetailPage/Services/ProductDetailService";
import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";

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
            service: new ProductDetailService(),
            authService: new AuthenticationService(),
            products: [],
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
    async created() {
        const profile = await this.authService.getProfile();
        const orders = await this.service.getOrders(profile.data.id);
        const openOrder = orders.find(order => order.status === 'not_completed');

        if (openOrder) {
            const orderItems = await this.service.getOrderItems(openOrder.id);
            this.products = await Promise.all(
                orderItems.map(async item => {
                    const product = await this.service.getProduct(item.product.id);
                    return { ...product, quantity: item.quantity, selectedSize: item.size.size };
                })
            );
        }

        console.log(this.products)

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
                    <p class="text-sm mb-4">{{ $t('no_products_in_cart') }}</p>
                    <RouterLink @click="$emit('close')" to="/shop"
                        class="inline-block px-4 py-2 border border-solid border-black uppercase text-sm hover:bg-black hover:text-white transition-all duration-150">
                        {{ $t('return_to_shop') }}
                    </RouterLink>
                </div>
                <div v-else class="flex flex-grow">
                    <ul class="overflow-y-auto flex-grow">
                        <ProductItem v-for="(product, index) in products.slice(0, MAX_PRODUCTS_SHOWN)" :key="product.id"
                            :product="product" @close="close" @remove="removeProductFromCart" />
                    </ul>
                    <p v-if="additionalProducts > 0" class="text-left mb-32 font-bold">
                        ..{{ $t('there') }} {{ additionalProducts === 1 ? $t('is') : $t('are') }} {{ additionalProducts
                        }}
                        {{ $t('more') }}
                        {{
                            additionalProducts > 1 ? $t('products') :
                                $t('product') }}
                    </p>
                </div>
                <CartMenuFooter v-if="products.length > 0" :subtotal="totalPrice" />
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
