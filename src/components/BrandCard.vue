<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    props: {
        brand: Object
    }
}
</script>

<template>
    <RouterLink :to="`/brands/${brand.id}`" class="block mx-auto">
        <img :src="brand.image_url" :alt="brand.name" />
        <h2 class="text-center mt-1">{{ brand.name }}</h2>
    </RouterLink>
</template>
