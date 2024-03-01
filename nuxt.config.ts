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
    '@pinia/nuxt',
    // '@nuxt/fonts'
  ],
  app: {
    // TODO: bug for transition
    // pageTransition: { name: 'page', mode: 'out-in' },
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
