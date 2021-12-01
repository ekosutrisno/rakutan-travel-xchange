<template>
    <div class="sidebar-card">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Meal plan</p>
        </div>
        <div v-for="plan in mealPlanData" :key="plan.text" class="flex items-center justify-between w-full text-[12px]">
            <div class="inline-flex items-center space-x-2">
                <input
                    :id="plan.text" 
                    type="checkbox"
                    v-model="plan.value" 
                    :checked="plan.value" 
                    class="text-[12px] rounded-[3px] border-line"
                >
                <label :for="plan.text"> {{ plan.text }} </label>
            </div>            
            <p class="text-placeholder"> {{ plan.score }} </p>
        </div>
        <button type="button" class="text-[12px] text-blue-1 font-semibold inline-flex items-center space-x-1">
            <span>Show 9 more</span> 
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
        mealPlan: {
            type: Array as ()=> FilterData[]
        }
    },
    setup (props) {
         const state = reactive({
            mealPlanData: props.mealPlan as FilterData[]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style scoped>

</style>