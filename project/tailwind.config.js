/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0c0d',
          900: '#111416',
          800: '#1a1e21',
          700: '#252b2f',
          600: '#363d42',
          500: '#4a5358',
          400: '#6b7479',
          300: '#959da2',
          200: '#c4cacd',
          100: '#e3e6e8',
          50: '#f4f5f6',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        steel: {
          50: '#f0f4f6',
          100: '#dfe7ea',
          200: '#bcc9cf',
          300: '#94a6ad',
          400: '#6d8088',
          500: '#52666e',
          600: '#3f5057',
          700: '#334148',
          800: '#2a353b',
          900: '#1e272b',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
