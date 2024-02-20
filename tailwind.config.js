/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                customFont: ['"Archivo"', "sans-serif"],
            },
            colors: {
                red: '#FA675F',
                green: '#08CC7B',
                secondaryGreen: '#33CC33',
                yellow: '#FFD362',
                cyan: '#20E7F3',
                blue: '#197CD8',
                veryLightGrey: '#DEDEDE',
                lightGrey: '#8A8A8A',
                lightMediumGrey: '#444444',
                mediumGrey: '#313131',
                darkGrey: '#272727',
            },
        }
    },
    plugins: []
};