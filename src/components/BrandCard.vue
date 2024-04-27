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
    <RouterLink :to="`/brands/${brand.id}`" class="flex justify-center items-center hover:opacity-50">
        <img :src="brand.logo_url" :alt="brand.name" class="w-24" />
    </RouterLink>
</template>
