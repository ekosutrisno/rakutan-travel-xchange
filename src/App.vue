<template>
  <div class="max-w-full bg-light-grey min-h-screen font-mulish">
    <Header/>
    <SearchBar/>
    <div class="grid grid-cols-12 max-w-7xl mx-auto p-[15px]">
        <Sidebar/>
        <div class="col-span-9 bg-blue-2"> RIght</div>
    </div>
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent,reactive, toRefs } from "vue";
import { useApiService } from "./services";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  components: { Header, SearchBar, Sidebar},
  setup() {
    const apiService = useApiService();

    const state = reactive({
      results: computed(()=> apiService.getResult)
    })

    return{
      ...toRefs(state)
    }
  },
});
</script>

