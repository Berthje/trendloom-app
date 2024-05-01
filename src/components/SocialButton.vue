<script>
import { FaFacebookF, FaGoogle } from 'vue3-icons/fa';

export default {
    name: 'SocialButton',
    props: {
        platform: String,
        buttonText: String,
    },
    computed: {
        iconComponent() {
            if (this.platform === 'Facebook') {
                return FaFacebookF;
            } else if (this.platform === 'Google') {
                return FaGoogle;
            }
        }
    }
}
</script>

<template>
    <button
        class="w-full border-2 border-black border-solid bg-white text-black py-2 flex items-center justify-center hover:text-white"
        :class="{ 'hover:bg-blue-700': platform === 'Facebook', 'hover:bg-yellow-600': platform === 'Google' }">
        <component :is="iconComponent" size="18" class="mr-4" />
        {{ buttonText }} {{$t('with')}} {{ platform }}
    </button>
</template>
