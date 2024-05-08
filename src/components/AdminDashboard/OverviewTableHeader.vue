<script>
export default {
    name: 'TableHeader',
    props: {
        header: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
        <div class="flex items-center gap-x-3">
            <span>{{ header.text }}</span>
        </div>
    </th>
</template>

