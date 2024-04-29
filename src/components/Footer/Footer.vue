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
                { text: 'Contact us', href: '#' },
                { text: 'FAQs', href: '#' },
                { text: 'Size Guide', href: '#' },
                { text: 'Shipping & Return', href: '#' },
            ],
            shopLinks: [
                { text: 'Men\'s Shopping', to: '/men' },
                { text: 'Women\'s Shopping', to: '/women' },
                { text: 'Kids\' Shopping', to: '/kids' },
                { text: 'Contact', to: '/contact' },
            ],
            companyLinks: [
                { text: 'Our Story', href: '#' },
                { text: 'Careers', href: '#' },
                { text: 'Terms & Conditions', href: '#' },
                { text: 'Privacy & Cookie Policy', href: '#' },
            ],
            contactLinks: [
                { text: 'BE (+32) 478 91 47', href: 'tel:04789147' },
                { text: 'US (+22) 156 7345', href: 'tel:01567345' },
                { text: 'support@trendloom.com', href: 'mailto:support@trendloom.com' },
                { text: 'sales@trendloom.com', href: 'mailto:sales@trendloom.com' },
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
                    <FooterLinks title="Support" :links="supportLinks" />
                    <FooterLinks title="Shop" :links="shopLinks" />
                    <FooterLinks title="Company" :links="companyLinks" />
                    <FooterLinks title="Contact" :links="contactLinks" />
                </section>
                <CopyrightSection />
            </div>
        </section>
    </footer>
</template>
