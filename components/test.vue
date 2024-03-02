<script setup lang="ts">
const renderComponent = ref(false);
const time = ref(new Date().toLocaleTimeString());
const timer = ref();

onMounted(() => {
  timer.value = setInterval(() => {
    time.value = new Date().toLocaleTimeString();
    console.log(time.value);
  }, 1000);
});

const toggleRender = () => {
  renderComponent.value = !renderComponent.value;
};

// ?? which one is better
onBeforeMount(() => {
  clearInterval(timer.value);
  console.log('beforeDestroy');
});

// onUnmounted(() => {
//   clearInterval(timer.value);
//   console.log('unmounted');
// });
</script>

<template>
  <h2>Vue3 插件示例</h2>
  <button @click="toggleRender" class="border-solid p-2">点击切换预览</button>

  <div v-if="renderComponent">
    {{ time }}
  </div>
</template>
