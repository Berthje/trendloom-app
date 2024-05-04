<script>
export default {
    name: 'OverviewTable',
    props: {
        headers: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    },
    methods: {
        getNestedProperty(row, headerKey) {
            const keys = headerKey.split('.');
            let value = keys.reduce((obj, key) => obj && obj[key], row);

            if (Array.isArray(value) && keys[keys.length - 1] === 'media') {
                const primaryImage = value.find(image => image.is_primary === 1);
                value = primaryImage ? primaryImage.image_url : null;
            }

            if (typeof value === 'object' && value !== null && keys[keys.length - 1] === 'media') {
                value = value.image_url;
            }

            if (Array.isArray(value) && keys[keys.length - 1] === 'stock') {
                value = value.reduce((total, stockItem) => total + stockItem.quantity_in_stock, 0);
            }

            return value;
        },
        deleteRow(rowId) {
            this.$emit('delete-row', rowId)
        }
    }
}
</script>

<template>
    <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th v-for="header in headers" :key="header.key" scope="col"
                                    class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                    <div class="flex items-center gap-x-3">
                                        <span>{{ header.text }}</span>
                                    </div>
                                </th>
                                <th scope="col" class="sr-only">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="row in rows" :key="row.id" class="even:bg-gray-50 odd:bg-white">
                                <td v-for="header in headers" :key="header.key"
                                    class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div v-if="(header.key === 'media' || header.key === 'logo_url') && getNestedProperty(row, header.key)"
                                        class="inline-flex items-center gap-x-3">
                                        <input type="checkbox" class="text-blue-500 border-gray-300 rounded">
                                        <img :src="getNestedProperty(row, header.key)" class="object-contain h-10 w-10"
                                            alt="primary overview of product" />
                                    </div>
                                    <div v-else-if="header.key === 'status'"
                                        class="inline-flex items-center px-3 py-1 rounded-full gap-x-2" :class="{
                                            'bg-emerald-100/60 text-emerald-500': row[header.key] === 'active',
                                            'bg-yellow-100/60 text-yellow-500': row[header.key] === 'draft',
                                            'bg-gray-100/60 text-gray-500': row[header.key] === 'hidden'
                                        }">
                                        <span class="h-1.5 w-1.5 rounded-full" :class="{
                                            'bg-emerald-500': row[header.key] === 'active',
                                            'bg-yellow-500': row[header.key] === 'draft',
                                            'bg-gray-500': row[header.key] === 'hidden'
                                        }"></span>
                                        <h2 class="text-sm font-normal">{{ row[header.key] }}</h2>
                                    </div>
                                    <span v-else>{{ getNestedProperty(row, header.key) }}</span>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center gap-x-5">
                                        <button
                                            class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                        <button
                                            class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                            @click="deleteRow(row.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>