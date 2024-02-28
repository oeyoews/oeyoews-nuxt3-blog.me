// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-icon', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    experimental: {
      // search: true,
    },
    highlight: {
      langs: ['js', 'javascript', 'ts', 'tsx', 'typescript', 'css', 'html'],
      theme: {
        default: 'one-dark-pro',
        // dark: 'github-dark-dimmed',
        // light: 'github-dark-dimmed',
      },
    },
  },
});
