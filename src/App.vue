<template>
  <div class="max-w-full bg-light-grey min-h-screen font-mulish">
    <Header/>
    <SearchBar/>
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import { useApiService } from "./services";

export default defineComponent({
  components: { Header, SearchBar },
  setup() {
    const apiService = useApiService();

    const state = reactive({
      results: computed(()=> apiService.getResult)
    })

    // onMounted(()=> apiService.getData('sgsg'));

    return{
      ...toRefs(state)
    }
  },
});
</script>

