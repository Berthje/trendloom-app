<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import OverviewTable from '@/components/AdminDashboard/OverviewTable.vue';
import Pagination from '@/components/AdminDashboard/Pagination.vue';
import AdminCategoriesPageService from '@/modules/AdminCategoriesPage/Services/AdminCategoriesPageService';

export default {
    name: 'AdminCategoriesPage',
    components: {
        PageHeader,
        OverviewTable,
        Pagination
    },
    data() {
        return {
            service: new AdminCategoriesPageService(),
            categories: [],
            paginationLinks: [],
            filterOptions: {
                sorting: 'default',
                itemCount: '9'
            },
            headers: [
                { key: 'media', text: 'Picture' },
                { key: 'name', text: 'Name' },
                { key: 'description', text: 'Description' },
            ],
        }
    },
    watch: {
        filterOptions(newValue, oldValue) {
            this.fetchCategories();
        }
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        async fetchCategories(url) {
            const response = url ? await this.service.fetchPaginatedData(url) : await this.service.allCategories(this.filterOptions);
            this.categories = response.data;
            this.paginationLinks = response.links;
        },
        async deleteCategory(categoryId) {
            const response = await this.service.deleteCategory(categoryId);

            if (response.status === 204) {
                this.fetchCategories();
            }
        },
        editCategory(category) {
            this.$router.push({name: 'adminEditCategory', params: {id: category.id}});
        }
    }
}
</script>

<template>
    <main>
        <section>
            <PageHeader title="Categories" titleSingular="category" addRoute="/admin/categories/add"
                :itemCount="categories.length" itemLabel="categories" :showSearchField="false" />
            <OverviewTable v-if="categories.length > 0" :headers="headers" :rows="categories"
                @delete-row="deleteCategory" @edit="editBrand"/>
            <Pagination v-if="categories.length > 0" :links="paginationLinks" @change-page="fetchCategories" />
            <p class="mt-4" v-else>No categories found.</p>
        </section>
    </main>
</template>