<script setup lang="ts">
import VueMarkdown from '@/components/Markdown';

const { slug } = useRoute().params;
let issue = ref<Issue>();

let { data } = await useFetch(`/api/id/${slug}`, {
  server: true, // Enable server-side rendering, but if not enable how to fix that
  method: 'GET',
  // cache: 'force-cache',
  cache: import.meta.dev ? 'default' : 'force-cache',
  mode: 'cors',
});

issue.value = data.value as unknown as Issue;

useHead({
  title: issue.value?.title,
});
</script>

<template>
  <Article>
    <ArticleH1>{{ issue?.title }}</ArticleH1>
    <Time
      :time="issue?.date.toString().split('T')[0]!"
      class="justify-center" />
    <ArticleHr />
    <VueMarkdown :source="issue?.body" v-if="issue?.body" />
    <p v-else>Nothing</p>
  </Article>
</template>
