<script>
export default {
    name: 'FilterBar',
    props: {
        filterOptions: {
            type: Object,
            required: true
        }
    },
    emits: ['update:filterOptions'],
    methods: {
        updateSorting($event) {
            this.$emit('update:filterOptions', { ...this.filterOptions, sorting: $event.target.value });
        }
    },
        updateProductCount($event) {
            this.$emit('update:filterOptions', { ...this.filterOptions, productCount: $event.target.value });
        }
}
</script>

<template>
    <div>
        <form class="w-full flex justify-between">
            <select id="sorting" :value="filterOptions.sorting" @input="updateSorting" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="default">Default sorting</option>
                <option value="latest">Sort by latest</option>
                <option value="price_low_high">Sort by price: low to high</option>
                <option value="price_high_low">Sort by price: high to low</option>
            </select>
            <select id="productCount" :value="filterOptions.productCount" @input="updateProductCount" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="all">All</option>
            </select>
        </form>
    </div>
</template>
