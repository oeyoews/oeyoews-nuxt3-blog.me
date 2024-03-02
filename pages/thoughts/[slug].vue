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

const { data: comments } = await useFetch(`/api/comment/${slug}`, {
  server: true,
  cache: import.meta.dev ? 'default' : 'force-cache',
});

issue.value = data.value as unknown as Issue;

useHead({
  title: issue.value?.title,
});
</script>

<template>
  <ArticleH1>{{ issue?.title }}</ArticleH1>
  <Time :time="issue?.date.toString().split('T')[0]!" class="justify-center" />
  <ArticleHr />
  <Article>
    <VueMarkdown :source="issue?.body" v-if="issue?.body" />
    <p v-else>什么也没有</p>
  </Article>

  <!-- TODO: add loadmore -->
  <template v-if="(comments as IssueComment[]).length > 0">
    <ArticleH2 class="mt-8">评论</ArticleH2>
    <ArticleHr />
    <template v-for="comment in comments as IssueComment[]">
      <NuxtLink :href="comment.html_url" target="_blank">
        <ArticleList class="!bg-transparent">
          <CardInfo>
            <div>
              <NuxtImg
                :src="comment.user.avatar_url"
                class="size-4 align-top" />
            </div>
            <NuxtLink
              :to="comment.user.html_url"
              target="_blank"
              class="text-gray-400 hover:underline">
              {{ comment.user.login }}
            </NuxtLink>

            <Time
              :time="
                comment.created_at.toString().split('Z')[0].replace('T', ' ')
              " />
          </CardInfo>
          <Article>
            <VueMarkdown :source="comment.body" />
          </Article>
        </ArticleList>
      </NuxtLink>
    </template>
  </template>
</template>
