/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    '*.html',
    './public/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './multi-page-changer/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [ 
   'synthwave', 'acid'
  ],
  },
}

