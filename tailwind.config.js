/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        premation: {
          base: '#000000',
          muted: '#212123',
          raised: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
          accent: '#2988ff',
          accentHover: '#1f73dc',
          accentSoft: 'rgba(41, 136, 255, 0.12)',
          textPrimary: '#a6a6a6',
          textSecondary: '#e1e1e1',
          textInverse: '#8c8c8c',
        },
        dub: {
          bg: '#000000',
          card: '#212123',
          surface: '#212123',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#a6a6a6',
          dim: '#8c8c8c',
          brand: '#2988ff',
          brandHover: '#1f73dc',
        },
      },
      borderRadius: {
        xs: '3px',
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        'accent-inset': 'rgb(41, 136, 255) 2px 0px 0px 0px inset',
        'accent-bottom': 'rgb(41, 136, 255) 0px -2px 0px 0px inset',
      },
      transitionDuration: {
        instant: '150ms',
        fast: '200ms',
        normal: '300ms',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Geist', 'Geist Fallback', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
