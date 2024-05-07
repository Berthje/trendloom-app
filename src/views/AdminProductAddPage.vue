<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';

export default {
    name: 'AdminProductAddPage',
    components: {
        PageHeader
    },
}
</script>

<template>
    <main>
        <PageHeader title="Add product" titleSingular="product" cancelRoute="/admin/products" :showSearchField="false" :showAmountField="false" :showCancelButton="true" />
    </main>
</template>
