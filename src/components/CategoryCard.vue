<script setup>
const props = defineProps({
    imageSrc: String,
    altText: String,
    title: String,
    productCount: Number,
});
</script>
<template>
    <RouterLink to="/women">
        <div class="text-center">
            <img :src="imageSrc" class="inline-block w-full aspect-square object-cover mb-2" :alt="altText">
            <div>
                <h4 class="uppercase font-bold text-lg">{{ title }}</h4>
                <p class="text-sm">{{ productCount }} products</p>
            </div>
        </div>
    </RouterLink>
</template>