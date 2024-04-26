<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    props: {
        brandId: Number,
        brandName: String,
        brandImage: String,
    }
}
</script>

<template>
    <RouterLink :to="`/brands/${brandId}`" class="block mx-auto">
        <img :src="brandImage" :alt="brandName" />
        <h2 class="text-center mt-1">{{ brandName }}</h2>
    </RouterLink>
</template>