/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': "url('./src/assets/model-hero.jpg')",
            }
        },
        fontFamily: {
            sans: ["Inconsolata", "sans-serif"],
        },
    },
    plugins: [],
};
