<script setup lang="ts">
import VueMarkdown from '@/components/Markdown';

const { slug } = useRoute().params;
let issue = ref<Issue>();

let { data } = await useFetch(`/api/id/${slug}`, {
  server: true, // Enable server-side rendering, but if not enable how to fix that
  method: 'GET',
  cache: 'force-cache',
  mode: 'cors',
});

issue.value = data.value as unknown as Issue;

useHead({
  title: issue.value?.title,
});
</script>

<template>
  <article
    class="py-6 max-w-none prose prose-indigo dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <h2 v-if="issue">{{ issue?.title }}</h2>
    <hr />
    <VueMarkdown :source="issue?.body" v-if="issue?.body" />
    <p v-else>nothing</p>
  </article>
</template>
