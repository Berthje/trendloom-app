<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'CategoryCard',
    components: {
        RouterLink
    },
    props: {
        imageSrc: String,
        altText: String,
        title: String,
        route: String,
    }
}
</script>
<template>
    <RouterLink :to="route" class="group">
        <div class="text-center">
            <img :src="imageSrc" class="inline-block w-full aspect-square object-cover mb-2" :alt="altText">
            <div>
                <h4 class="uppercase font-bold text-lg group-hover:underline">{{ title }}</h4>
            </div>
        </div>
    </RouterLink>
</template>
