<template>
  <div class="container bg-light-grey min-h-screen font-mulish">
    <Header/>
    <SearchBar/>
    <!-- Md+ view -->
    <div class="hidden md:grid grid-cols-12 max-w-7xl mx-auto p-[15px]">
        <Sidebar/>
        <Main/>
    </div>

    <!-- Sm/mobile view -->
    <div class="h-full md:hidden">
      <div class="p-4">
         <button 
            type="button"
            class="h-[30px] w-full px-[10px] text-[14px] font-bold rounded-[3px] bg-blue-1 text-white inline-flex items-center justify-between"
          >
            <span>Select one</span>
            <span>
              <svg width="8" height="5" aria-hidden="true" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L4 5L8 0H0Z" fill="white"/>
              </svg>
            </span>
         </button>
      </div>
      <div class="px-4 pb-4">
        <h4 class="font-bold text-[14px]">Singapore: {{results.length}} properties found</h4>
      </div>
      <div class="grid gap-2 p-[10px]">
          <PropertyCardSmall 
            v-for="(result, idx) in results" 
            :key="idx" 
            :result="result"
          />
      </div>
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
import PropertyCardSmall from "./components/main/PropertyCardSmall.vue";

export default defineComponent({
  components: { Header, SearchBar, Sidebar, Main, Footer, PropertyCardSmall},
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

