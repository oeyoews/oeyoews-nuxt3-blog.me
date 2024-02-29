<script setup lang="ts">
const { slug } = useRoute().params;
import VueMarkdown from '@/components/Markdown';

let issues = ref<Issue[]>([]);
let pages = ref(0);

const { data: datainfo, pending: infoPending } = await useFetch('/api/info', {
  server: true, // Enable server-side rendering, but if not enable how to fix that
  method: 'GET',
  cache: 'force-cache',
});

pages.value = Math.ceil(datainfo.value as number) / 30;

for (let i = 0; i < pages.value; i++) {
  const { data } = await useFetch(`/api/issue/${i + 1}`, {
    cache: 'force-cache',
  });
  issues.value.push(...(data.value as Issue[]));
}

const issue = issues.value.find((issue) => issue.slug === slug);
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
