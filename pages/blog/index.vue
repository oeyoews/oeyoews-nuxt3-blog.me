<template>
  <ContentList path="/">
    <template #default="{ list }">
      <template v-for="post in list" :key="post._path">
        <ArticleList
          v-if="post._path !== '/' && post._extension === 'md'"
          :key="post._path">
          <NuxtLink :to="`/blog${post._path}`" class="no-underline">
            <ArticleH2>
              {{ post.title }}
            </ArticleH2>
            <Time :time="String(post.date).split(' ')[0]" />
          </NuxtLink>
        </ArticleList>
      </template>
    </template>
    <template #not-found>
      <p>No articles found.</p>
    </template>
  </ContentList>
</template>
