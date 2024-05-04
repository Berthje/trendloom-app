<script>
export default {
    name: 'Pagination',
    emits: ['change-page'],
    props: {
        links: {
            type: Array,
            required: true,
        },
    },
    computed: {
        prevPageUrl() {
            const link = this.links.find(link => link.label.includes('&laquo;'));
            return link && link.url ? link.url : null;
        },
        nextPageUrl() {
            const link = this.links.find(link => link.label.includes('&raquo;'));
            return link && link.url ? link.url : null;
        },
        pageLinks() {
            return this.links.filter(link => !isNaN(Number(link.label)));
        },
    },
    methods: {
        goToPage(url) {
            this.$emit('change-page', url);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
}
</script>

<template>
    <div class="flex items-center justify-between mt-6">
        <a href="#" :disabled="!prevPageUrl" @click.prevent="goToPage(prevPageUrl)"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>
                previous
            </span>
        </a>
        <div class="items-center hidden lg:flex gap-x-3">
            <a v-for="(link, index) in pageLinks" :key="link.label" @click.prevent="goToPage(link.url)"
                :class="['px-2 py-1 text-sm  rounded-md', { 'text-blue-500 bg-blue-100': link.active }, { 'cursor-pointer hidden sm:inline-block': !link.active }]">{{
                    link.label }}</a>
        </div>
        <a href="#" :disabled="!nextPageUrl" @click.prevent="goToPage(nextPageUrl)"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
            <span>
                Next
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</template>