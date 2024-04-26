<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ShopHeader from '@/components/ShopHeader.vue';
import { RiArrowRightSLine, RiArrowLeftSLine } from "vue3-icons/ri";

const tempImages = [
    '/images/accessories.jpeg',
    '/images/fashion.jpeg',
    '/images/featured.jpeg',
    '/images/men.jpeg',
    '/images/accessories.jpeg',
];

const route = useRoute();
const product = ref(null);
const mainImage = ref(tempImages[0]);
let currentIndex = ref(0);

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % tempImages.length;
    mainImage.value = tempImages[currentIndex.value];
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + tempImages.length) % tempImages.length;
    mainImage.value = tempImages[currentIndex.value];
};

onMounted(async () => {
    const productId = route.params.id;
    //const response = await fetch(`/api/products/${productId}`);
    //product.value = await response.json();
});
</script>

<template>
    <main>
        <ShopHeader title="Cotton Crew Neck" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]" />
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
                <div class="flex overflow-x-scroll mt-4 space-x-4">
                    <img v-for="(imageURL, index) in tempImages" :key="index" :src="imageURL"
                        class="w-24 h-24 cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:-translate-y-1" :class="{ 'opacity-100': mainImage === imageURL }" @click="mainImage = imageURL" alt="Product">
                </div>
            </div>
        </section>
    </main>
</template>