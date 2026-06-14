/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FAFAFA',
        muted: '#A1A1AA',
        'muted-foreground': '#71717A',
        primary: '#FAFAFA',
        'primary-foreground': '#000000',
        secondary: '#27272A',
        'secondary-foreground': '#FAFAFA',
        accent: '#67D243',
        card: '#1A1A1A',
        border: '#27272A',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'], // Approximation of IvoryLLWeb-Light
      },
      fontSize: {
        'display-large': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-default': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-small': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-large': ['1.125rem', { lineHeight: '1.5' }],
        'body-default': ['1rem', { lineHeight: '1.5' }],
        'body-small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '100': '25rem',
        '164': '41rem',
        '240': '60rem',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
