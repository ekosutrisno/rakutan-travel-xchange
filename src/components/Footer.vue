<template>
    <div :class="[!resultSize ? 'lg:mt-[148px]': '']" class="h-[50px] md:h-[70px] text-[12px] md:text-[14px] text-white bg-black-2 flex items-center justify-center space-x-6 md:space-x-10">
        <a href="#">FAQ</a>
        <a href="#">Terms of use</a>
        <a href="#">Privacy policy</a>
        <a href="#">Contact us</a>
    </div>
    <div class="h-[30px] md:h-[50px] text-[10px] md:text-[12px] text-white font-normal bg-black-1 flex items-center justify-center">
        Copyright CloudTravel {{new Date().getFullYear()}}.
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useApiService } from '../services'

export default defineComponent({
    setup () {
        const apiService = useApiService();
        const state = reactive({
            resultSize: computed(()=> apiService.getResult.length)
        })
        
        return {
            ...toRefs(state)
        }
    }
})
</script>