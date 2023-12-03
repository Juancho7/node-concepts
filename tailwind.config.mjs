/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'green-yellow': {
          50: '#f6ffe5',
          100: '#e8ffc7',
          200: '#d1ff95',
          300: '#b2fe58',
          400: '#99f532',
          500: '#73db07',
          600: '#57af01',
          700: '#428506',
          800: '#37690b',
          900: '#2f580f',
          950: '#163102',
        },
      },
    },
  },
  plugins: [],
};
