<script setup lang="ts">
let issues = ref<Issue[]>([]);
let pages = ref(0);
let titles = ref<string[]>([]);

const articles = useState('articles-thoughts', () => 10);

// TODO: 移动端左滑返回修复
const { data: datainfo } = await useFetch('/api/info', {
  server: true, // Enable server-side rendering, default is enabled
  method: 'GET',
  cache: import.meta.dev ? 'default' : 'force-cache',
});

pages.value = Math.ceil(datainfo.value as number) / 30;

for (let i = 0; i < pages.value; i++) {
  const { data } = await useFetch(`/api/issue/${i + 1}`, {
    server: true,
    cache: import.meta.dev ? 'default' : 'force-cache',
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

useHead({
  title: 'Thoughts',
});
</script>

<template>
  <template v-for="(post, index) in issues" :key="post.number">
    <ArticleList v-if="index < articles">
      <NuxtLink :to="`/thoughts/${post.number}`" class="no-underline">
        <ArticleH2> {{ post.title }} </ArticleH2>
      </NuxtLink>
      <div
        class="flex space-x-2 text-gray-400 items-center justify-start text-sm">
        <NuxtLink
          :to="post.html_url"
          target="_blank"
          class="text-gray-400 flex items-center transition-all delay-100 underline group">
          <Icon
            name="carbon:logo-github"
            color=""
            size="18"
            class="mr-2 group-hover:animate-spin" />
          #{{ post.number }}
        </NuxtLink>
        <Time :time="post.date.toString().split('T')[0]!" />
      </div>
    </ArticleList>
  </template>
  <!-- TODO: 分开加载数据 -->
  <LoadMore @click="(n) => (articles += n)" v-if="articles < issues.length" />
</template>
