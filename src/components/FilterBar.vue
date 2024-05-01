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
        },
        updateItemCount($event) {
            this.$emit('update:filterOptions', { ...this.filterOptions, itemCount: $event.target.value });
        }
    },
}
</script>

<template>
    <div>
        <form class="w-full flex justify-between">
            <select id="sorting" :value="filterOptions.sorting" @input="updateSorting" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="default">{{$t('default_sorting')}}</option>
                <option value="latest">{{$t('sort_by_latest')}}</option>
                <option value="price_low_high">{{$t('sort_by_price_low_high')}}</option>
                <option value="price_high_low">{{$t('sort_by_price_high_low')}}</option>
            </select>
            <select id="itemCount" :value="filterOptions.itemCount" @input="updateItemCount" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="all">{{ $t('all') }}</option>
            </select>
        </form>
    </div>
</template>
