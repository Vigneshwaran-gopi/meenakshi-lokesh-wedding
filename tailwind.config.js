/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#d2ded0',
          DEFAULT: '#A9B9A0',
          dark: '#7e9174',
        },
        forest: {
          DEFAULT: '#254B35',
          dark: '#173323',
          light: '#356348',
        },
        ivory: {
          DEFAULT: '#FAF8EF',
          warm: '#F3EEDC',
          cream: '#F7F3E7',
        },
        blush: {
          light: '#f7d8df',
          DEFAULT: '#E8B9C1',
          dark: '#cf959f',
        },
        burgundy: {
          DEFAULT: '#862D46',
          dark: '#601f31',
          light: '#a33d59',
        },
        gold: {
          light: '#dfc491',
          DEFAULT: '#C7A66A',
          dark: '#9E7B3B',
          deep: '#785b24',
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sway-slow': 'sway 6s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
