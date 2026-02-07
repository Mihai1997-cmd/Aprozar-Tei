/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#0F4D3A',
        'secondary-green': '#1E6B4E',
        'cream': '#F6F1E6',
        'warm-beige': '#E7D9C3',
        'dark': '#1F2A24',
        'accent': '#B07A3C',
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      scale: {
        '98': '0.98',
      },
      transitionDuration: {
        '700': '700ms',
      },
    },
  },
  plugins: [],
};
