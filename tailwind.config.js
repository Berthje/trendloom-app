/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url('./src/assets/model-hero.avif')",
                "category-men-header-image":
                    "url('./src/assets/category-header-men.avif')",
            }
        },
        fontFamily: {
            home: ["Inconsolata", "Inter", "sans-serif"],
            sans: ["Inter", "sans-serif"],
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
