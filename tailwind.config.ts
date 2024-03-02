import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.ts',
    './assets/css/global.css',
  ],
  theme: {
    colors: {
      dimmed: {
        100: '#cdd9e5',
        200: '#d0d7de',
        700: '#444c56',
        800: '#2d333b',
        900: '#1c2128',
      },
    },
    extend: {
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            h1: {
              marginTop: '1.3em',
            },
            li: {
              margin: 0,
            },
            img: {
              margin: 'auto',
              borderRadius: theme('borderRadius.lg'),
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
      }),
    },
  },
  darkMode: 'media',
  plugins: [typography],
} satisfies Config;
