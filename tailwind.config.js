/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07111e',
          900: '#0b192c',
          850: '#0f223d',
          800: '#142c4e',
          700: '#1e3e62',
          600: '#2a5584',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        champagne: {
          50: '#fbf8ee',
          100: '#f6f0d7',
          200: '#eddcae',
          300: '#e1c37d',
          400: '#d4af37',
          500: '#c59d28',
          600: '#aa7e1f',
        },
        medical: {
          blue: '#0284c7',
          cyan: '#06b6d4',
          light: '#f0f9ff',
          surface: '#f8fafc',
          card: '#ffffff',
          dark: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 25, 44, 0.06), 0 2px 6px -2px rgba(11, 25, 44, 0.04)',
        'elevated': '0 12px 32px -4px rgba(11, 25, 44, 0.1), 0 4px 12px -2px rgba(11, 25, 44, 0.05)',
        'premium': '0 20px 40px -10px rgba(11, 25, 44, 0.12), 0 1px 3px rgba(0,0,0,0.05)',
        'glow-teal': '0 0 25px rgba(13, 148, 136, 0.25)',
        'glow-navy': '0 10px 30px rgba(11, 25, 44, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
