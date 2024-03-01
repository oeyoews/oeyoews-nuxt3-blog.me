<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<template>
  <ContentDoc :path="`/${slug}`">
    <template #not-found> Not Found! </template>
    <template #empty class="">
      <ArticleH1>空空如也！</ArticleH1>
      <div class="flex items-center justify-center">
        <NuxtLink to="/blog" class="hover:underline text-gray-400"
          >回到博客
          <Icon name="i-ph:article-bold" color="" size="18" />
        </NuxtLink>
      </div>
    </template>
    <template #default="{ doc: post }">
      <ArticleH1> {{ post.title }} </ArticleH1>
      <Time :time="String(post.date).split(' ')[0]" class="justify-center" />
      <ArticleHr />
      <Article>
        <ContentRenderer :value="post" />
      </Article>
    </template>
  </ContentDoc>
</template>
