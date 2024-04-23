<script setup>
import LogoDescription from './LogoDescription.vue'
</script>

<template>
    <footer class="font-sans">
        <div class="rotate-180">
            <svg class="h-10 w-full" fill="#1e1e1e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                preserveAspectRatio="none">
                <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
        </div>
        <section class="bg-[#1e1e1e] text-white px-4 pt-16">
            <div class="max-w-screen-xl w-full mx-auto">
                <section class="flex flex-wrap">
                    <LogoDescription />
                    <div class="w-1/2 pb-12 lg:w-1/5">
                        <h3 class="uppercase font-home font-extrabold pb-4">Support</h3>
                        <ul class="flex flex-col space-y-2 text-[0.925rem]">
                            <li class="hover:text-gray-400">
                                <a href="#">Contact us</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">FAQs</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">Size Guide</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">Shipping & Return</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/2 pb-12 lg:w-1/5">
                        <h3 class="uppercase font-home font-extrabold pb-4">Shop</h3>
                        <ul class="flex flex-col space-y-2 text-[0.925rem]">
                            <li class="hover:text-gray-400">
                                <RouterLink to="/men">Men's Shopping</RouterLink>
                            </li>
                            <li class="hover:text-gray-400">
                                <RouterLink to="/women">Women's Shopping</RouterLink>
                            </li>
                            <li class="hover:text-gray-400">
                                <RouterLink to="/children">Kids' Shopping</RouterLink>
                            </li>
                            <li class="hover:text-gray-400">
                                <RouterLink to="/contact">Contact</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/2 pb-12 lg:w-1/5">
                        <h3 class="uppercase font-home font-extrabold pb-4">Company</h3>
                        <ul class="flex flex-col space-y-2 text-[0.925rem]">
                            <li class="hover:text-gray-400">
                                <a href="#">Our Story</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">Careers</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="#">Privacy & Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/2 pb-12 lg:w-1/5">
                        <h3 class="uppercase font-home font-extrabold pb-4">Contact</h3>
                        <ul class="flex flex-col space-y-2 text-[0.925rem]">
                            <li class="hover:text-gray-400">
                                <a href="tel:04789147">BE (+32) 478 91 47</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="tel:01567345">US (+22) 156 7345</a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="mailto:support@trendloom.com">support@trendloom.com </a>
                            </li>
                            <li class="hover:text-gray-400">
                                <a href="mailto:sales@trendloom.com">sales@trendloom.com</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="py-6 border-t border-solid border-[#383838] text-center text-[#CDCDCD]">
                    <p class="mb-4">Copyright © 2024 Trendloom. Created by <a href="https://www.laytonberth.com"
                            target="blank">Layton Berth</a></p>
                    <img class="inline-block" src="../../assets/payment-methods.png" alt="payment methods">
                </section>
            </div>
        </section>
    </footer>
</template>
