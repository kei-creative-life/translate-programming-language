/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
      },
      backgroundImage: {
        'main-blue': 'linear-gradient(10deg,#005baa,#2ab0f0)',
      },
      colors: {
        'main-gray': "#edf2f9",
        'sub-blue': '#2589d0',
      },
      fontFamily: {
        "main": ["ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ","Meiryo", "Meiryo UI", "sans-serif"]
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  darkMode: 'class',
}
