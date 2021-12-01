<template>
    <div class="h-[142px] md:w-[290px] rounded-[5px] p-[20px] bg-white flex flex-col justify-between">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Price per night</p>
            <button type="button" class="font-bold text-blue-1 text-[12px]">CLEAR</button>
        </div>
        
        <div class="flex items-center w-full">
            <div class="rounded w-full bg-light-grey h-[7px]"></div>
        </div>

        <div class="flex items-center justify-between w-full">
            <input type="text" value="SGD 0" class="w-[110px] text-[12px] h-[30px] rounded-[3px] border-line">
            <span>
                <svg width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="14" y2="0.5" stroke="#757575"/>
                </svg>
            </span>
            <input type="text" value="SGD 500" class="w-[110px] text-[12px] h-[30px] rounded-[3px] border-line">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>