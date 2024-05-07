<script>
export default {
    name: 'PageHeader',
    props: {
        title: String,
        titleSingular: String,
        addRoute: String,
        cancelRoute: String,
        itemCount: Number,
        itemLabel: String,
        placeholderText: String,
        showSearchField: {
            type: Boolean,
            default: true
        },
        showAmountField: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: false
        },
        showAddButton: {
            type: Boolean,
            default: true
        }
    },
    emits: ['search'],
    data() {
        return {
            searchQuery: ''
        }
    },
    watch: {
        searchQuery(newVal) {
            this.$emit('search', newVal);
        },
    }
}
</script>

<template>
    <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex space-x-8 items-center">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-2xl font-medium text-gray-800">{{ title }}</h2>
                    <span class="px-3 py-1 text-sm text-orange-600 font-medium bg-orange-100 rounded-full" v-if="showAmountField">{{ itemCount
                        }}
                        {{
                            itemLabel }}</span>
                </div>
            </div>
            <div class="relative flex items-center mt-4 md:mt-0" v-if="showSearchField">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input type="text" v-model="searchQuery" :placeholder="placeholderText"
                    class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
        </div>
        <div class="flex space-x-6">
            <RouterLink :to="cancelRoute" v-if="showCancelButton"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-gray-600 font-medium transition-colors duration-200 border border-solid border-gray-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-100">
                Cancel
            </RouterLink>
            <RouterLink :to="addRoute" v-if="showAddButton"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Add {{ titleSingular }}
            </RouterLink>
        </div>
    </div>
</template>