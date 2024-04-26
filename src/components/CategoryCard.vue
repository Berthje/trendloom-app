<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    props: {
        imageSrc: String,
        altText: String,
        title: String,
        productCount: String,
    }
}
</script>
<template>
    <RouterLink to="/women" class="group">
        <div class="text-center">
            <img :src="imageSrc" class="inline-block w-full aspect-square object-cover mb-2" :alt="altText">
            <div>
                <h4 class="uppercase font-bold text-lg group-hover:underline">{{ title }}</h4>
                <p class="text-sm">{{ productCount }} products</p>
            </div>
        </div>
    </RouterLink>
</template>