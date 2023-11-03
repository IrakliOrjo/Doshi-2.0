/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/[locale]/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/[locale]/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       backgroundImage: {
        pattern: "url('/bg.jpg')",
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
  
  
     screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    
  },
  plugins: [],
}