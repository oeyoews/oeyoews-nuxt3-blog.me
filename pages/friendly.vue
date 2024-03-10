<script setup lang="ts">
import { ref } from 'vue';

interface Link {
  id: number;
  name: string;
  url: string;
}

const useId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const links = ref<Link[]>([
  { id: 0, name: 'Link 1', url: 'http://example.com' },
]);

const form = ref<Link>({
  id: null,
  name: '',
  url: '',
});

function saveLink() {
  links.value.unshift(form.value);
  resetForm();
}

function editLink(id: number) {
  const link = links.value.find((link) => link.id === id);
  form.value = { ...link } as Link; // Ensure type safety with casting
}

function deleteLink(id: number) {
  links.value = links.value.filter((link) => link.id !== id);
}

function resetForm() {
  form.value = { id: useId(), name: '', url: '' };
}
</script>

<template>
  <form class="form my-2" @submit.prevent="saveLink">
    <input
      v-model="form.name"
      placeholder="Link Name"
      required
      class="px-2 py-1 border border-gray-300 rounded" />
    <input
      v-model="form.url"
      placeholder="Link URL"
      required
      class="ml-2 px-2 py-1 border border-gray-300 rounded" />
    <button
      class="ml-2 px-4 py-1 text-white bg-green-500 rounded hover:bg-green-600">
      Save
    </button>
  </form>
  <div class="space-y-4">
    <TransitionGroup name="list">
      <div
        v-for="link in links"
        :key="link.id!"
        class="p-4 border border-gray-200 rounded-lg hover:bg-gray-200 transition-all cursor-pointer block hover:dark:bg-gray-700"
        target="_blank">
        <h2 class="">{{ link.name }}</h2>
        {{ link.id }}
        <p>desc</p>
        <div v-show="true">
          <button
            class="mt-2 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
            @click.stop="editLink(link.id)">
            Edit
          </button>
          <button
            class="mt-2 ml-2 px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            @click.stop="deleteLink(link.id)">
            Delete
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
