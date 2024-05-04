<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import OverviewTable from '@/components/AdminDashboard/OverviewTable.vue';
import Pagination from '@/components/AdminDashboard/Pagination.vue';
import AdminProductsPageService from '@/modules/AdminProductsPage/Services/AdminProductsPageService';

export default {
    name: 'AdminProductsPage',
    components: {
        PageHeader,
        OverviewTable,
        Pagination
    },
    data() {
        return {
            service: new AdminProductsPageService(),
            products: [],
            paginationLinks: [],
            filterOptions: {
                sorting: 'default',
                itemCount: '9'
            },
            headers: [
                { key: 'media', text: 'Picture' },
                { key: 'sku', text: 'SKU' },
                { key: 'name', text: 'Name' },
                { key: 'brand.name', text: 'Brand' },
                { key: 'category.name', text: 'Category' },
                { key: 'stock', text: 'Quantity' },
                { key: 'price', text: 'Price' },
                { key: 'status', text: 'Status' },
            ],
        }
    },
    watch: {
        filterOptions(newValue, oldValue) {
            this.fetchProducts();
        }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts(url) {
            const response = url ? await this.service.fetchPaginatedProducts(url) : await this.service.allProducts(this.filterOptions);
            this.products = response.data;
            this.paginationLinks = response.links;
        },
    }
}
</script>

<template>
    <main>
        <section>
            <PageHeader title="Products" :itemCount="products.length" itemLabel="products" />
            <OverviewTable :headers="headers" :rows="products" />
            <Pagination :links="paginationLinks" @change-page="fetchProducts" />
        </section>
    </main>
</template>