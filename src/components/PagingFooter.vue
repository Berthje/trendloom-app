<template>
    <div class="flex items-center gap-4">
        <button :disabled="!prevPageUrl" @click.prevent="goToPage(prevPageUrl)"
            class="flex items-center gap-2 px-6 py-3 -ml-6 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Previous
        </button>
        <div class="flex items-center gap-2">
            <a v-for="(link, index) in pageLinks" :key="link.label" @click.prevent="goToPage(link.url)" :class="[
                'cursor-pointer relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
                { 'bg-gray-900 text-white': link.active }
            ]">
                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {{ link.label }}
                </span>
            </a>
        </div>
        <button :disabled="!nextPageUrl" @click.prevent="goToPage(nextPageUrl)"
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: 'PagingFooter',
    props: {
        links: {
            type: Array,
            required: true,
        },
    },
    computed: {
        prevPageUrl() {
            const link = this.links.find(link => link.label === '&laquo; Previous');
            return link && link.url ? link.url : null;
        },
        nextPageUrl() {
            const link = this.links.find(link => link.label === 'Next &raquo;');
            return link && link.url ? link.url : null;
        },
        pageLinks() {
            return this.links.filter(link => !isNaN(Number(link.label)));
        },
    },
    methods: {
        goToPage(url) {
            this.$emit('change-page', url);
        },
    },
};
</script>