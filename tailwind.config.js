/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'morph': 'morph 15s ease-in-out infinite',
        'particle': 'particle-float 8s ease-in-out infinite',
        'star': 'star-twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}