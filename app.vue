<template>
  <NuxtLoadingIndicator :height="2" />
  <NuxtLayout>
    <Nav />
    <div class="container mx-auto max-w-4xl py-8 px-4 prose dark:prose-invert">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
