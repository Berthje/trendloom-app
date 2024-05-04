<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import OverviewTable from '@/components/AdminDashboard/OverviewTable.vue';
import Pagination from '@/components/AdminDashboard/Pagination.vue';

export default {
    name: 'AdminProductsPage',
    components: {
        PageHeader,
        OverviewTable,
        Pagination
    },
}
</script>

<template>
    <main>
        <section>
            <PageHeader title="Products" :itemCount="12" itemLabel="products" />
            <OverviewTable />
            <Pagination />
        </section>
    </main>
</template>