<template>
  <main>
    <ContentList path="/">
      <template #default="{ list }">
        <div v-for="post in list" :key="post._path">
          <NuxtLink
            :to="`/blog${post._path}`"
            class="no-underline"
            v-if="post._path !== '/'">
            <h2
              class="flex flex-col justify-between rounded p-6 text-base my-8 dark:bg-[#2d333b] hover:shadow-sm bg-transparent border-[#d0d7de] dark:border-[#444c56] border hover:outline outline-[#d0d7de] hover:outline-1 dark:outline-[#444c56] border-solid overflow-auto">
              {{ post.title }}
            </h2>
          </NuxtLink>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </main>
</template>
