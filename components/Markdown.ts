// https://github.com/nuxt-community/markdownit-module/issues/47
// https://github.com/cloudacy/vue-markdown-render/blob/master/src/VueMarkdown.ts

import MarkdownIt, { type Options } from 'markdown-it';
import { computed, defineComponent, h, ref } from 'vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts';
import 'markdown-it-github-alerts/styles/github-base.css';
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css';
import 'markdown-it-github-alerts/styles/github-colors-light.css';
// @ts-ignore
import MarkdownItCheckbox from 'markdown-it-task-lists';
// @ts-ignore
import MarkdownItPangu from 'markdown-it-pangu';
// @ts-ignore
import MarkdownItToc from 'markdown-it-task-lists';
// @ts-ignore
import MarkdownItAbbr from 'markdown-it-abbr';
// @ts-ignore
import MarkdownItFootnote from 'markdown-it-footnote';
// @ts-ignore
import MarkdownItContainer from 'markdown-it-container';

// new MarkdownIt().render;
const VueMarkdown = defineComponent({
  name: 'VueMarkdown',
  props: {
    source: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: false,
    },
    plugins: {
      type: Array,
      required: false,
    },
  },

  setup(props) {
    const options: Options = {
      html: true,
      linkify: true,
      typographer: true,
      breaks: true,
      langPrefix: 'language-',
      // @ts-ignore
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre class="not-prose"><code class="hljs">' +
              hljs.highlight(str, { language: lang, ignoreIllegals: true })
                .value +
              '</code></pre>'
            );
          } catch (__) {}
        }
        return (
          '<pre><code class="hljs">' +
          // md.value.utils.escapeHtml(str) +
          str +
          '</code></pre>'
        );
      },
    };

    const md = ref<MarkdownIt>(new MarkdownIt(props.options ?? options));

    md.value
      .use(MarkdownItAnchor)
      .use(MarkdownItAbbr)
      .use(MarkdownItToc)
      .use(MarkdownItCheckbox)
      .use(MarkdownItGitHubAlerts)
      .use(MarkdownItFootnote)
      .use(MarkdownItContainer)
      .use(MarkdownItPangu);

    // for (const plugin of props.plugins ?? []) {
    //   md.value.use(plugin);
    // }

    const content = computed(() => md.value.render(props.source));

    return () => h('div', { innerHTML: content.value });
  },
});

export default VueMarkdown;
