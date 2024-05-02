<script>
import { useRoute } from 'vue-router';
import ShopHeader from '@/components/ShopHeader.vue';
import { RiArrowRightSLine, RiArrowLeftSLine } from "vue3-icons/ri";
import { AiOutlineShopping } from "vue3-icons/ai";
import { FaRegHeart } from "vue3-icons/fa";
import QuantitySelector from '@/components/QuantitySelector.vue';
import ProductDetailService from '@/modules/ProductDetailPage/Services/ProductDetailService';
import AuthenticationService from '@/modules/Authentication/Services/AuthenticationService';

export default {
    name: 'ProductDetailPage',
    emits: ['addToCart', 'productAddedToCart', 'quantity-change'],
    components: {
        ShopHeader,
        RiArrowRightSLine,
        RiArrowLeftSLine,
        AiOutlineShopping,
        FaRegHeart,
        QuantitySelector
    },
    data() {
        return {
            service: new ProductDetailService(),
            authService: new AuthenticationService(),
            imageRefs: [],
            product: null,
            selectedSize: null,
            quantity: 1,
            mainImage: '',
            currentIndex: 0,
            errorMessage: null
        }
    },
    methods: {
        updateQuantity(newQuantity) {
            this.quantity = newQuantity;
        },
        nextImage() {
            this.updateImageIndex(1);
        },
        prevImage() {
            this.updateImageIndex(-1);
        },
        updateImageIndex(direction) {
            this.currentIndex = (this.currentIndex + direction + this.product.media.length) % this.product.media.length;
            this.mainImage = this.product.media[this.currentIndex].image_url;
            this.imageRefs[this.currentIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        },
        async fetchProduct(productId) {
            this.product = await this.service.getProduct(productId);
            if (this.product.media && this.product.media.length > 0) {
                this.mainImage = this.product.media[0].image_url;
            }
        },
        selectSize(sizeObj) {
            this.selectedSize = sizeObj;
        },
        async addToCart() {
            this.errorMessage = null;
            const isAuthenticated = await this.authService.isLoggedIn();
            if (!isAuthenticated) {
                this.redirectToLogin();
                return;
            }

            const customer = await this.authService.getProfile();
            if (!customer.data.address_id) {
                this.redirectToProfile();
                return;
            }

            const existingOrders = await this.service.getOrders(customer.data.id);
            const openOrder = existingOrders.find(order => order.status === 'not_completed');

            const orderData = this.createOrderData(customer, openOrder);
            if (openOrder) {
                await this.placeOrderItem(orderData, openOrder.id);
            } else {
                this.placeOrder(orderData);
            }
        },
        redirectToLogin() {
            this.$router.push({ name: 'login' });
        },
        redirectToProfile() {
            this.$router.push({ name: "profile" });
        },
        createOrderData(customer, openOrder) {
            return {
                product: this.product,
                quantity: this.quantity,
                size: this.selectedSize,
                customer: customer,
                address_id: customer.data.address_id
            };
        },
        async placeOrderItem(orderData, orderId) {
            const errorMessage = await this.service.placeOrderItem(orderData, orderId);
            if (errorMessage) {
                this.errorMessage = errorMessage;
            } else {
                this.resetVariables();
                this.showSuccessToast();
                this.$emit('productAddedToCart');
            }
        },
        placeOrder(orderData) {
            this.service.placeOrder(orderData);
            this.resetVariables();
            this.showSuccessToast();
            this.$emit('productAddedToCart');
        },
        resetVariables() {
            this.selectedSize = null;
            this.updateQuantity(1);
        },
        showSuccessToast() {
            this.$toast.open({
                message: 'Added to cart successfully!',
                position: 'bottom-right',
                duration: 1000,
                dismissible: true,
                pauseOnHover: true,
            });
        }
    },
    created() {
        const route = useRoute();
        const productId = route.params.id;
        this.fetchProduct(productId);
    }
}
</script>a

<template>
    <main v-if="product">
        <ShopHeader :title="product.name" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]" />
        <section class="px-4 pt-4 pb-16 lg:flex lg:max-w-screen-xl lg:mx-auto lg:space-x-8">
            <div class="sm:flex sm:flex-row-reverse lg:w-1/2">
                <div class="relative flex-grow sm:ml-4">
                    <button @click="prevImage" class="absolute left-1 top-1/2 transform -translate-y-1/2">
                        <RiArrowLeftSLine size="30" />
                    </button>
                    <button @click="nextImage" class="absolute right-1 top-1/2 transform -translate-y-1/2">
                        <RiArrowRightSLine size="30" />
                    </button>
                    <img :src="mainImage" alt="Main product" class="w-full h-full object-cover">
                </div>
                <div v-if="product"
                    class="flex overflow-x-auto scrollbar-thin mt-4 space-x-4 sm:mt-0 sm:overflow-y-auto sm:overflow-x-hidden sm:flex-col sm:space-x-0 sm:space-y-4">
                    <img v-for="(mediaObj, index) in product.media" :key="index" :src="mediaObj.image_url"
                        class="w-24 min:w-24 sm:w-full h-24 object-cover cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:-translate-y-1"
                        :class="{ '!opacity-100': mainImage === mediaObj.image_url }"
                        @click="mainImage = mediaObj.image_url" :alt="product.name"
                        :ref="el => (imageRefs[index] = el)">
                </div>
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
                <h1 class="font-bold text-3xl" v-if="product">{{ product.name }}</h1>
                <h2 class="text-2xl my-1" v-if="product">€{{ Number(product.price).toLocaleString('en-US', {
                    minimumFractionDigits: 2
                }) }}</h2>
                <ul class="flex flex-col space-y-2 my-2" v-if="product">
                    <li>{{ $t('brand') }}:
                        <RouterLink :to="`/brands/${product.brand.id}`"
                            class="text-gray-400 underline hover:text-black">
                            {{ product.brand.name }}
                        </RouterLink>
                    </li>
                    <li>{{ $t('sku') }}: <span class="text-gray-400">{{ product.sku }}</span></li>
                </ul>
                <div class="mb-6" v-if="product">
                    <p class="text-gray-400 text-sm mb-1">{{ $t('size') }}:</p>
                    <ul v-if="product.sizes.length > 0" class="flex space-x-2">
                        <li v-for="(sizeObj, index) in product.sizes" :key="index" @click="selectSize(sizeObj)"
                            class="w-8 h-8 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs cursor-pointer"
                            :class="{ 'bg-black text-white border-black': selectedSize === sizeObj }">
                            {{ sizeObj.size }}
                        </li>
                    </ul>
                </div>
                <div class="flex space-x-6 h-10">
                    <QuantitySelector :initial-quantity="quantity" @quantity-change="updateQuantity" />
                    <button
                        class="w-full flex items-center justify-center bg-black text-white uppercase text-[0.925rem] hover:text-black hover:bg-white border border-black border-solid transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
                        :disabled="!selectedSize" @click="addToCart">
                        <AiOutlineShopping size="20" class="mr-2" /> {{ $t('add_to_cart') }}
                    </button>
                </div>
                <p class="text-red-500 mt-4" v-if="errorMessage">{{ errorMessage }}</p>
                <div class="flex items-center space-x-3 mt-6 mb-3 cursor-pointer hover:opacity-60">
                    <FaRegHeart />
                    <p>{{ $t('add_to_wishlist') }}</p>
                </div>
                <p v-if="product">{{ product.description }}</p>
            </div>
        </section>
    </main>
</template>