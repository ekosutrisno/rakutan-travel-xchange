<template>
    <div class="col-span-9">
        <main>
            <FilterButton/>
            <div class="grid gap-2">
                <div v-for="(result, idx) in results" :key="idx" class="p-[10px] h-[230px] rounded-[5px] flex gap-2 bg-white hover:shadow-md transition-shadow">
                    <div class="w-[200px] flex-none flex-shrink-0">
                        <div class="flex flex-col w-[200px] h-[160px] overflow-hidden">
                            <img :src="result.property.heroImage.url" alt="hero-image" class="object-cover h-full w-full">
                        </div>
                        <div class="grid grid-cols-4 gap-0.5 pt-0.5">
                            <div 
                                v-for="(img, idx) in result.property.gallery != undefined ? result.property.gallery.slice(0,4) : [] " 
                                :key="idx"
                                class="h-[48px] w-full overflow-hidden"
                            >
                                <img 
                                    v-if="img.s != undefined" 
                                    :src="img.s.url" 
                                    :alt="`${img.s.caption}-${idx}`"
                                    class="h-full w-full object-cover hover:scale-150 transition-transform"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 p-[8px]">
                        <div class="flex items-start justify-between">
                            <div>
                                <h3 class="font-bold">{{result.property.name}}</h3>
                                <p class="font-normal text-[12px] mt-[5px]"> {{result.property.location.address}} </p>
                                <p class="font-normal text-[12px] mt-[7px] text-placeholder max-w-sm truncate"> 
                                    {{
                                        `"${
                                            result.property.reviews != undefined
                                            ? result.property.reviews.summary.text
                                            : 'Summary not available.'
                                        }"`
                                    }} 
                                </p>
                                <div class="inline-flex items-center w-full space-x-[5px]">
                                    <button class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                                        Breakfast
                                    </button>
                                    <button class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                                        Free cancellation
                                    </button>
                                    
                                </div>
                            </div>
                            <div class="w-[146px] h-[50.5px] object-cover">
                                <img src="/TY-score-widget-transparent.png" alt="TY-Score">
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </main>
    </div>
</template> 

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { Result } from '../@types/model.inteface';
import { useApiService } from '../services'
import FilterButton from './main/FilterButton.vue'

export default defineComponent({
  components: { FilterButton },
    setup () {
        const apiService = useApiService();
        const state = reactive({
            results: computed(()=> apiService.getResult as Result[])
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>