/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
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
}
