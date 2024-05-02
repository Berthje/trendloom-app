<script>
import LogoDescription from './LogoDescription.vue'
import CopyrightSection from './CopyrightSection.vue'
import FooterLinks from './FooterLinks.vue'

export default {
    name: 'Footer',
    components: {
        LogoDescription,
        CopyrightSection,
        FooterLinks
    },
    data() {
        return {
            supportLinks: [
                { text: 'contact_us', href: '#' },
                { text: 'faqs', href: '#' },
                { text: 'size_guide', href: '#' },
                { text: 'shipping_return', href: '#' },
            ],
            shopLinks: [
                { text: 'mens_shopping', to: '/men' },
                { text: 'womens_shopping', to: '/women' },
                { text: 'kids_shopping', to: '/kids' },
                { text: 'contact', to: '/contact' },
            ],
            companyLinks: [
                { text: 'our_story', href: '#' },
                { text: 'careers', href: '#' },
                { text: 'terms_conditions', href: '#' },
                { text: 'privacy_cookie_policy', href: '#' },
            ],
            contactLinks: [
                { text: 'belgian_telephone_number', href: 'tel:04789147' },
                { text: 'usa_telephone_number', href: 'tel:01567345' },
                { text: 'support_email', href: 'mailto:support@trendloom.com' },
                { text: 'sales_email', href: 'mailto:sales@trendloom.com' },
            ]
        }
    }
}
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
                    <FooterLinks :title="$t('support')" :links="supportLinks" />
                    <FooterLinks :title="$t('shop')" :links="shopLinks" />
                    <FooterLinks :title="$t('company')" :links="companyLinks" />
                    <FooterLinks :title="$t('contact')" :links="contactLinks" />
                </section>
                <CopyrightSection />
            </div>
        </section>
    </footer>
</template>
