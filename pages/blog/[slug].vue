<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<!-- <template #empty>
  <h1>Document is empty</h1>
</template> -->

<template>
  <article
    class="py-6 max-w-none prose prose-indigo dark:prose-invert prose-img:my-2 prose-img:rounded-md overflow-x-hidden dark:text-[#cdd9e5]">
    <ContentDoc :path="`/${slug}`" v-slot="{ doc }">
      <h1 class="capitalize text-balance dark:text-[#cdd9e5] text-center">
        {{ doc.title }}
      </h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
