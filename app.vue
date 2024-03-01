<template>
  <NuxtLoadingIndicator :height="2" />
  <NuxtLayout>
    <Nav />
    <div class="container mx-auto max-w-4xl py-8 px-4 prose dark:prose-invert">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>
