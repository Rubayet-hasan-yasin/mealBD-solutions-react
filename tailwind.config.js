/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ed8be3",
        
"secondary": "#2bce46",
        
"accent": "#edd731",
        
"neutral": "#352438",
        
"base-100": "#353A40",
        
"info": "#619FE0",
        
"success": "#117955",
        
"warning": "#E19005",
        
"error": "#F4103E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

