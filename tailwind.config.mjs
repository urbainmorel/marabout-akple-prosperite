/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mystique: {
          nuit: '#ffffff',
          encre: '#f8fafc',
          voile: '#ffffff',
          lune: '#0f172a',
          brume: '#475569',
          trait: 'rgba(15, 23, 42, 0.08)',
          accent: '#dc2626',
          accentHover: '#b91c1c',
          emerald: '#16a34a',
          emeraldHover: '#15803d',
          deep: '#f1f5f9',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 10px 25px -5px rgba(220, 38, 38, 0.25)',
        'emerald-glow': '0 10px 25px -5px rgba(22, 163, 74, 0.25)',
        'mystique-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
        'astre-glow': '0 0 120px 25px rgba(239, 68, 68, 0.2)',
      },
      keyframes: {
        respire: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 70px 15px rgba(239, 68, 68, 0.15)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 110px 30px rgba(239, 68, 68, 0.25)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(22, 163, 74, 0.25)' },
          '50%': { boxShadow: '0 0 35px rgba(22, 163, 74, 0.5)' },
        },
      },
      animation: {
        respire: 'respire 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
