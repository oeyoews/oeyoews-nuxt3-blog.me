<script setup lang="ts">
import { Fragment } from 'vue/jsx-runtime';

const { slug } = useRoute().params;
</script>

<template>
  <ContentDoc :path="`/${slug}`">
    <template #not-found> Not Found! </template>
    <template #empty>
      <small>空空如也！</small>
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
