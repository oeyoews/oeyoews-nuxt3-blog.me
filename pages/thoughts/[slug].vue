<script setup lang="ts">
const { slug } = useRoute().params;
import VueMarkdown from '@/components/Markdown';

let { data } = await useFetch(`/api/id/${slug}`, {
  server: true, // Enable server-side rendering, but if not enable how to fix that
  method: 'GET',
  cache: 'force-cache',
  mode: 'cors',
});

const issue = data.value as unknown as Issue;

useHead({
  title: issue.title,
});
</script>

<template>
  <article
    class="py-6 max-w-none prose prose-indigo dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <h2>{{ issue?.title }}</h2>
    <hr />
    <VueMarkdown :source="issue?.body" v-if="issue?.body" />
    <p v-else>nothing</p>
  </article>
</template>
