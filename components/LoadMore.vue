<script setup lang="ts">
defineEmits<{
  (e: 'click', number: number): void;
}>();
</script>

<template>
  <ArticleList class="p-2">
    <button @click="() => $emit('click', 10)" class="">
      <Icon name="carbon:chevron-down" color="" size="18" class="mr-2" />
      加载更多文章
    </button>
  </ArticleList>
</template>
