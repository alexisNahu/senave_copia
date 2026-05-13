/** @type {import('tailwindcss').Config} */
export default {
    // 1. Aquí le decimos a Tailwind qué archivos escanear
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            colors: {
                azulMitic: '#00529b',
                rojoMitic: '#ee2d24',
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                petrona: ['Petrona', 'serif'],
                sacramento: ['Sacramento', 'cursive'],
            },
        },
    },
    plugins: [],
}
