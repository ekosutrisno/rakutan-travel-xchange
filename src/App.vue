<template>
  <div class="container mx-auto flex flex-col bg-light-grey min-h-screen font-mulish">
    
    <div class="flex-none">
      <Header/>
      <SearchBar/>
      
      <!-- Md+ view -->
      <div v-if="smAndLarger" class="grid grid-cols-12 max-w-7xl mx-auto p-[15px]">
          <Sidebar/>
          <Main/>
      </div>
    </div>

    <!-- Sm/mobile view -->
    <div v-if="extraSmall" class="h-full flex-1 flex flex-col md:hidden">
        <MainMobileView />
       <div class="flex-none flex-shrink-0">
        <Footer/>
      </div>
    </div>

    <div class="hidden md:block">
        <Footer/>
    </div>
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent,onMounted,reactive, toRefs } from "vue";
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useApiService } from "./services";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import MainMobileView from "./components/MainMobileView.vue";

export default defineComponent({
  components: { Header, SearchBar, Sidebar, Main, Footer, MainMobileView},
  setup() {
    const apiService = useApiService();
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const state = reactive({
      results: computed(()=> apiService.getResult)
    })

    // This will get initial default data
    onMounted(()=> {
      apiService.getProperty('sgsg');
      apiService.getAutoSuggest();
    })

    const smAndLarger = breakpoints.greater('sm');
    const extraSmall = breakpoints.smaller('sm');

    return{
      ...toRefs(state),
      extraSmall,
      smAndLarger
    }
  },
});
</script>

