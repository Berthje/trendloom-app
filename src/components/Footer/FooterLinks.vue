<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    links: Array,
});
</script>

<template>
    <div class="w-1/2 pb-12 lg:w-1/5">
        <h3 class="uppercase font-home font-extrabold pb-4">{{ props.title }}</h3>
        <ul class="flex flex-col space-y-2 text-[0.925rem]">
            <li class="hover:text-gray-400" v-for="link in props.links" :key="link.text">
                <a v-if="link.href" :href="link.href">{{ link.text }}</a>
                <RouterLink v-else-if="link.to" :to="link.to">{{ link.text }}</RouterLink>
            </li>
        </ul>
    </div>
</template>