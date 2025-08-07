export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        maroon: {
          light: '#500000',
          DEFAULT: '#3B0000',
          dark: '#2B0000',
          darker: '#1A0000'
        }
      }
    },
  },
}