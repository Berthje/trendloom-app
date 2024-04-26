<script>
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'vue3-icons/fa';

export default {
    components: {
        FaFacebookF,
        FaInstagram,
        FaYoutube,
        FaTelegramPlane
    }
}
</script>
<template>
    <div class="flex space-x-6">
        <a href="#" class="hover:text-gray-400">
            <FaFacebookF size="20" />
        </a>
        <a href="#" class="hover:text-gray-400">
            <FaInstagram size="20" />
        </a>
        <a href="#" class="hover:text-gray-400">
            <FaYoutube size="20" />
        </a>
        <a href="#" class="hover:text-gray-400">
            <FaTelegramPlane size="20" />
        </a>
    </div>
</template>
