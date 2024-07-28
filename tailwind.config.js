/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Electrolize', 'sans-serif'],
                sans: ['Roboto', 'sans-serif'],
            },
            gridTemplateColumns: {
                '70/30': '70% 30%',
            },
            colors: {
                background: '#154B55',
                white: '#FFFFFF',
                headline: '#A2C72E',
                accent: '#F2A365',
                menu: '#103B43',
                menu_hover: '#154B55',
                menu_active: '#0C2F36',
                red: '#F59E9E',
                redLight: 'rgba(191,46,46,0.2)',
                green: '#6BC940',
                greenLight: 'rgba(82,160,45,0.1)',
                yellow: '#d8b910',
                yellowLight: 'rgba(216,185,16,0.1)',
            },
        },
    },
    plugins: [],
}