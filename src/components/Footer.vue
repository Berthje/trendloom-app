<script setup>
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'vue3-icons/fa';
</script>

<template>
    <footer class="font-sans">
        <div class="rotate-180">
            <svg class="h-10 w-full" fill="#1e1e1e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                preserveAspectRatio="none">
                <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
        </div>
        <section class="bg-[#1e1e1e] text-white p-4">
            <section class="flex flex-wrap">
                <div class="w-full mb-8">
                    <img src="../assets/logo-white.svg" class="w-40 mb-4" alt="logo" />
                    <p class="text-[#CDCDCD] text-[0.95rem] mb-4">A best collection made entirely recycled and sustainable.</p>
                    <div class="flex space-x-6">
                        <a href="#">
                            <FaFacebookF size="20"/>
                        </a>
                        <a href="#">
                            <FaInstagram size="20"/>
                        </a>
                        <a href="#">
                            <FaYoutube size="20"/>
                        </a>
                        <a href="#">
                            <FaTelegramPlane size="20"/>
                        </a>
                    </div>
                </div>
                <div class="w-1/2 pb-10">
                    <h3 class="uppercase font-home font-extrabold pb-4">Support</h3>
                    <ul class="flex flex-col space-y-2 text-[0.925rem]">
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">Size Guide</a>
                        </li>
                        <li>
                            <a href="#">Shipping & Return</a>
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 pb-10">
                    <h3 class="uppercase font-home font-extrabold pb-4">Shop</h3>
                    <ul class="flex flex-col space-y-2 text-[0.925rem]">
                        <li>
                            <a href="#">Men's Shopping</a>
                        </li>
                        <li>
                            <a href="#">Women's Shopping</a>
                        </li>
                        <li>
                            <a href="#">Kids' Shopping</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 pb-10">
                    <h3 class="uppercase font-home font-extrabold pb-4">Company</h3>
                    <ul class="flex flex-col space-y-2 text-[0.925rem]">
                        <li>
                            <a href="#">Our Story</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy & Cookie Policy</a>
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 pb-10">
                    <h3 class="uppercase font-home font-extrabold pb-4">Contact</h3>
                    <ul class="flex flex-col space-y-2 text-[0.925rem]">
                        <li>
                            <a href="tel:04789147">BE (+32) 478 91 47</a>
                        </li>
                        <li>
                            <a href="tel:01567345">US (+22) 156 7345</a>
                        </li>
                        <li>
                            <a href="mailto:support@trendloom.com">support@trendloom.com </a>
                        </li>
                        <li>
                            <a href="mailto:sales@trendloom.com">sales@trendloom.com</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <p>Copyright © 2024 Trendloom. Created by <a href="https://www.laytonberth.com" target="blank">Layton Berth</a></p>
                <img src="../assets/payment-methods.png" alt="payment methods">
            </section>
        </section>
    </footer>
</template>
