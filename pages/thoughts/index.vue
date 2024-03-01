<script setup lang="ts">
let issues = ref<Issue[]>([]);
let pages = ref(0);
let titles = ref<string[]>([]);

const { data: datainfo } = await useFetch('/api/info', {
  server: true, // Enable server-side rendering, default is enabled
  method: 'GET',
  cache: 'force-cache',
});

pages.value = Math.ceil(datainfo.value as number) / 30;

for (let i = 0; i < pages.value; i++) {
  const { data } = await useFetch(`/api/issue/${i + 1}`, {
    server: true,
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
  <div
    v-for="post in issues"
    class="flex flex-col justify-between rounded p-6 text-base my-8 dark:bg-[#2d333b] hover:shadow-sm bg-transparent border-[#d0d7de] dark:border-[#444c56] border hover:outline outline-[#d0d7de] hover:outline-1 dark:outline-[#444c56] border-solid overflow-auto">
    <NuxtLink :to="`/thoughts/${post.number}`" class="no-underline">
      <h2
        class="mt-0 mb-2 truncate text-blance capitalize dark:text-[#cdd9e5] text-base">
        {{ post.title }}
      </h2>
    </NuxtLink>
    <div class="flex space-x-2 text-gray-400 items-center justify-start">
      <NuxtLink
        :to="post.html_url"
        target="_blank"
        class="text-gray-400 flex items-center">
        <Icon name="carbon:logo-github" color="" size="18" class="mr-2" />
        #{{ post.number }}
      </NuxtLink>
      <time
        datetime=""
        class="block font-serif leading-none text-gray-400/60 text-sm"></time>
      <Icon name="carbon:calendar" color="" size="18" class="!mr-2" />
      {{ post.date.toString().split('T')[0] }}
    </div>
  </div>
</template>
