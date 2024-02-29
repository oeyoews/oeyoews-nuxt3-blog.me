<template>
  <div
    class="flex items-center justify-between print:hidden mb-2 sticky left-0 top-0 z-[1000] backdrop-blur-sm p-4 mx-auto px-2 md:px-16 w-full">
    <nav class="mx-auto lg:mx-0 lg:ml-auto text-sm font-medium space-x-6 flex">
      <NuxtLink to="/">
        <Icon name="fa:home" color="" size="24" />
      </NuxtLink>
      <NuxtLink to="/blog">
        <Icon name="i-ph:article-bold" color="" size="24" />
      </NuxtLink>
      <!-- <NuxtLink to="/thoughts">
        <Icon name="i-simple-icons:tiddlywiki" color="" size="24" />
      </NuxtLink> -->
      <NuxtLink to="/thoughts">
        <Icon name="i-mdi:thought-bubble" color="" size="24" />
      </NuxtLink>
    </nav>
  </div>
</template>
