<script setup lang="ts">
const articles = useState('articles-blog', () => 10);

useHead({
  title: 'Blog',
  titleTemplate: '%s | oeyoews',
});
</script>

<template>
  <ContentList path="/">
    <template #default="{ list }">
      <template v-for="(post, index) in list" :key="post._path">
        <ArticleList
          v-if="
            post._path !== '/' && post._extension === 'md' && index <= articles
          "
          :key="post._path">
          <NuxtLink :to="`/blog${post._path}`" class="no-underline">
            <ArticleH2>
              {{ post.title }}
            </ArticleH2>
            <CardInfo>
              <Time :time="String(post.date).split(' ')[0]" />
            </CardInfo>
          </NuxtLink>
        </ArticleList>
      </template>
      <LoadMore @click="(n) => (articles += n)" v-if="articles < list.length" />
    </template>
    <template #not-found>
      <p>No articles found.</p>
    </template>
  </ContentList>
</template>
