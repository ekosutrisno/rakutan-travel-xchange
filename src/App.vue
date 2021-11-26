<template>
  <h1>Rakutan Travel Xcahnge</h1>
  <div v-for="(result, idx) in results" :key="idx">
    {{ result.property.name }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
import { useApiService } from "./services";

export default defineComponent({
  setup() {
    const apiService = useApiService();

    const state = reactive({
      results: computed(()=> apiService.getResult)
    })

    onMounted(()=> apiService.getData('sgsg'));

    return{
      ...toRefs(state)
    }
  },
});
</script>

