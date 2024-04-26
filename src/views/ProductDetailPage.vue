<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ShopHeader from '@/components/ShopHeader.vue';

//IMAGES MUST BE IN PUBLIC IN ORDER TO ACCESS THEM TO INJECT
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

onMounted(async () => {
    const productId = route.params.id;
    //const response = await fetch(`/api/products/${productId}`);
    //product.value = await response.json();
});
</script>

<template>
    <main>
        <ShopHeader title="Cotton Crew Neck" :links="[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }]" />
        <section>
        <div>
            <img :src="mainImage" alt="Main product" class="w-full h-auto">
            <div class="flex overflow-x-scroll mt-4 space-x-4">
                <img v-for="(imageURL, index) in tempImages" :key="index" :src="imageURL" class="w-24 h-24 cursor-pointer" @click="mainImage = imageURL" alt="Product">
            </div>
        </div>
    </section>
    </main>
</template>