<template>
    <div class="sidebar-card">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Reviews</p>
            <button type="button" class="font-bold text-blue-1 text-[12px]">CLEAR</button>
        </div>
        <div v-for="review in reviewsData" :key="review.text" class="flex items-center justify-between w-full text-[12px]">
            <div class="inline-flex items-center space-x-2">
                <input
                    :id="review.text" 
                    type="checkbox" 
                    v-model="review.value" 
                    :checked="review.value" 
                    class="text-[12px] rounded-[3px] border-line"
                >
                <label :for="review.text"> {{ review.text }} </label>
            </div>            
            <p class="text-placeholder"> {{ review.score }} </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { FilterData } from '../../@types/model.inteface'

export default defineComponent({
    props:{
        reviews: {
            type: Array as ()=> FilterData[]
        }
    },
    setup (props) {
        const state = reactive({
            reviewsData: props.reviews as FilterData[]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>