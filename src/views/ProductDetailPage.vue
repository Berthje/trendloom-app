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
    '/images/men.jpeg',
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
        <section class="px-4 py-4">
            <div>
                <div class="relative">
                    <button @click="prevImage" class="absolute left-1 top-1/2 transform -translate-y-1/2">
                        <RiArrowLeftSLine size="30" />
                    </button>
                    <button @click="nextImage" class="absolute right-1 top-1/2 transform -translate-y-1/2">
                        <RiArrowRightSLine size="30" />
                    </button>
                    <img :src="mainImage" alt="Main product" class="w-full">
                </div>
                <div class="flex overflow-x-auto scrollbar-thin mt-4 space-x-4">
                    <img v-for="(imageURL, index) in tempImages" :key="index" :src="imageURL"
                        class="w-24 aspect-square cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:-translate-y-1"
                        :class="{ 'opacity-100': mainImage === imageURL }" @click="mainImage = imageURL" alt="Product"
                        :ref="el => (imageRefs[index] = el)">
                </div>
            </div>
            <div>
                <h1>Belted Jackets</h1>
                <h2>€155.50</h2>
                <ul>
                    <li>Brand: Booja Booja</li>
                    <li>SKU: N/A</li>
                </ul>
                <ul v-if="['S', 'M', 'L', 'XL'].length > 0" class="flex space-x-2">
                    <li v-for="(size, index) in ['S', 'M', 'L', 'XL']" :key="index"
                        class="w-7 h-7 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                        {{ size }}
                    </li>
                </ul>
                <div>
                    <QuantitySelector />
                    <button>
                        <AiOutlineShopping /> Add to cart
                    </button>
                </div>
                <div>
                    <FaRegHeart />
                    <p>Add to wishlist</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus quam nemo aliquam? Maiores
                    repudiandae minus expedita obcaecati quam illo aut odit nostrum optio?</p>
            </div>
        </section>
    </main>
</template>