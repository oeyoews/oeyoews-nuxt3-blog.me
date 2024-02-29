// https://github.com/nuxt-community/markdownit-module/issues/47
// https://github.com/cloudacy/vue-markdown-render/blob/master/src/VueMarkdown.ts

import MarkdownIt from 'markdown-it';
import { computed, defineComponent, h, ref } from 'vue';
export type { Options } from 'markdown-it';

new MarkdownIt().render;
const VueMarkdown: Component = defineComponent({
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
    const md = ref<MarkdownIt>(new MarkdownIt(props.options ?? {}));

    // for (const plugin of props.plugins ?? []) {
    //   md.value.use(plugin);
    // }

    const content = computed(() => md.value.render(props.source));

    return () => h('div', { innerHTML: content.value });
  },
});

export default VueMarkdown;
