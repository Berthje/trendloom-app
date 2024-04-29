<script>
import SocialMediaLinks from './SocialMediaLinks.vue';

export default {
    name: 'LogoDescription',
    components: {
        SocialMediaLinks
    }
}
</script>
<template>
    <div class="w-full mb-8 lg:w-1/5">
        <img src="../../assets/logo-white.svg" class="w-40 mb-4" alt="logo" v-once />
        <p class="text-[#CDCDCD] text-[0.95rem] mb-4">A best collection made entirely recycled and sustainable.</p>
        <SocialMediaLinks />
    </div>
</template>
