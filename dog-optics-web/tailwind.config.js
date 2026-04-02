/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pawpurple: {
          DEFAULT: '#9B5CF6',
          light: '#C4B5FD',
          dark: '#7C3AED',
        },
        pawlavender: '#EDE9FE',
        pawcream: '#FFFBF5',
        pawgold: '#F59E0B',
        pawdark: '#1E1B4B',
        pawgray: '#6B7280',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(155, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(155, 92, 246, 0)' },
        },
      },
    },
  },
  plugins: [],
}
