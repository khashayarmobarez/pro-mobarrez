import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent-color)',
        secondary: 'var(--secondary-color)',
        warning: 'var(--warning-color)',
        error: 'var(--error-color)',
        success: 'var(--success-color)',
        info: 'var(--info-color)',
        disabled: 'var(--disabled-color)',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.025em',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(var(--angle)) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(var(--angle)) translateX(-500px)', opacity: '0' },
        },
        zezzz: {
          '0%, 10%': { backgroundPosition: '-400px' },
          '20%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: '400px' },
        },
      },
      animation: {
        meteor: 'meteor 5s linear infinite',
        shine: 'zezzz 5s infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#00a3ff',
          secondary: '#39ff14',
          accent: '#00a3ff',
          neutral: '#f1f1f1',
          'base-100': '#1a1a1a',
          'base-200': '#2a2a2a',
          'base-300': '#3a3a3a',
          info: '#66b3ff',
          success: '#39ff14',
          warning: '#ffaa33',
          error: '#ff6666',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
} satisfies Config;