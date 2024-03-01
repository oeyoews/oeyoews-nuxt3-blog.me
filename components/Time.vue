<script setup lang="ts">
defineProps<{
  time: string;
}>();
</script>

<template>
  <div class="flex text-sm items-center text-gray-400">
    <Icon name="carbon:calendar" color="" size="18" class="mr-2" />
    {{ time }}
  </div>
</template>
