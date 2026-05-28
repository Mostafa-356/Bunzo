import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-dark': '#059669',
        'primary-light': '#34d399',
        // Override default blue/indigo with emerald
        blue: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        indigo: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'public-sans': ['Public Sans', 'monospace'],
      },
      backgroundImage: {
        'gradient-bunzo-primary': 'linear-gradient(135deg, #10b981, #059669)',
        'gradient-bunzo-hero': 'linear-gradient(135deg, #064e3b, #10b981)',
        'community': "url('./src/assets/images/community_bg.png')",
      },
      rotate: {
        '30': '30deg',
      }
    },
  },
  plugins: [],
} satisfies Config