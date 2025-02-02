/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2A2A72',
        secondary: '#009FFD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0, 159, 253, 0)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 159, 253, 0.3)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s infinite',
        'glow': 'glow 2s infinite',
      }
    },
  },
  plugins: [],
};