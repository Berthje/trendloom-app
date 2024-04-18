<script setup>
import { HiOutlineShoppingBag } from "vue3-icons/hi2";
</script>

<template>
    <header>
        <nav>
            <div>
                <h1>TrendLoom</h1>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                <input type="search" placeholder="Search a product">
                <div>
                    <HiOutlineShoppingBag size="20"/>
                    <p>0</p>
                </div>
                <a href="#">Login</a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
</style>
