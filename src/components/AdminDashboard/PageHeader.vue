<script>
export default {
    name: 'PageHeader',
    props: {
        title: String,
        titleSingular: String,
        itemCount: Number,
        itemLabel: String,
    },
}
</script>

<template>
    <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-2xl font-medium text-gray-800">{{ title }}</h2>
                <span class="px-3 py-1 text-sm text-orange-600 font-medium bg-orange-100 rounded-full">{{ itemCount }}
                    {{
                        itemLabel }}</span>
            </div>
        </div>
        <button
            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Add {{ titleSingular}}</span>
        </button>
    </div>
</template>