<script setup lang="ts">
let issues = ref<Issue[]>([]);
let pages = ref(0);

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

const totalArticles = issues.value.length;

// NOTE: 如果列表查询 content 使用 命令式写法，下面代码可以省去，否则 html 中的 v-if 注释太多

const slicedIssues = ref<Issue[]>([]);

// TIPS: 类似于 useeffect，首次会自动执行，自动收集依赖，更新函数
watchEffect(() => {
  slicedIssues.value = issues.value.slice(0, articles.value);
});

// TIPS: watch 更像带有依赖的 useeffect，只要依赖发生变化就会执行
// 更新列表
// watch(articles, () => {
//   issues.value = issues.value.slice(0, articles.value);
// });

useHead({
  title: 'Thoughts',
  titleTemplate: '%s | oeyoews',
});
</script>

<template>
  <template v-for="post in slicedIssues" :key="post.number">
    <!-- list -->
    <ArticleList>
      <!-- heading -->
      <NuxtLink :to="`/thoughts/${post.number}`" class="no-underline">
        <ArticleH2> {{ post.title }} </ArticleH2>
      </NuxtLink>
      <!-- info -->
      <CardInfo>
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
      </CardInfo>
    </ArticleList>
  </template>
  <!-- TODO: 分开加载数据 -->
  <LoadMore @click="(n) => (articles += n)" v-if="articles < totalArticles" />
</template>
