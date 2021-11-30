<template>
    <div class="h-auto md:w-[290px] rounded-[5px] p-[20px] bg-white flex flex-col space-y-4">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Reservation policy</p>
        </div>
        <div v-for="policy in reservationPoliciesData" :key="policy.text" class="flex items-center justify-between w-full text-[12px]">
            <div class="inline-flex items-center space-x-2">
                <input
                    :id="policy.text" 
                    type="checkbox"
                    v-model="policy.value" 
                    :checked="policy.value" 
                    class="text-[12px] rounded-[3px] border-line"
                >
                <label :for="policy.text"> {{ policy.text }} </label>
            </div>            
            <p class="text-placeholder"> {{ policy.score }} </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { FilterData } from '../../@types/model.inteface'

export default defineComponent({
    props:{
        reservationPolicies: {
            type: Array as ()=> FilterData[]
        }
    },
    setup (props) {
         const state = reactive({
            reservationPoliciesData: props.reservationPolicies as FilterData[]
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style scoped>

</style>