/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System - Primary Colors (berdasarkan spec: blue accent #3fa9f5)
        brand: {
          dark: '#07080d',      // --bg (background)
          darker: '#0d0f18',    // --bg2 (secondary bg)
          darkest: '#12141f',   // --bg3 (card bg)
          gold: '#3fa9f5',      // --gold (primary accent - blue sesuai PRD)
          'gold-light': '#7cc4ff', // --gold-lt (light blue)
          'gold-glow': 'rgba(63,169,245,0.18)', // --gold-glow
          accent: '#4e9eff',    // --accent (secondary blue)
          text: '#e8e6df',      // --text (primary text)
          muted: '#7a7970',     // --muted (secondary text)
          border: 'rgba(255,255,255,0.08)', // --border
          card: 'rgba(255,255,255,0.035)',  // --card
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Karla', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Typography Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        // 8px Grid System
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '2.5rem',    // 40px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'full': '50%',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'gold-glow': '0 0 20px rgba(63, 169, 245, 0.35)',
        'accent-glow': '0 0 20px rgba(78, 158, 255, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '600': '600ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}
