<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import InputField from '../components/InputField.vue';
import AdminCategoriesPageService from '@/modules/AdminCategoriesPage/Services/AdminCategoriesPageService';

export default {
    name: 'AdminCategoryAddPage',
    components: {
        PageHeader,
        InputField
    },
    data() {
        return {
            service: new AdminCategoriesPageService(),
            languages: ['en', 'nl', 'fr'],
            category: {},
        }
    },
    created() {
        this.languages.forEach(lang => {
            this.category[lang] = { category_name: '', category_description: '' };
        });
    },
    methods: {
        async addCategory() {
            const languages = {};
            for (const lang in this.category) {
                languages[lang] = {
                    name: this.category[lang].category_name,
                    description: this.category[lang].category_description
                };
            }

            const response = await this.service.addCategory({
                name: this.category['en'].category_name,
                description: this.category['en'].category_description,
                languages: languages
            });

            if (response.status === 201) {
                this.$router.push('/admin/categories');
            }
        }
    }
}
</script>

<template>
    <main>
        <PageHeader title="Add category" titleSingular="category" cancelRoute="/admin/categories"
            :showSearchField="false" :showAmountField="false" :showCancelButton="true" :showAddButton="false" />
        <form @submit.prevent="addCategory">
            <section class="mt-7 mb-8" v-for="lang in languages" :key="lang">
                <h2 class="font-bold text-2xl mb-2">General information ({{ lang.toUpperCase() }})</h2>
                <div class="flex space-x-8">
                    <InputField id="category_name" label="Name" placeholder="Type category name here..."
                        errorMessage="Category name must be filled in." status="default" type="text" class="w-1/3"
                        v-model="category[lang].category_name" />
                    <InputField id="category_description" label="Description"
                        placeholder="Type category description here..."
                        errorMessage="Category description must be filled in." status="default" type="text"
                        class="w-full" v-model="category[lang].category_description" />
                </div>
            </section>
            <button type="submit"
                class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-orange-500">Add
                category</button>
        </form>
    </main>
</template>
