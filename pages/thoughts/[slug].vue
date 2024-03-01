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
  <article
    class="py-6 max-w-none prose prose-gray dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <h2 v-if="issue?.title" class="text-center">{{ issue?.title }}</h2>

    <div class="flex items-center justify-center">
      <Icon name="carbon:calendar" color="" size="18" class="!mr-2" />
      {{ issue?.date.toString().split('T')[0] }}
    </div>
    <hr class="my-0 mb-4" />
    <VueMarkdown :source="issue?.body" v-if="issue?.body" />
    <p v-else>Nothing</p>
  </article>
</template>
