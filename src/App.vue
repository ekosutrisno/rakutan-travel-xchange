<template>
  <div class="container bg-light-grey min-h-screen font-mulish">
    <Header/>
    <SearchBar/>
    <div class="grid grid-cols-12 max-w-7xl mx-auto p-[15px]">
        <Sidebar/>
        <Main/>
    </div>
    <Footer/>
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent,onMounted,reactive, toRefs } from "vue";
import { useApiService } from "./services";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: { Header, SearchBar, Sidebar, Main, Footer},
  setup() {
    const apiService = useApiService();

    const state = reactive({
      results: computed(()=> apiService.getResult)
    })

    // onMounted(()=> apiService.getData('sgsg'))

    return{
      ...toRefs(state)
    }
  },
});
</script>

