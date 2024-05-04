<script>
export default {
    name: 'PageHeader',
    props: {
        title: String,
        itemCount: Number,
        itemLabel: String,
    },
}
</script>

<template>
    <div class="flex items-center gap-x-3">
        <h2 class="text-2xl font-medium text-gray-800">{{ title }}</h2>
        <span class="px-3 py-1 text-sm text-orange-600 font-medium bg-orange-100 rounded-full">{{ itemCount }} {{ itemLabel }}</span>
    </div>
</template>