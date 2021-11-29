<template>
    <div class="flex items-center mt-[15px] md:mt-0">
        <!-- Arrow left -->
        <button type="button" class="mr-[19px] md:mx-[19px]">
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M5 0L6.25 1.25L2.5 5L6.25 8.75L5 10L0 5L5 0Z" fill="#002D63"/>
            </svg>
        </button>

        <!-- Number fo Page -->
        <button 
            v-for="num in 8" :key="num" 
            type="button"
            class="text-[14px] h-[24px] px-2 rounded-[5px] mx-auto hover:bg-blue-1 hover:text-white focus:bg-blue-1 focus:text-white"
        >
            {{ num == 7 ? '...': num == 8 ? 13 : num }}
        </button>


        <!-- Arrow fight -->
         <button type="button" class="ml-[19px] md:mx-[19px]">
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10L0.25 8.75L4 5L0.250001 1.25L1.5 -4.37114e-07L6.5 5L1.5 10Z" fill="#002D63"/>
            </svg>
         </button>

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