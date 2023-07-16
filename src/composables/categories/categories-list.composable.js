import { useQuery } from '@vue/apollo-composable'
import getCategories from "@/api/queries/get-categories.gql";
import { onMounted, readonly, ref, watch } from "vue";
const mainCategories = ref([]);
export const useCategories = () => {

  function setMainCategories(result) {
    mainCategories.value = result?.value?.categories?.items[0]?.children;
  }
  function fetchCategories() {
    const { result } = useQuery(getCategories);
    watch(result, () => {

      setMainCategories(result);
    })
  }

  onMounted(() => fetchCategories());

  return {
    mainCategories: readonly(mainCategories),
  };
};
