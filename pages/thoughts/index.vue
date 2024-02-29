<script setup lang="ts">
let issues = ref<Issue[]>([]);
let pages = ref(0);
let titles = ref<string[]>([]);

const { data: datainfo, pending: infoPending } = await useFetch('/api/info', {
  // NOTE:
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

issues.value = issues.value.filter(
  (issue) =>
    !(
      issue.state_reason === 'not_planned' ||
      Object.hasOwn(issue, 'pull_request')
    )
);

titles.value = issues.value.map((issue) => issue.title);
</script>

<template>
  <div v-for="post in issues">
    <NuxtLink :to="`/thoughts/${post.number}`" class="no-underline">
      <h2
        class="flex flex-col justify-between rounded p-6 text-base my-8 dark:bg-[#2d333b] hover:shadow-sm bg-transparent border-[#d0d7de] dark:border-[#444c56] border hover:outline outline-[#d0d7de] hover:outline-1 dark:outline-[#444c56] border-solid overflow-auto">
        {{ post.title }}
      </h2>
    </NuxtLink>
  </div>
</template>
