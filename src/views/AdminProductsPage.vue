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
    data() {
        return {
            headers: [
                { key: 'image', text: 'Picture' },
                { key: 'sku', text: 'SKU' },
                { key: 'name', text: 'Name' },
                { key: 'brand', text: 'Brand' },
                { key: 'category', text: 'Category' },
                { key: 'quantity', text: 'Quantity' },
                { key: 'price', text: 'Price' },
                { key: 'status', text: 'Status' },
            ],
            products: [
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    sku: 'NIKE-AIR270',
                    name: 'Nike Air 1"07',
                    brand: 'Nike',
                    category: 'Shoes',
                    quantity: 1468,
                    price: '€129.99',
                    status: 'Active'
                },
            ]
        }
    }
}
</script>

<template>
    <main>
        <section>
            <PageHeader title="Products" :itemCount="12" itemLabel="products" />
            <OverviewTable :headers="headers" :rows="products" />
            <Pagination />
        </section>
    </main>
</template>