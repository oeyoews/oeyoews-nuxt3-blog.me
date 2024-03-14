<script setup lang="ts">
import VueMarkdown from '~/components/Markdown';

const { data: readme } = useFetch(
  'https://cdn.jsdelivr.net/gh/oeyoews/oeyoews@main/README.md',
  {
    cache: 'default',
    method: 'get',
    server: true,
  }
);
</script>

<template>
  <ArticleH1> 个人项目 </ArticleH1>
  <ArticleHr />
  <Article>
    <VueMarkdown :source="readme" v-if="readme" />
  </Article>
</template>
