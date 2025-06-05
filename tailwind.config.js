/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Royal Blue
          light: '#3373C4',
          dark: '#003A8C',
        },
        secondary: {
          DEFAULT: '#6B7280', // Cool Gray
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        accent: {
          DEFAULT: '#36B37E', // Green
          light: '#57D9A3',
          dark: '#2A8C62',
        },
        warning: {
          DEFAULT: '#FBBF24', // Amber
          light: '#FCD34D',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444', // Red
          light: '#F87171',
          dark: '#B91C1C',
        },
        success: {
          DEFAULT: '#10B981', // Emerald
          light: '#34D399',
          dark: '#059669',
        },
        highlight: {
          DEFAULT: '#FF7D00', // Orange
          light: '#FF9A3D',
          dark: '#CC6400',
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};