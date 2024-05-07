<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import InputField from '../components/InputField.vue';

export default {
    name: 'AdminCategoryAddPage',
    components: {
        PageHeader,
        InputField
    }
}
</script>

<template>
    <main>
        <PageHeader title="Add category" titleSingular="category" cancelRoute="/admin/categories"
            :showSearchField="false" :showAmountField="false" :showCancelButton="true" />
        <section class="mt-7 mb-8">
            <h2 class="font-bold text-2xl mb-2">General information</h2>
            <div class="flex space-x-8">
                <InputField id="category_name" label="Name" placeholder="Type category name here..."
                    errorMessage="Category name must be filled in." status="default" type="text" class="w-1/3" />
                <InputField id="category_description" label="Description"
                    placeholder="Type category description here..."
                    errorMessage="Category description must be filled in." status="default" type="text"
                    class="w-full" />
            </div>
        </section>
        <section>
            <h2 class="font-bold text-2xl mb-2">Media</h2>
            <div class="border border-dashed border-gray-400 rounded-md text-center p-10">
                <h3 class="mb-4">Drag and drop images here, or click to add images.</h3>
                <button class="bg-black text-white px-2 py-1">Add images</button>
            </div>
        </section>
    </main>
</template>
