<template>
    <!-- Point to back to top -->
    <div ref="pageTop" class="absolute top-0"></div>
    
    <div class="col-span-9">

        <main>
            <FilterButton/>
            <div class="grid gap-2">
                <PropertyCard v-for="(result, idx) in results" :key="idx" :result="result"/>
            </div>
            <div v-if="results.length" class="flex items-center justify-between my-[24px]">
                <div>
                    <button @click="scrollToPageUp" class="text-[14px] text-blue-1 font-normal">Back to top</button>
                </div>
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <div>
                        <p class="text-[14px] font-normal text-black-2">Showing Results 1 – 20 of 9999</p>
                    </div>
                    <PaginationBar/>
                </div>
            </div>
        </main>
    </div>
</template> 

<script lang="ts">
import { computed, defineComponent, reactive,ref, toRefs } from 'vue'
import { Result } from '../@types/model.inteface';
import { useApiService } from '../services'
import FilterButton from './main/FilterButton.vue'
import PaginationBar from './main/PaginationBar.vue';
import PropertyCard from './main/PropertyCard.vue';

export default defineComponent({
  components: { FilterButton, PropertyCard, PaginationBar },
    setup () {
        const apiService = useApiService();
        const state = reactive({
            results: computed(()=> apiService.getResult as Result[])
        })

        const pageTop = ref();
        const scrollToPageUp = () => {
            if(pageTop != null)
                pageTop.value.scrollIntoView({behavior: 'smooth'});
      }

        return {
            ...toRefs(state),
            pageTop,
            scrollToPageUp
        }
    }
})
</script>