<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<!-- <template #empty>
  <h1>Document is empty</h1>
</template> -->

<template>
  <article
    class="py-6 max-w-none prose prose-gray dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <ContentDoc :path="`/${slug}`">
      <template #not-found> Not Found! </template>
      <template #empty>
        <small>空空如也！</small>
      </template>
      <template #default="{ doc: post }">
        <ArticleH1> {{ post.title }} </ArticleH1>

        <Time :time="String(post.date).split(' ')[0]" class="justify-center" />
        <ArticleHr />
        <ContentRenderer :value="post" />
      </template>
    </ContentDoc>
  </article>
</template>
