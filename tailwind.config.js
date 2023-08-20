/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'verde_folha': '#4c8f36',
        'verde_escuro': '#00371b', 
        'amarelo_areia': '#f8f0df', 
        'preto': '#333333',
      },
    },
  },
  plugins: [],
}

