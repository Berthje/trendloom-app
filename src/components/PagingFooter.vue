<script>
export default {
    name: 'PagingFooter',
    props: {
        links: {
            type: Array,
            required: true,
        },
    },
    methods: {
        goToPage(url) {
            this.$emit('change-page', url);
        },
    },
};
</script>
<template>
    <nav class="flex items-center justify-between">
        <div class="flex items-center">
            <a v-for="link in links" :key="link.label" :href="link.url" @click.prevent="goToPage(link.url)"
                :class="['px-4 py-2 border rounded', { 'bg-blue-500 text-white': link.active, 'text-blue-500': !link.active }]">
                {{ link.label }}
            </a>
        </div>
    </nav>
</template>
