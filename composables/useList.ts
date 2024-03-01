import { ref } from 'vue';

const useList = (base: number = 10) => {
  const list = ref<number>(base);

  const updateList = () => {
    list.value += 10;
  };

  return {
    list,
    updateList,
  };
};

export default useList;
