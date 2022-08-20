/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'media',
  content: ["./src/**/*.{html,js,jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'images': "url('./utility/bg-image.png')",
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
