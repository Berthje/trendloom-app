<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import OverviewTable from '@/components/AdminDashboard/OverviewTable.vue';
import Pagination from '@/components/AdminDashboard/Pagination.vue';
import AdminBrandsPageService from '@/modules/AdminBrandsPage/Services/AdminBrandsPageService';

export default {
    name: 'AdminBrandsPage',
    components: {
        PageHeader,
        OverviewTable,
        Pagination
    },
    data() {
        return {
            service: new AdminBrandsPageService(),
            brands: [],
            paginationLinks: [],
            filterOptions: {
                sorting: 'default',
                itemCount: '9'
            },
            headers: [
                { key: 'media', text: 'Logo' },
                { key: 'name', text: 'Name' },
                { key: 'description', text: 'Description' },
            ],
        }
    },
    watch: {
        filterOptions(newValue, oldValue) {
            this.fetchBrands();
        }
    },
    created() {
        this.fetchBrands();
    },
    methods: {
        async fetchBrands(url) {
            const response = url ? await this.service.fetchPaginatedData(url) : await this.service.allBrands(this.filterOptions);
            this.brands = response.data;
            this.paginationLinks = response.links;
        },
        async deleteBrand(brandId) {
            const response = await this.service.deleteBrand(brandId);

            if (response.status === 204) {
                this.fetchBrands();
            }
        }
    }
}
</script>

<template>
    <main>
        <section>
            <PageHeader title="Brands" :itemCount="brands.length" itemLabel="brands" />
            <OverviewTable v-if="brands.length > 0" :headers="headers" :rows="brands"
                @delete-row="deleteBrand" />
            <Pagination v-if="brands.length > 0" :links="paginationLinks" @change-page="fetchBrands" />
            <p class="mt-4" v-else>No brands found.</p>
        </section>
    </main>
</template>