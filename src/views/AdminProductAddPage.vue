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
        <PageHeader title="Brands" titleSingular="brand" addRoute="/admin/brands/add" :showSearchField="false" :showAmountField="false" />
    </main>
</template>
