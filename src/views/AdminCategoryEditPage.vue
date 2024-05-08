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
            languages: ['en', 'nl'],
            category: {},
            parent_categories: [],
            selected_parent: null,
        }
    },
    created() {
        this.fetchCategory();
        this.fetchAllCategories();
    },
    methods: {
        async fetchCategory() {
            const id = this.$route.params.id;
            const data = await this.service.getCategory(id, this.languages);

            this.languages.forEach(lang => {
                this.category[lang] = {
                    category_name: data[lang].name,
                    category_description: data[lang].description,
                };
            });

            this.category.parent_category_id = data['en'].parent_category_id;
            this.selected_parent = data['en'].parent_category_id;
        },
        async saveCategory() {
            const languages = {};

            for (const lang in this.category) {
                if (this.languages.includes(lang)) {
                    languages[lang] = {
                        name: this.category[lang].category_name,
                        description: this.category[lang].category_description,
                    };
                }
            }

            const data = {
                id: this.$route.params.id,
                name: this.category['en'].category_name,
                description: this.category['en'].category_description,
                parent_category_id: this.selected_parent,
                languages: languages
            };

            console.log(data)
        },
        async fetchAllCategories() {
            const response = await this.service.allCategories({ "itemCount": "1000" });
            this.parent_categories = response.data;
        },
    }
}
</script>

<template>
    <main>
        <PageHeader title="Add category" titleSingular="category" cancelRoute="/admin/categories"
            :showSearchField="false" :showAmountField="false" :showCancelButton="true" :showAddButton="false" />
        <form @submit.prevent="saveCategory">
            <section class="mt-7 mb-8" v-for="lang in languages" :key="lang">
                <h2 class="font-bold text-2xl mb-2">General information ({{ lang.toUpperCase() }})</h2>
                <div class="flex space-x-8">
                    <InputField id="category_name" label="Name" placeholder="Type category name here..."
                        errorMessage="Category name must be filled in." status="default" type="text" class="w-1/3"
                        v-model="category[lang].category_name" />
                    <div>
                        <label for="parent_category_id" class="text-sm font-bold">Category parent</label>
                        <select name="parent_category_id" id="parent_category_id"
                            class="bg-gray-100 border-b-2 border-solid border-gray-300 h-[2.6rem] px-2"
                            v-model="selected_parent">
                            <option value="">Select parent category</option>
                            <option v-for="parent in parent_categories" :value="parent.id">{{ parent.name }}</option>
                        </select>
                    </div>
                    <InputField id="category_description" label="Description"
                        placeholder="Type category description here..."
                        errorMessage="Category description must be filled in." status="default" type="text"
                        class="w-full" v-model="category[lang].category_description" />
                </div>
            </section>
            <button type="submit"
                class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-orange-500">Save
                category</button>
        </form>
    </main>
</template>
