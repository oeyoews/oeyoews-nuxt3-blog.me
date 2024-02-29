// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vite: {
  //   define: {
  //     'process.env': '{}',
  //   },
  // },

  typescript: {
    // typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/content', '@nuxt/image'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      ],
      script: [],
      noscript: [{ children: 'JavaScript is required' }],
      bodyAttrs: {
        class: 'text-black bg-white dark:text-[#cdd9e5] dark:bg-[#1c2128]',
      },
    },
  },
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
