<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ShopHeader from '@/components/ShopHeader.vue';
import { RiArrowRightSLine, RiArrowLeftSLine } from "vue3-icons/ri";
import { AiOutlineShopping } from "vue3-icons/ai";
import { FaRegHeart } from "vue3-icons/fa";
import QuantitySelector from '@/components/QuantitySelector.vue';

const tempImages = [
    '/images/accessories.jpeg',
    '/images/fashion.jpeg',
    '/images/featured.jpeg',
    '/images/men.jpeg',
];

const imageRefs = ref([]);

const route = useRoute();
const product = ref(null);
const mainImage = ref(tempImages[0]);
let currentIndex = ref(0);

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % tempImages.length;
    mainImage.value = tempImages[currentIndex.value];
    imageRefs.value[currentIndex.value]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + tempImages.length) % tempImages.length;
    mainImage.value = tempImages[currentIndex.value];
    imageRefs.value[currentIndex.value]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
};

onMounted(async () => {
    const productId = route.params.id;
    //later fetch product
});

</script>

<template>
    <main>
        <ShopHeader title="Belted Jackets" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]" />
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
                <div
                    class="flex overflow-x-auto scrollbar-thin mt-4 space-x-4 sm:mt-0 sm:overflow-y-auto sm:overflow-x-hidden sm:flex-col sm:space-x-0 sm:space-y-4">
                    <img v-for="(imageURL, index) in tempImages" :key="index" :src="imageURL"
                        class="w-24 min:w-24 sm:w-full h-24 object-cover cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:-translate-y-1"
                        :class="{ 'opacity-100': mainImage === imageURL }" @click="mainImage = imageURL" alt="Product"
                        :ref="el => (imageRefs[index] = el)">
                </div>
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
                <h1 class="font-bold text-3xl">Belted Jackets</h1>
                <h2 class="text-2xl my-1">€155.50</h2>
                <ul class="flex flex-col space-y-2 my-2">
                    <li>Brand: <RouterLink to="/brands/brandNameHere" class="text-gray-400 underline hover:text-black">
                            Booja Booja</RouterLink>
                    </li>
                    <li>SKU: <span class="text-gray-400">N/A</span></li>
                </ul>
                <div class="mb-6">
                    <p class="text-gray-400 text-sm mb-1">Size:</p>
                    <ul v-if="['S', 'M', 'L', 'XL'].length > 0" class="flex space-x-2">
                        <li v-for="(size, index) in ['S', 'M', 'L', 'XL']" :key="index"
                            class="w-8 h-8 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                            {{ size }}
                        </li>
                    </ul>
                </div>
                <div class="flex space-x-6 h-10">
                    <QuantitySelector />
                    <button
                        class="w-full flex items-center justify-center bg-black text-white uppercase text-[0.925rem] hover:text-black hover:bg-white border border-black border-solid transition-all duration-300 ease-in-out">
                        <AiOutlineShopping size="20" class="mr-2" /> Add to cart
                    </button>
                </div>
                <div class="flex items-center space-x-3 mt-6 mb-3 cursor-pointer hover:opacity-60">
                    <FaRegHeart />
                    <p>Add to wishlist</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus quam nemo aliquam? Maiores
                    repudiandae minus expedita obcaecati quam illo aut odit nostrum optio?</p>
            </div>
        </section>
    </main>
</template>