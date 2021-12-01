<template>
    <div class="sidebar-card">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Star rating</p>
            <button type="button" class="font-bold text-blue-1 text-[12px]">CLEAR</button>
        </div>
        <div v-for="star in starsData" :key="star.score" class="flex items-center justify-between w-full text-[12px]">
            <div class="inline-flex items-center space-x-2">
                <input
                    :id="star.score.toString()" 
                    type="checkbox"
                    v-model="star.value" 
                    :checked="star.value" 
                    class="text-[12px] rounded-[3px] border-line"
                >
                
                <label :for="star.score.toString()" v-if="star.score > 0" class="inline-flex items-center space-x-0.5">
                    <span v-for="idx in star.score" :key="idx">
                        <svg width="15" height="14" aria-hidden="true" class="cursor-pointer hover:scale-125 transition-transform" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#E9BF2D"/>
                        </svg>  
                    </span>
                </label>
                <span v-else>No rating</span>
                    
            </div>            
            <p class="text-placeholder"> {{ star.score }} </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { FilterData } from '../../@types/model.inteface'

export default defineComponent({
    props:{
        stars: {
            type: Array as ()=> FilterData[]
        }
    },
    setup (props) {
        const state = reactive({
            starsData: props.stars as FilterData[]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>