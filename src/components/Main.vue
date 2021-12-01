<template>
    <!-- Point to back to top -->
    <div ref="pageTop" class="absolute top-0"></div>
    
    <div class="col-span-9">

        <main>
            <!-- Filter button -->
            <FilterButton/>
            
            <!-- Placeholder session when loading fetch api -->
            <div v-if="loading">
                <PropertyCardPlaceholder v-for="idx in 3" :key="idx" />
            </div>
        
            <!-- Property Card -->
            <div class="grid gap-2">
                <!-- If Property available -->
                <PropertyCard v-for="(result, idx) in results" :key="idx" :result="result"/>

                <!-- If property empty -->
                <div v-if="!results.length && !loading && !error" class="text-center flex flex-col mt-[63px]">
                    <div class="mx-auto">
                        <svg width="23" height="24" aria-hidden="true" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2845 21.8602L16.7062 15.9194C18.1405 14.1735 18.9263 11.9768 18.9263 9.68999C18.9263 4.34701 14.6811 0 9.46317 0C4.24526 0 0 4.34701 0 9.68999C0 15.033 4.24526 19.38 9.46317 19.38C11.4221 19.38 13.2888 18.775 14.8847 17.6265L20.5055 23.6124C20.7404 23.8622 21.0564 24 21.395 24C21.7155 24 22.0196 23.8749 22.2504 23.6474C22.7408 23.1641 22.7565 22.3628 22.2845 21.8602ZM9.46317 2.52782C13.32 2.52782 16.4577 5.74069 16.4577 9.68999C16.4577 13.6393 13.32 16.8522 9.46317 16.8522C5.60631 16.8522 2.46865 13.6393 2.46865 9.68999C2.46865 5.74069 5.60631 2.52782 9.46317 2.52782Z" fill="#757575"/>
                        </svg>
                    </div>
                    <h3 class="font-bold mt-[17px] text-placeholder">Sorry! We couldn't find any properties for your search.</h3>
                </div>

                <!-- If Bad request status code 4xx -->
                <div v-if="error" class="text-center flex flex-col mt-[63px]">
                    <div class="mx-auto">
                        <svg width="20" height="20" aria-hidden="true" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9 14H11V16H9V14ZM9 4H11V12H9V4Z" fill="#757575"/>
                        </svg>
                    </div>
                    <h3 class="font-bold mt-[17px] text-placeholder">Opps, something went wrong.</h3>
                    <p class="font-normal text-[12px] text-placeholder"> {{ error.message }} </p>
                </div>

            </div>

            <!-- Pagination bar and Back to top button -->
            <div v-if="results.length" class="flex items-center justify-between my-[24px]">
                <div>
                    <button @click="scrollToPageUp" class="text-[14px] text-blue-1 font-normal">Back to top</button>
                </div>
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <div>
                        <p class="text-[14px] font-normal text-black-2">Showing Results 1 – 20 of {{ results.length }}</p>
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
import PropertyCardPlaceholder from './main/PropertyCardPlaceholder.vue';

export default defineComponent({
    components: { FilterButton, PropertyCard, PaginationBar, PropertyCardPlaceholder },

    setup () {
        const apiService = useApiService();
        const state = reactive({
            results: computed(()=> apiService.getResult as Result[]),
            loading: computed(()=>apiService.loading),
            error: computed(()=>apiService.errorResponse)
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