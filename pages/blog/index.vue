<template>
  <main>
    <ContentList path="/">
      <template #default="{ list }">
        <div v-for="post in list" :key="post._path">
          <div
            class="flex flex-col justify-between rounded p-6 text-base my-8 dark:bg-[#2d333b] hover:shadow-sm bg-transparent border-[#d0d7de] dark:border-[#444c56] border hover:outline outline-[#d0d7de] hover:outline-1 dark:outline-[#444c56] border-solid overflow-auto"
            v-if="post._path !== '/' && post._extension === 'md'">
            <NuxtLink :to="`/blog${post._path}`" class="no-underline">
              <h2
                class="mt-0 mb-2 truncate text-blance capitalize dark:text-[#cdd9e5] text-base">
                {{ post.title }}
              </h2>
              <div class="flex text-sm items-center text-gray-400">
                <Icon name="carbon:calendar" color="" size="18" class="mr-2" />
                <!-- TODO: why use string -->
                {{ String(post.date).split(' ')[0] }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </main>
</template>
