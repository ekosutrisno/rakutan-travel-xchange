<template>
    <div class="h-auto md:w-[290px] rounded-[5px] p-[20px] bg-white flex flex-col space-y-4">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Facilities</p>
        </div>
        <div v-for="facility in facilityData" :key="facility.text" class="flex items-center justify-between w-full text-[12px]">
            <div class="inline-flex items-center space-x-2">
                <input 
                    :id="facility.text"
                    type="checkbox"
                    v-model="facility.value" 
                    :checked="facility.value"
                    class="text-[12px] rounded-[3px] border-line"
                >
                <label :for="facility.text"> {{ facility.text }} </label>
            </div>            
            <p class="text-placeholder"> {{ facility.score }} </p>
        </div>
        <button type="button" class="text-[12px] text-blue-1 font-semibold inline-flex items-center space-x-1">
            <span>Show 26 more</span> 
            <span>
                <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L3.2 4L6.4 0H0Z" fill="#002D63"/>
                </svg>
            </span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { FilterData } from '../../@types/model.inteface'

export default defineComponent({
    props:{
        facilities: {
            type: Array as ()=> FilterData[]
        }
    },
    setup (props) {
         const state = reactive({
            facilityData: props.facilities as FilterData[]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style scoped>

</style>