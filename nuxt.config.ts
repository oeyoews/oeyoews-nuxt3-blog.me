// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*   vite: {
    define: {
      'process.env': '{}',
    },
  }, */
  ssr: true,
  runtimeConfig: {
    GITHUB_TOKEN: '',
    public: {
      apiBase: '/api',
    },
  },
  devtools: { enabled: false },
  modules: [
    'nuxt-icon',
    '@nuxt/content',
    '@nuxt/image',
    // '@nuxtjs/mdc',
    // '@pinia/nuxt',
    // '@nuxt/fonts'
  ],
  routeRules: {
    '/thoughts': { isr: 60 }, // 静态更新
    '/api/**': { cors: true },
    '/': { prerender: true }, // ssg 下 没区别
  },
  app: {
    // TODO: bug for transition
    // pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,

    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      ],
      script: [],
      // noscript: [{ children: 'JavaScript is required' }],
      htmlAttrs: {
        class: 'text-black bg-white dark:text-dimmed-100 dark:bg-dimmed-900',
        lang: 'en',
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
    // documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
      // Object syntax can be used to override default options
      // remarkPlugins: {
      //   'remark-emoji': {
      //     emoticon: true,
      //   },
      //   'remark-gfm': {},
      // },
    },
    experimental: {
      search: {
        indexed: false,
      },
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
