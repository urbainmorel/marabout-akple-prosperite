/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mystique: {
          nuit: '#0a0912',
          encre: '#120f1d',
          voile: '#1b1729',
          lune: '#efeaf7',
          brume: '#b4aecb',
          trait: 'rgba(190, 175, 255, 0.14)',
          accent: '#a99bff',
          accentHover: '#c8bdff',
          emerald: '#74d3c4',
          emeraldHover: '#95e3d7',
          deep: '#06050b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(169, 155, 255, 0.35)',
        'emerald-glow': '0 0 30px rgba(116, 211, 196, 0.4)',
        'mystique-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(190, 175, 255, 0.14)',
        'astre-glow': '0 0 140px 30px rgba(130, 110, 255, 0.28)',
      },
      keyframes: {
        respire: {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)', boxShadow: '0 0 140px 30px rgba(130, 110, 255, 0.28)' },
          '50%': { transform: 'translateY(-52%) scale(1.03)', boxShadow: '0 0 190px 50px rgba(130, 110, 255, 0.38)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(116, 211, 196, 0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(116, 211, 196, 0.65)' },
        },
      },
      animation: {
        respire: 'respire 9s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
