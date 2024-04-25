<script setup>
const props = defineProps({
    shop: String,
    links: Array
});
</script>
<template>
    <div>
        <nav class="text-lg flex justify-center space-x-2">
            <RouterLink v-for="(link, index) in links" :key="index" :to="link.path"
                class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400">{{ link.name }}&nbsp;</RouterLink>
        </nav>
        <h3 class="font-extrabold text-7xl uppercase">{{ shop }}</h3>
    </div>
</template>
