<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<!-- <template #empty>
  <h1>Document is empty</h1>
</template> -->

<template>
  <article
    class="py-6 max-w-none prose prose-indigo dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <ContentDoc :path="`/${slug}`">
      <template #not-found> nothing </template>
      <template #empty>
        <small>空空如也！</small>
      </template>
      <template #default="{ doc }">
        <h1 class="capitalize text-balance dark:text-[#cdd9e5] text-center">
          {{ doc.title }}
        </h1>
        <ContentRenderer :value="doc" />
      </template>
    </ContentDoc>
  </article>
</template>
